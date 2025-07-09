import { Armor, Body, Bullet, Weapon } from "./types";

export interface TTKDiscription {
  weaponName: string,
  bulletName: string,
  armorName: string,
  distance: number,
  ttk: number
}

function attack(weapon: Weapon, bullet: Bullet, armor: Armor, body: Body, healthRemaining: number, armorRemaining: number): [number, number] {

  // console.log(`attack ${weapon.name}, ${bullet.name}, ${armor.name}, ${body}, ${healthRemaining}, ${armorRemaining}`)
    // 一颗子弹造成的护甲伤害
    const expectedArmorDamange = weapon.armorDamage * bullet.armorDamageRatio[armor.armorClass - 1]

    const canArmorProtectBody = armor.bodyProtection.includes(body)
    if (!canArmorProtectBody) {
      return [healthRemaining - weapon.damage * weapon.damageRatioOfBody[body], armorRemaining]
    }

    if (armorRemaining >= expectedArmorDamange) {
      // 剩余护甲够完整接一次伤害的时候先扣甲再扣血
      armorRemaining -= expectedArmorDamange
      healthRemaining -= weapon.damage * bullet.damageRatio[armor.armorClass - 1]
    } else {
      // 剩余护甲不够完整接一次伤害的时候护甲扣完, 计算抵挡伤害百分比直接扣血
      const armorDamagePercent = armorRemaining / expectedArmorDamange
      const damage =
      // 扣护甲抵挡的血
       weapon.damage * bullet.damageRatio[armor.armorClass - 1] * armorDamagePercent +
       // 直接扣血
       weapon.damage * (1 - armorDamagePercent)
      healthRemaining -= damage
      armorRemaining = 0
    }
    return [healthRemaining, armorRemaining]
}

export function calculateBTK(weapon: Weapon, bullet: Bullet, armor: Armor, body: Body, distance: number): number {
  let healthRemaining = 100
  // 护甲值
  let armorRemaining = armor.value

  let bulletsToKill = 0

  while(healthRemaining >= 0) {
    bulletsToKill += 1

    const [newHealthRemaining, newArmorRemaining] = attack(weapon, bullet, armor, body, healthRemaining, armorRemaining)
    healthRemaining = newHealthRemaining
    armorRemaining = newArmorRemaining
  }
  return bulletsToKill
}

export function calculateTTK(weapon: Weapon, bullet: Bullet, armor: Armor, distance: number): TTKDiscription {

  const bulletsToKill = calculateBTK(weapon, bullet, armor, Body.CHEST, distance)
  
  // 每秒子弹数
  const rps = weapon.rpm / 60
  return {
    weaponName: weapon.name,
    bulletName: bullet.name,
    armorName: armor.name,
    distance: distance,
    ttk: Math.max(bulletsToKill -1, 0)/ rps + (distance / weapon.speed)
  }
}

const probability = {
  [Body.HEAD]: 0.2,
  [Body.CHEST]: 0.3,
  [Body.STOMACH]: 0.2,
  [Body.SHOULDER]: 0.1,
  [Body.ARM]: 0.1,
  [Body.LEG]: 0.1,
} as const


export function calculateBTKWithProbability(weapon: Weapon, bullet: Bullet, armor: Armor, distance: number, healthRemaining = 100, armorRemaining = armor.value): number {
  let btk = 0
  if (healthRemaining <= 0) {
    return 0
  }
  for (const body of [Body.HEAD, Body.CHEST, Body.STOMACH, Body.SHOULDER, Body.ARM, Body.LEG]) {
    const [newHealthRemaining, newArmorRemaining] = attack(weapon, bullet, armor, body, healthRemaining, armorRemaining)
    const btkWithBodyAttack = probability[body] * (1 + calculateBTKWithProbability(weapon, bullet, armor, distance, newHealthRemaining, newArmorRemaining))
    btk += btkWithBodyAttack
  }
  return btk
}
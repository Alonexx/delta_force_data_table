import { Armor, Body, Bullet, Weapon } from "./types";

function attack(weapon: Weapon, bullet: Bullet, armor: Armor, helmet: Armor, body: Body, healthRemaining: number, armorRemaining: number, helmetRemaining: number): [number, number, number] {

// console.log(`attack ${weapon.name}, ${bullet.name}, ${armor.name}, ${body}, ${healthRemaining}, ${armorRemaining}`)
    // 一颗子弹造成的护甲伤害

    if (body !== Body.HEAD) {
      const expectedArmorDamange = weapon.armorDamage * bullet.armorDamageRatio[armor.armorClass - 1]

      const canArmorProtectBody = armor.bodyProtection.includes(body)
      if (!canArmorProtectBody) {
        return [healthRemaining - weapon.damage * weapon.damageRatioOfBody[body], armorRemaining, helmetRemaining]
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
    } else {
      const expectedHelmetDamange = weapon.armorDamage * bullet.armorDamageRatio[helmet.armorClass - 1]

      const canArmorProtectBody = helmet.bodyProtection.includes(body)
      if (!canArmorProtectBody) {
        return [healthRemaining - weapon.damage * weapon.damageRatioOfBody[body], armorRemaining, helmetRemaining]
      }

      if (helmetRemaining >= expectedHelmetDamange) {
        // 剩余护甲够完整接一次伤害的时候先扣甲再扣血
        helmetRemaining -= expectedHelmetDamange
        healthRemaining -= weapon.damage * bullet.damageRatio[armor.armorClass - 1]
      } else {
        // 剩余护甲不够完整接一次伤害的时候护甲扣完, 计算抵挡伤害百分比直接扣血
        const helmetDamagePercent = helmetRemaining / expectedHelmetDamange
        const damage =
        // 扣护甲抵挡的血
        weapon.damage * bullet.damageRatio[armor.armorClass - 1] * helmetDamagePercent +
        // 直接扣血
        weapon.damage * (1 - helmetDamagePercent)
        healthRemaining -= damage
        helmetRemaining = 0
      }
    }
    return [healthRemaining, armorRemaining, helmetRemaining]
  }

export function calculateBTK(weapon: Weapon, bullet: Bullet, armor: Armor, helmet: Armor, body: Body, distance: number): number {
  let healthRemaining = 100
  // 护甲值
  let armorRemaining = armor.value
  let helmetRemaining = helmet.value

  let bulletsToKill = 0

  while(healthRemaining >= 0) {
    bulletsToKill += 1

    const [newHealthRemaining, newArmorRemaining, newHelmetRemaining] = attack(weapon, bullet, armor, helmet, body, healthRemaining, armorRemaining, helmetRemaining)
    healthRemaining = newHealthRemaining
    armorRemaining = newArmorRemaining
    helmetRemaining = newHelmetRemaining
  }
  return bulletsToKill
}

const probability = {
  [Body.HEAD]: 0.2,
  [Body.CHEST]: 0.3,
  [Body.STOMACH]: 0.2,
  [Body.SHOULDER]: 0.1,
  [Body.ARM]: 0.1,
  [Body.LEG]: 0.1,
} as const


export function calculateBTKWithProbability(weapon: Weapon, bullet: Bullet, armor: Armor, helmet: Armor, distance: number, healthRemaining = 100, armorRemaining = armor.value, helmetRemaining = helmet.value): number {
  let btk = 0
  if (healthRemaining <= 0) {
    return 0
  }
  for (const body of [Body.HEAD, Body.CHEST, Body.STOMACH, Body.SHOULDER, Body.ARM, Body.LEG]) {
    const [newHealthRemaining, newArmorRemaining, newHelmetRemaining] = attack(weapon, bullet, armor, helmet, body, healthRemaining, armorRemaining, helmetRemaining)
    const btkWithBodyAttack = probability[body] * (1 + calculateBTKWithProbability(weapon, bullet, armor, helmet, distance, newHealthRemaining, newArmorRemaining, newHelmetRemaining))
    btk += btkWithBodyAttack
  }
  return btk
}
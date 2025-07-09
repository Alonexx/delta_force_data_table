import { Armor, Bullet, Weapon } from "./types";

export interface TTKDiscription {
  weaponName: string,
  bulletName: string,
  armorName: string,
  distance: number,
  ttk: number
}

export function calculateTTK(weapon: Weapon, bullet: Bullet, armor: Armor, distance: number): TTKDiscription {

  let healthRemaining = 100
  // 护甲值
  let armorRemaining = armor.value

  let bulletsToKill = 0

  // 一颗子弹造成的护甲伤害
  const expectedArmorDamange = weapon.armorDamage * bullet.armorDamageRatio[armor.armorClass - 1]

  while(healthRemaining >= 0) {
    bulletsToKill += 1
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
  }
  
  // 每秒子弹数
  const rps = weapon.rpm / 60
  return {
    weaponName: weapon.name,
    bulletName: bullet.name,
    armorName: armor.name,
    distance: distance,
    ttk: bulletsToKill / rps
  }
}
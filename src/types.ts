export interface Named {
  name: string
}

export interface Weapon extends Named {
  rpm: number,
  range: number,
  speed: number,
  damage: number,
  armorDamage: number,
}

export type ArmorClass = 1 | 2 | 3 | 4 | 5 | 6

export interface Armor extends Named {
  value: number,
  armorClass: ArmorClass
}

export type SixElementArray = [number, number, number, number, number, number]

export interface Bullet extends Named {
  armorDamageRatio: SixElementArray
  damageRatio: SixElementArray
}
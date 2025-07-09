import { Armor, Bullet, Weapon } from "./types";

export class Weapons {
  static readonly K437: Weapon = {
    name: "K437",
    rpm: 780,
    range: 35,
    speed: 575,
    damage: 34,
    armorDamage: 35,
  }
  static readonly K416: Weapon = {
    name: "K416",
    rpm: 880,
    range: 27,
    speed: 575,
    damage: 31,
    armorDamage: 35
  }
  static readonly KC17: Weapon = {
    name: "KC17",
    rpm: 740,
    range: 55,
    speed: 575,
    damage: 30,
    armorDamage: 48
  }
  static readonly ASH12: Weapon = {
    name: "ASH-12",
    rpm: 500,
    range: 55,
    speed: 340,
    damage: 56,
    armorDamage: 55
  }
  static readonly PKM: Weapon = {
    name: "PKM",
    rpm: 669,
    range: 52,
    speed: 893,
    damage: 45,
    armorDamage: 42
  }
  static readonly M14: Weapon = {
    name: "M14",
    rpm: 727,
    range: 40,
    speed: 575,
    damage: 39,
    armorDamage: 41
  }
  static readonly ASVAL: Weapon = {
    name: "ASVAL",
    rpm: 972,
    range: 35,
    speed: 468,
    damage: 29,
    armorDamage: 48
  }
}


export class Bullets {
  static readonly class4: Bullet = {
    name: "4级弹",
    armorDamageRatio: [1.0, 1.0, 1.0, 1.0, 1.0, 0.6],
    damageRatio: [1, 1, 0.75, 0.5, 0, 0]
  }
  static readonly class5: Bullet = {
    name: "5级弹",
    armorDamageRatio: [1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    damageRatio: [1, 1, 1, 0.75, 0.5, 0]
  }
}

export class Armors {
  static readonly class5Heavy: Armor = {
    name: "重型突击背心",
    value: 125,
    armorClass: 5
  }
  static readonly class5Medium: Armor = {
    name: "FS复合防弹衣",
    value: 105,
    armorClass: 5
  }
  static readonly class5Light: Armor = {
    name: "精英防弹背心",
    value: 95,
    armorClass: 5,
  }
  static readonly class6Heavy: Armor = {
    name: "泰坦防弹装甲",
    value: 150,
    armorClass: 6,
  }
}
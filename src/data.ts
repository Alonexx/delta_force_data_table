import { Armor, Body, Bullet, Weapon } from "./types";

export class Weapons {
  static readonly K437: Weapon = {
    name: "K437",
    rpm: 780,
    range: 35,
    speed: 575,
    damage: 34,
    armorDamage: 35,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly K416: Weapon = {
    name: "K416",
    rpm: 880,
    range: 27,
    speed: 575,
    damage: 31,
    armorDamage: 35,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly KC17: Weapon = {
    name: "KC17",
    rpm: 740,
    range: 55,
    speed: 575,
    damage: 30,
    armorDamage: 48,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly ASH12: Weapon = {
    name: "ASH-12",
    rpm: 500,
    range: 55,
    speed: 340,
    damage: 56,
    armorDamage: 55,
    damageRatioOfBody: {
      [Body.HEAD]: 1.6,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.45,
      [Body.ARM]: 0.45,
      [Body.LEG]: 0.45
    }
  }
  static readonly PKM: Weapon = {
    name: "PKM",
    rpm: 669,
    range: 52,
    speed: 893,
    damage: 45,
    armorDamage: 42,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly M14: Weapon = {
    name: "M14",
    rpm: 727,
    range: 40,
    speed: 575,
    damage: 39,
    armorDamage: 41,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly ASVAL: Weapon = {
    name: "ASVAL",
    rpm: 972,
    range: 35,
    speed: 468,
    damage: 29,
    armorDamage: 48,
    damageRatioOfBody: {
      [Body.HEAD]: 1.9,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
  }
  static readonly TENGLONG: Weapon = {
    name: "高速腾龙突击步枪",
    rpm: 759,
    range: 35,
    speed: 815,
    damage: 35,
    armorDamage: 38,
    damageRatioOfBody: {
      [Body.HEAD]: 2.1,
      [Body.CHEST]: 1.0,
      [Body.STOMACH]: 0.9,
      [Body.SHOULDER]: 0.4,
      [Body.ARM]: 0.4,
      [Body.LEG]: 0.4
    }
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
  static readonly class4Heavy: Armor = {
    name: "MK-2 战术背心",
    value: 110,
    armorClass: 4,
    bodyProtection: [Body.CHEST, Body.STOMACH]
  }
  static readonly class4LightHelmet: Armor = {
    name: "DICH 训练头盔",
    value: 35,
    armorClass: 4,
    bodyProtection: [Body.HEAD]
  }
  static readonly class5Heavy: Armor = {
    name: "重型突击背心",
    value: 125,
    armorClass: 5,
    bodyProtection: [Body.CHEST, Body.STOMACH, Body.SHOULDER]
  }
  static readonly class5Medium: Armor = {
    name: "FS复合防弹衣",
    value: 105,
    armorClass: 5,
    bodyProtection: [Body.CHEST, Body.STOMACH]
  }
  static readonly class5Light: Armor = {
    name: "精英防弹背心",
    value: 95,
    armorClass: 5,
    bodyProtection: [Body.CHEST, Body.STOMACH]
  }
  static readonly class6Light: Armor = {
    name: "特里克MAS2.0装甲",
    value: 125,
    armorClass: 6,
    bodyProtection: [Body.CHEST, Body.STOMACH, Body.SHOULDER]
  }
  static readonly class6Heavy: Armor = {
    name: "泰坦防弹装甲",
    value: 150,
    armorClass: 6,
    bodyProtection: [Body.CHEST, Body.STOMACH, Body.SHOULDER]
  }
  static readonly class6LightHelmet: Armor = {
    name: "DICH-9重型头盔",
    value: 50,
    armorClass: 6,
    bodyProtection: [Body.HEAD]
  }
  static readonly class5HeavyHelmet: Armor = {
    name: "GN 重型头盔",
    value: 50,
    armorClass: 5,
    bodyProtection: [Body.HEAD],
  }
  static readonly class5MediumHelmet: Armor = {
    name: "H09 防暴头盔",
    value: 45,
    armorClass: 5,
    bodyProtection: [Body.HEAD],
  }
  static readonly class5LightHelmet: Armor = {
    name: "DICH-1战术头盔",
    value: 40,
    armorClass: 5,
    bodyProtection: [Body.HEAD],
  }
  static readonly none: Armor = {
    name: 'None',
    value: 0,
    armorClass: 1,
  bodyProtection: []
  }
}
import { calculateBTK, calculateBTKWithProbability } from "./calculator"
import { Armors, Bullets, Weapons } from "./data"
import { Armor, Body, Bullet, Weapon } from "./types"

const weapons = [Weapons.K416, Weapons.K437, Weapons.KC17, Weapons.ASH12, Weapons.PKM, Weapons.M14, Weapons.ASVAL, Weapons.TENGLONG]
const bullets = [Bullets.class5]
const armors = [Armors.class5Light, Armors.class5Medium, Armors.class5Heavy, Armors.class6Heavy]
const helmets = [Armors.class5LightHelmet, Armors.class5HeavyHelmet]


console.log('------ Only Chest ------')

interface Result {
  weapon: Weapon,
  bullet: Bullet,
  armor: Armor,
  helmet: Armor,
  btk: number,
  ttk: number,
}

const chestReusults = []

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      const btk = calculateBTK(weapon, bullet, armor, Armors.class5LightHelmet, Body.CHEST, 30)
        chestReusults.push({
          weapon: weapon,
          bullet: bullet,
          armor: armor,
          helmet: Armors.class5LightHelmet,
          btk: btk,
          ttk: (Math.max(0, btk - 1) / weapon.rpm * 60)
        })
    }
  }
}

chestReusults.sort((a, b) => {
  return a.ttk - b.ttk
})

chestReusults.forEach((a) => {
  console.log(`Expected BTK of ${a.weapon.name}, ${a.bullet.name}, ${a.armor.name} is ${a.btk.toFixed(3)}, TTK is ${a.ttk.toFixed(3)}`)
})

console.log('------ Mixed ------')

const mixedResults = []

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      for (const helmet of helmets) {
        const btk = calculateBTKWithProbability(weapon, bullet, armor, helmet, 30)
        mixedResults.push({
          weapon: weapon,
          bullet: bullet,
          armor: armor,
          helmet: Armors.class5LightHelmet,
          btk: btk,
          ttk: (Math.max(0, btk - 1) / weapon.rpm * 60)
        })
      }
    }
  }
}

mixedResults.sort((a, b) => {
  return a.ttk - b.ttk
})


mixedResults.forEach((a) => {
  console.log(`Expected BTK of ${a.weapon.name}, ${a.bullet.name}, ${a.armor.name} is ${a.btk.toFixed(3)}, TTK is ${a.ttk.toFixed(3)}`)
})

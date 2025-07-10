import { calculateBTK, calculateBTKWithProbability } from "./calculator"
import { Armors, Bullets, Weapons } from "./data"
import { Body } from "./types"

const weapons = [Weapons.K416, Weapons.K437, Weapons.KC17, Weapons.ASH12, Weapons.PKM, Weapons.M14, Weapons.ASVAL, Weapons.TENGLONG]
const bullets = [Bullets.class5]
const armors = [Armors.class5Heavy, Armors.class6Heavy]
const helmets = [Armors.class5HeavyHelmet]


console.log('------ Only Chest ------')

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      const btk = calculateBTK(weapon, bullet, armor, Armors.class5LightHelmet, Body.CHEST, 30)
        console.log(`Expected BTK of ${weapon.name}, ${bullet.name}, ${armor.name} is ${btk}, TTK is ${(Math.max(0, btk - 1) / weapon.rpm * 60).toFixed(3)}`)
    }
  }
}

console.log('------ Mixed ------')

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      for (const helmet of helmets) {
        const btk = calculateBTKWithProbability(weapon, bullet, armor, helmet, 30)
        console.log(`Expected BTK of ${weapon.name}, ${bullet.name}, ${armor.name}, ${helmet.name} is ${btk.toFixed(3)}, TTK is ${(Math.max(0, btk - 1) / weapon.rpm * 60).toFixed(3)}`)
      }
    }
  }
}

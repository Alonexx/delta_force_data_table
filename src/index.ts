import { calculateBTKWithProbability, calculateTTK } from "./calculator"
import { Armors, Bullets, Weapons } from "./data"

const weapons = [Weapons.K416, Weapons.K437, Weapons.KC17, Weapons.ASH12, Weapons.PKM, Weapons.M14, Weapons.ASVAL]
const bullets = [Bullets.class5]
const armors = [Armors.class5Heavy, Armors.class6Heavy]

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      const ttk = calculateTTK(weapon, bullet, armor, 30)
      console.log(JSON.stringify(ttk))
    }
  }
}


for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      const btk = calculateBTKWithProbability(weapon, bullet, armor, 30)
      console.log(`Expected BTK of ${weapon.name}, ${bullet.name}, ${armor.name} is ${btk}, TTK is ${Math.max(0, btk - 1) / weapon.rpm * 60}`)
    }
  }
}

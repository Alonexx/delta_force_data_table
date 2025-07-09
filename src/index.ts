import { calculateTTK } from "./calculator"
import { Armors, Bullets, Weapons } from "./data"

const weapons = [Weapons.K416, Weapons.K437, Weapons.PKM, Weapons.M14, Weapons.ASVAL]
const bullets = [Bullets.class5]
const armors = [Armors.class5Heavy, Armors.class6Heavy]

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      const ttk = calculateTTK(weapon, bullet, armor, 10 /* temp unused distance */)
      console.log(JSON.stringify(ttk))
    }
  }
}

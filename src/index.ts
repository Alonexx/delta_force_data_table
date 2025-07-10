import { btk2ttk, calculateBTK, calculateBTKWithProbability } from "./calculator"
import { Armors, Bullets, Weapons } from "./data"
import { Armor, Body, Bullet, Weapon } from "./types"

const weapons = [Weapons.K416, Weapons.K437, Weapons.KC17, Weapons.ASH12, Weapons.PKM, Weapons.M14, Weapons.ASVAL, Weapons.TENGLONG]
const bullets = [Bullets.class5]

const armors = [Armors.class4Heavy, Armors.class5Light, Armors.class5Medium, Armors.class5Heavy, Armors.class6Light, Armors.class6Heavy]
const helmets = [Armors.class4LightHelmet, Armors.class5LightHelmet, Armors.class5HeavyHelmet, Armors.class6LightHelmet]


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
      const helmet = Armors.none
      const btk = calculateBTK(weapon, bullet, armor, helmet, Body.CHEST, 30)
        chestReusults.push({
          weapon: weapon,
          bullet: bullet,
          armor: armor,
          helmet: helmet,
          btk: btk,
          ttk: btk2ttk(weapon, btk)
        })
    }
  }
}

chestReusults.sort((a, b) => {
  return a.ttk - b.ttk
})

logResult(chestReusults)

console.log('------ Mixed ------')

const mixedResults = []

for (const weapon of weapons) {
  for (const bullet of bullets) {
    for (const armor of armors) {
      for (const helmet of helmets) {
        if (helmet.armorClass > armor.armorClass) {
          // 过滤头盔等级大于护甲等级的情况, 这种情况比较少见
          continue
        }
        const btk = calculateBTKWithProbability(weapon, bullet, armor, helmet, 30)
        mixedResults.push({
          weapon: weapon,
          bullet: bullet,
          armor: armor,
          helmet: helmet,
          btk: btk,
          ttk: btk2ttk(weapon, btk)
        })
      }
    }
  }
}

mixedResults.sort((a, b) => {
  return a.ttk - b.ttk
})

logResult(mixedResults)

function logResult(array: Result[]) {
  array.forEach((a) => {
  console.log(`Expected BTK of ${a.weapon.name}, ${a.bullet.name}, ${a.armor.name}, ${a.helmet.name} is ${a.btk.toFixed(3)}, TTK is ${a.ttk.toFixed(3)}`)
  })
}

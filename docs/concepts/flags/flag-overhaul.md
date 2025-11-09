# Upcoming flag flattening/overhaul

**Note**
- Flags with an **asterix** (*) will be implemented as a new kind of flag which will allow setting granular deny and allow entries.
- Example1 (`break-blocks`): deny/allow specific blocks to be broken
- Example2 (`spawning`): deny/allow specific mob spawning
- Example3 (`exec-command`): deny/allow execution of specific commands
- This list is not final nor a promise for implementation. Flags still might be changed/removed/added.

| Flag                       | `<= 0.6.0` |                   `>= 0.6.0`                   |
|:---------------------------|:--------:|:--------------------------------------------:|
| break-blocks               |    ✔     |                     ✔ *                      |
| place-blocks               |    ✔     |                     ✔ *                      |
| scoop-fluids               |    ✔     |                     ✔ *                      |
| place-fluids               |    ✔     |                     ✔ *                      |
| ignite-explosives          |    ✔     |                     ✔ *                      |
| trample-farmland           |    ✔     |                     ✔ *                      |
| trample-farmland-player    |    ✔     |        ❌ replaced by trample-farmland        |
| trample-farmland-other     |    ✔     |        ❌ replaced by trample-farmland        |
| lightning                  |    ✔     |                      ✔                       |
| lightning-create-fire      |    ✔     |                      ✔                       |
| lightning-hit-entity       |    ✔     |                     ✔ *                      |
| leaf-decay                 |    ✔     |                      ✔                       |
| fire-tick                  |    ✔     |                      ✔                       |
| walker-freeze              |    ✔     |                      ✔                       |
| animal-taming              |    ✔     |          ✔ * renamed to tame-entity          |
| animal-breeding            |    ✔     |         ✔ * renamed to breed-entity          |
| animal-mounting            |    ✔     |         ✔ * renamed to mount-entity          |
| animal-unmounting          |   ️ ✔    |        ✔ * renamed to unmount-entity         |
| spawning                   |    ❌     |                    ️ ✔ *                     |
| spawning-all               |    ✔     |            ❌ replaced by spawning            |
| spawning-monster           |    ✔     |            ❌ replaced by spawning            |
| spawning-animal            |    ✔     |            ❌ replaced by spawning            |
| spawning-villager          |    ✔     |            ❌ replaced by spawning            |
| spawning-trader            |    ✔     |            ❌ replaced by spawning            |
| spawning-slime             |    ✔     |            ❌ replaced by spawning            |
| spawning-golem             |    ✔     |            ❌ replaced by spawning            |
| spawning-xp                |    ✔     |            ❌ replaced by spawning            |
| no-flight                  |    ✔     |                      ✔                       |
| use-elytra                 |    ✔     |          ✔ renamed to elytra-flight          |
| use-blocks                 |    ✔     |                     ✔ *                      |
| use-entities               |    ✔     |                     ✔ *                      |
| use-items                  |    ✔     |                     ✔ *                      |
| use-item-secondary         |    ❌     |                     ✔ *                      |
| tools-secondary            |    ✔     |       ❌ renamed to use-item-secondary        |
| strip-wood                 |    ✔     |       ❌ replaced by use-item-secondary       |
| till-farmland              |    ✔     |       ❌ replaced by use-item-secondary       |
| shovel-path                |    ✔     |       ❌ replaced by use-item-secondary       |
| use-bonemeal               |    ✔     |         ✔ renamed to use-fertilizer          |
| use-container              |    ❌     |                     ✔ *                      |
| access-container           |    ✔     |         ❌ replaced by use-container          |
| access-enderchest          |    ✔     |         ❌ replaced by use-container          |
| enderpearl-from            |    ✔     |                      ✔                       |
| enderpearl-to              |    ✔     |                      ✔                       |
| enderman-teleport-from     |    ✔     |        ✔ renamed to teleport-enderman        |
| shulker-teleport-from      |    ✔     |        ✔ renamed to teleport-shulker         |
| drop-item                  |    ❌     |                     ✔ *                      |
| drop-loot                  |    ❌     |                     ✔ *                      |
| drop-xp                    |    ❌     |                     ✔ *                      |
| pickup-xp                  |    ❌     |                      ✔                       |
| pickup-item                |    ❌     |                     ✔ *                      |
| item-drop                  |    ✔     |            ✔ renamed to drop-item            |
| drop-loot                  |    ✔     |           ❌ replaced by drop-loot            |
| drop-loot-player           |    ✔     |           ❌ replaced by drop-loot            |
| xp-drop-all                |    ✔     |            ❌ replaced by drop-xp             |
| xp-drop-player             |    ✔     |            ❌ replaced by drop-xp             |
| xp-drop-monster            |    ✔     |            ❌ replaced by drop-xp             |
| xp-drop-other              |    ✔     |            ❌ replaced by drop-xp             |
| xp-pickup                  |    ✔     |          ❌     renamed to pickup-xp          |
| item-pickup                |    ✔     |           ❌ renamed to pickup-item           |
| gain-xp                    |    ❌     |                      ✔                       |
| gain-level                 |    ❌     |                      ✔                       |
| level-freeze               |    ✔     |          ❌   renamed to gain-level           |
| xp-freeze                  |    ✔     |           ❌   renamed to gain-xxp            |
| knockback-players          |    ✔     |                     yes                      |
| no-pvp                     |    ✔     |                      ✔                       |
| attack-meele               |    ❌     |                     ✔ *                      |
| melee-players              |    ✔     |          ❌ renamed to attack-meele           |
| melee-animals              |    ✔     |          ❌ replaced by attack-meele          |
| melee-villagers            |    ✔     |          ❌ replaced by attack-meele          |
| melee-wtrader              |    ✔     |          ❌ replaced by attack-meele          |
| melee-monsters             |    ✔     |          ❌ replaced by attack-meele          |
| invincible                 |    ✔     |          ❌ replaced by attack-meele          |
| fall-damage                |    ✔     |                     ✔ *                      |
| fall-damage-players        |    ✔     |        ❌      replaced by fall-damage        |
| fall-damage-animals        |    ✔     | ❌                    replaced by fall-damage |
| fall-damage-villagers      |    ✔     | ❌                    replaced by fall-damage |
| fall-damage-monsters       |    ✔     | ❌                    replaced by fall-damage |
| exec-command               |    ✔     |                     ✔ *                      |
| send-message               |    ✔     |                      ✔                       |
| set-spawn                  |    ✔     |                      ✔                       |
| sleep                      |    ✔     |                      ✔                       |
| spawn-portal               |    ✔     |                      ✔                       |
| enter-dim                  |    ✔     |                      ✔                       |
| enter-portal               |    ❌     |                     ✔ *                      |
| use-portal                 |    ✔     |          ❌ renamed to enter-portal           |
| use-portal-players         |    ✔     |          ❌ replaced by enter-portal          |
| use-portal-villagers       |    ✔     |          ❌ replaced by enter-portal          |
| use-portal-animals         |    ✔     |          ❌ replaced by enter-portal          |
| use-portal-monsters        |    ✔     |          ❌ replaced by enter-portal          |
| use-portal-minecarts       |    ✔     |          ❌ replaced by enter-portal          |
| use-portal-items           |    ✔     |          ❌ replaced by enter-portal          |
| explosions-blocks          |    ✔     |                     ✔ *                      |
| explosions-entities        |    ✔     |                     ✔ *                      |
| creeper-explosion-blocks   |    ✔     |       ❌ replaced by explosions-blocks        |
| creeper-explosion-entities |    ✔     |      ❌ replaced by explosions-entities       |
| other-explosion-blocks     |    ✔     |       ❌ replaced by explosions-blocks        |
| other-explosion-entities   |    ✔     |      ❌ replaced by explosions-entities       |
| griefing                   |    ❌     |                      ✔                       |
| griefing-zombie            |    ❌     |                      ✔                       |
| griefing-dragon            |    ❌     |                      ✔                       |
| griefing-wither            |    ❌     |                      ✔                       |
| griefing-enderman          |    ❌     |                      ✔                       |
| mob-griefing               |    ✔     |            ❌ renamed to griefing             |
| zombie-destruction         |    ✔     |         ❌ renamed to griefing-zombie         |
| enderman-griefing          |    ✔     |        ❌ renamed to griefing-enderman        |
| wither-destruction         |    ✔     |         ❌ renamed to griefing-wither         |
| dragon-destruction         |    ✔     |         ❌ renamed to griefing-dragon         |
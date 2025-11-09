---
sidebar_label: 'Flag list'
sidebar_position: 2
---
# Flag Table

| Flag                                | Description                                                                                |               Notes                |
|:------------------------------------|:-------------------------------------------------------------------------------------------|:----------------------------------:|
| keep-xp                             | prevents players from losing xp when dying                                                 |          beneficial flag           |
| keep-inv                            | prevents players from losing their inventory when dying                                    |          beneficial flag           |
| invincible                          | prevents players from taking damage                                                        |          beneficial flag           |
| no-hunger                           | prevents players from getting hungry                                                       |          beneficial flag           |
| no-knockback                        | prevents players from being knocked back                                                   |          beneficial flag           |
| break-blocks[¹](Flag_List#notes)    | prevents players from breaking blocks and some block entities                              |                                    |
| place-blocks                        | prevents players from placing blocks                                                       |                                    |
| scoop-fluids                        | prevents players from scooping up fluids with buckets                                      |                                    |
| place-fluids                        | prevents players from placing fluids                                                       |                                    |
| ignite-explosives                   | prevents explosives from being ignited                                                     |                                    |
| tools-secondary                     | prevents all type of secondary tool actions (strip wood, till farmland, create paths, ...) |                                    |
| strip-wood                          | prevents wood from being stripped, copper from being waxed off and removal of oxidation    |                                    |
| till-farmland                       | prevents farmland from being tilled                                                        |                                    |
| shovel-path                         | prevents creation of path blocks                                                           |                                    |
| trample-farmland                    | prevents all farmland trampling                                                            |                                    |
| trample-farmland-player             | prevents players from trampling farmland                                                   |                                    |
| trample-farmland-other              | prevents non-player entities from trampling farmland                                       |                                    |
| lightning                           | prevents entities from being hit by lightning (also prevents fire and general lightning)   |                                    |
| leaf-decay                          | prevents leaf blocks from decaying                                                         |                                    |
| fire-tick                           | prevents fire from spreading and destroying blocks                                         |                                    |
| walker-freeze                       | prevents frost walker enchanted boots from freezing water                                  |                                    |
| animal-taming                       | prevents players from taming animals                                                       |                                    |
| animal-breeding[²](Flag_List#notes) | prevents players from breeding animals                                                     |                                    |
| animal-mounting                     | prevents players from mounting animals                                                     |                                    |
| animal-unmounting                   | prevents players from unmounting animals                                                   |                                    |
| spawning-all                        | prevents spawning of all entities                                                          |                                    |
| spawning-monster                    | prevents spawning of monsters                                                              |                                    |
| spawning-animal                     | prevents spawning of animals                                                               |                                    |
| spawning-villager                   | prevents spawning of villagers                                                             |                                    |
| spawning-trader                     | prevents spawning of wandering traders                                                     |                                    |
| spawning-slime                      | prevents spawning of slimes                                                                |                                    |
| spawning-golem                      | prevents spawning of iron golems and snow golems                                           |                                    |
| spawning-xp                         | prevents spawning of xp orbs completely                                                    |                                    |
| no-flight                           | prevents players from flying in a region. It also forces players to fall.                  |                                    |
| use-elytra                          | prevents players from using the elytra to start flying. It does not force players to land. |                                    |
| use-blocks                          | prevents players from interacting with blocks (e.g. opening containers)                    |                                    |
| use-entities                        | prevents players from interacting with entities                                            |                                    |
| use-items                           | prevents players from using items                                                          |                                    |
| use-bonemeal                        | prevents players from using bone meal to fertilize farmland                                |                                    |
| access-container                    | prevents players from accessing most containers                                            |                                    |
| access-enderchest                   | prevents players from accessing their ender chest                                          |                                    |
| enderpearl-from                     | prevents ender pearl teleportation out of a region                                         |                                    |
| enderpearl-to                       | prevents ender pearl teleportation to a region                                             |                                    |
| enderman-teleport-from              | prevents enderman from teleporting out of a region                                         |                                    |
| shulker-teleport-from               | prevents shulkers from teleporting out of a region                                         |                                    |
| item-drop                           | prevents players from dropping items                                                       |                                    |
| item-pickup                         | prevents players from picking up items                                                     |                                    |
| drop-loot                           | prevents all loot drop                                                                     |                                    |
| drop-loot-player                    | prevents all loot drop for players killing entities                                        |                                    |
| xp-drop-all                         | prevents all entities from dropping xp orbs                                                |                                    |
| xp-drop-player                      | prevents all entities from dropping xp orbs                                                |                                    |
| xp-drop-monster                     | prevents monsters from dropping xp orbs                                                    |                                    |
| xp-drop-other                       | prevents non-hostile entities from dropping xp orbs                                        |                                    |
| xp-pickup                           | prevents players from picking up xp                                                        |                                    |
| level-freeze                        | prevents the player levels from increasing/decreasing (xp orbs will still be picked up)    |                                    |
| xp-freeze                           | prevents the player from gaining xp from xp orbs                                           |                                    |
| no-pvp                              | prevents players from damaging other players (PvP)                                         |                                    |
| melee-players                       | prevents players from damaging other players with melee attacks (PvP)                      |                                    |
| melee-animals                       | prevents players from damaging animals with melee attacks                                  |                                    |
| melee-villagers                     | prevents players from damaging villagers with melee attacks                                |                                    |
| melee-wtrader                       | prevents players from damaging wandering traders with melee attacks                        |                                    |
| melee-monsters                      | prevents players from damaging monsters with melee attacks                                 |                                    |
| no-item-despawn                     | prevents items from despawning                                                             |                                    |
| fall-damage                         | prevents entities from taking fall damage                                                  |                                    |
| fall-damage-players                 | prevents players from taking fall damage                                                   |                                    |
| fall-damage-animals                 | prevents animals from taking fall damage                                                   |                                    |
| fall-damage-villagers               | prevents villagers from taking fall damage                                                 |                                    |
| fall-damage-monsters                | prevents monsters from taking fall damage                                                  |                                    |
| exec-command                        | prevents players from executing commands                                                   |                                    |
| send-msg                            | prevents players from sending chat messages                                                | not available for fabric currently |
| set-spawn                           | prevents players from setting their spawn point                                            |                                    |
| sleep                               | prevents players from sleeping                                                             |                                    |
| spawn-portal                        | prevents creating of portal blocks by lighting obsidian                                    |                                    |
| enter-dim                           | prevents players from traveling to the level which has this flag active.                   | only works for Dimensional Regions |
| use-portal                          | prevents all entities from using portals                                                   |                                    |
| use-portal-players                  | prevents players from using portals                                                        |                                    |
| use-portal-villagers                | prevents villager entities from using portals                                              |                                    |
| use-portal-animals                  | prevents animal entities from using portals                                                |                                    |
| use-portal-monsters                 | prevents monster entities from using portals                                               |                                    |
| use-portal-minecarts                | prevents minecart entities from using portals                                              |                                    |
| use-portal-items                    | prevents item entities from using portals                                                  |                                    |
| explosions-blocks                   | prevents all explosions from destroying blocks                                             |                                    |
| explosions-entities                 | prevents all explosions from damaging entities                                             |                                    |
| creeper-explosion-blocks            | prevents explosions caused by Creepers to destroy blocks                                   |                                    |
| creeper-explosion-entities          | prevents explosions caused by Creepers to damage entities                                  |                                    |
| zombie-destruction                  | prevents doors from being destroyed by zombies                                             |                                    |
| mob-griefing                        | prevents mob griefing                                                                      |                                    |
| enderman-griefing                   | prevents endermen from picking up and placing blocks                                       |                                    |
| wither-destruction                  | prevents block destruction by the wither                                                   |                                    |
| dragon-destruction                  | prevents block destruction by the ender dragon                                             |                                    |
| no-sign-edit                        | prevents players from editing signs                                                        |                                    |
| snow-melting                        | prevents melting of snow blocks                                                            |                                    |
| snow-fall                           | prevents the creation of snow layer blocks                                                 |                                    |
| fluid-flow                          | prevents the flowing of all fluids                                                         |                                    |
| water-flow                          | prevents the flowing of water                                                              |                                    |
| lava-flow                           | prevents the flowing of laval                                                              |                                    |


### Notes
- ¹ Item Frames, Paintings, Leash Knots and Armor Stands are included per default, other Tile Entities need to be added
  to the
  config [`yawp-flags.toml`](Flag).
- ² Currently this flag does not cover breeding of Foxes when using Fabric
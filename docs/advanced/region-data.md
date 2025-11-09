---
sidebar_label: 'Region data'
sidebar_position: 1
---

# Region Data

The region data is stored as [NBT](https://minecraft.wiki/w/NBT_format) in the data directory of your world.

Although there are some editors out there to edit NBT data, I suggest not changing it manually, unless you know what you are doing. 
It may lead to region data loss.

## Region data saving

The region data is saved automatically
- on every command that manipulates region data
- cyclic on set interval
- graceful server shutdown/client world close
- running `/save-all` on the server

## File location

When running YAWP on the client (LAN mode) it is located in `<your-world-name>/data/`.

When running YAWP on a dedicated server, it's located in `world/data/`.

### Legacy

Older YAWP versions save the region data in one single file named `yawp-dimensions.dat` in the data directory of the world.

### Post 1.21.5 or MC > 1.20.1 and YAWP >= 0.6.1-beta1

The region data is saved across multiple file, all stored in directory called `yawp` (see [screenshot](./img/new-data-storage.png) below).

- `dimensions.dat` : Stores a list of dimensions/levels managed by YAWP.
- `global.dat` : Stores the region data for the [Global Region](../concepts/regions/overview)

Additionally, there is one file, for every dimension/level managed by YAWP. Those are named like the dimension/level itself.

Here you find the region data of the Dimensional Region for this dimension, as well as the Local Regions defined in this dimension.

For the overworld and nether this would be

- `minecraft:overworld` => `minecraft_overworld.dat`
- `minecraft:the_nether` => `minecraft_the_nether.dat`

These files should match the list of the dimensions/levels in the `dimensions.dat` file.

![](./img/new-data-storage.png)




---
title: 'Command Overview - Dimensional Regions'
description: 'Command overview to manage Dimensional Regions'
sidebar_label: 'Dimensional Region'
sidebar_position: 3
sidebar_custom_props:
  customEmoji: 💻 🗾
---

# Dimensional Regions

The commands for Dimensional Regions begin with `/yawp dim <dim> <subcmd>`.

Where `<dim>` is the ResourceLocation of the dimension/level. E.g.: `/yawp dim minecraft:overworld info`

* All commands from [Commands](overview.md) apply.
* `/yawp dim <dim> create local <regionname> <areaType> ... [<parent>]` - Creates a new Local Region in dimension with
  specified area type and selected area with an optional parent region -
  see [Creating a region with the CLI](dimension-commands#creating-a-region-with-the-cli)
* `/yawp dim <dim> delete <regionname> [-y]` will attempt to delete a region. Use -y to confirm the deletion of a region. Regions with children cannot be deleted at this point.

## Creating a region with the CLI

The command `/yawp dim <dim> create local <regionname> <area-type> <pos1> <pos2> [<parent>]` allows you to create a region
using purely the command line. This command can be executed by either a player in game or from the server console.

- Cuboid: `/yawp dim <dim> create local <regionname> Cuboid <pos1> <pos2> [<parent>]`
- Sphere: `/yawp dim <dim> create local <regionname> Sphere <center-pos> <radius> [<parent>]`

A sphere with a radius of 0 is only the center block. The diameter is `radius * 2 + 1` ( with +1 being the center block). So only odd diameters are possible.

![create-region-gif](../img/cli-create-local-region.gif)

### The arguments are explained as follows
* `<dim>`: is the dimension in which you want to create a new region (e.g. `'minecraft:overworld'`)
* `<regionname>`: the name of the region you want to create. Duplicate region names in the same dimensions are not allowed.
* `<area-type>`: the type of the area you want to create. Currently, only Cuboid and Sphere are supported.
* `<pos1>`, `<pos2> and <center-pos>`: are BlockPositions (X,Y,Z). They can be auto-filled with tab when you are looking at a block in game.
* `<radius>`: is the radius of the sphere. This needs to be a non-negative integer ( 0, 1, 2, 3, ...).
* `[<parent>]`: the parent argument is optional. It can be used to define set the parent region directly on creating a new region. Leaving parent empty will result in the Dimensional Region being used as parent region.
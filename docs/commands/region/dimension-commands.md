---
title: 'Dimensional Regions'
description: 'Command overview to manage Dimensional Regions'
sidebar_label: 'Dimensional Region'
sidebar_position: 3
sidebar_custom_props:
  customEmoji: 💻 🗾
---

The commands for Dimensional Regions begin with `/yawp dim <dim> ...`. Where `<dim>` is the ResourceLocation of the dimension/level. E.g.: 
```
/yawp dim minecraft:overworld info
```

## Info commands

```
/yawp dim <dim> list local [<page>]
```
List the region Local Regions defined in that dimension.
___

## State commands
```
/yawp dim <dim> state alert-local <true|false>
```
Disables/Enables player messages on triggering flags for all Local Regions in the dimension.
___

```
/yawp dim <dim> state enable-local <true|false>
```
Disables/enables the region flags for all Local Regions in the dimension.
___

## Local Region management

### Create a Cuboid Region
```
/yawp dim <dim> create local <name> Cuboid <pos1> <pos2> [<parent>]
```
Creates a new Local Region with a Cuboid area, specified by the opposite corner blocks of that cuboid.
Notes:
- `<name>` is the name for the new Local Region
- `<pos1>` and `<pos2>` are the block positions (X, Y, Z) of the opposite corner blocks of the cuboid
- `[<parent>]` an optional parent region to set for the new Local Region - defaults to the Dimensional Region and be omitted.
___

### Create a Sphere Region
```
/yawp dim <dim> create local <name> Sphere <center-pos> <radius> [<parent>]
```
Creates a new Local Region with a spherical area, specified by the given center and radius.
Notes:
- `<name>` is the name for the new Local Region
- `<center-pos>` sphere center as a block position (X, Y, Z)
- `<radius>` the radius of the sphere ≥ 0
- `[<parent>]` an optional parent region to set for the new Local Region - defaults to the Dimensional Region and be omitted.
- A sphere with a radius of 0 is only the center block. 
- The diameter is `radius * 2 + 1` ( with +1 being the center block). So only odd diameters are possible.
___


### Deleting a Local Region
```
/yawp dim <dim> delete <local> [-y]
```
This will attempt to delete a region. 
Notes:
- Use -y to confirm the deletion of a region (safety first!)
- Regions with children cannot be deleted
___

### Deleting all Local Regions
```
/yawp dim <dim> delete-all regions [forever] [seriously]
```
This will attempt to delete all local regions in the dimension
Notes:
- omitting `[forever] [seriously]` will attempt to delete the region and prompt you with a warning
- append `forever seriously` to confirm the deletion
___

## Misc

```
/yawp dim <dim> nuke-display-entities
```
Attempts to remove leftover display entities shown from the visualizations of Local Regions.
___

```
/yawp dim <dim> reset dim
```
Resets the Dimensional Region to its default state. No warning here it just does.
Notes:
- clears all groups of the Dimensional Region
- clears all flags of the Dimensional Region
- sets the region to being active
- enables the flag alert
___

```
/yawp dim <dim> reset regions
```
Resets all Local Regions in the dimension to its default state. No warning here it just does.
Notes:
- clears all groups in those regions
- sets the region to being active
- enables the flag alert
___


## Argument legend
* `<dim>`: is the dimension in which you want to create a new region (e.g. `'minecraft:overworld'`)
* `<name>`: the name of the region you want to create. Duplicate region names in the same dimensions are not allowed.
* `<area-type>`: the type of the area you want to create. Currently, only Cuboid and Sphere are supported.
* `<pos1>`, `<pos2> and <center-pos>`: are BlockPositions (X,Y,Z). They can be autofilled with TAB while you are looking at a block in game.
* `<radius>`: is the radius of the sphere. This needs to be a non-negative integer ( 0, 1, 2, 3, ...).
* `[<parent>]`: the parent argument is optional. It can be used to define set the parent region directly on creating a new region. Leaving parent empty will result in the Dimensional Region being used as parent region.
* `<page>` indicates the page for the pagination, this is optional and will default to `0` for the first page. Note that page navigation elements are not displayed, if only one page exists.

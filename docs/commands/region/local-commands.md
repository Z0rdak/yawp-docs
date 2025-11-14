---
title: 'Local Regions'
description: 'Command overview to manage your Local Regions'
sidebar_label: 'Local Regions'
sidebar_position: 2
sidebar_custom_props:
  customEmoji: 💻 🏡
---

## Creating a Local Region

There are three ways of creating a region:

1. Using commands: [`/yawp dim <dim> create local ...` ➡️](dimension-commands.md#local-region-management)
2. Using shorthand commands: [`/yawp create <name> ...` ➡️](shorthand-commands)
3. Using the RegionMarker in combination with commands: [`/yawp marker create ...` ➡️](../marker/marker-commands#creating-a-region-with-the-regionmarker)

In order to create a region, you will need the appropriate permissions. You must either be an owner of the Dimensional Region you are currently in, or the owner of a Local Region where you would want to add a child region.

## Info commands

```
/yawp local <dim> <local> area
```
Shows the Local Regions area properties like area, position and marked blocks. The displayed area properties vary depending on the area type of the Local Region. 
___
```
/yawp local <dim> <local> visualization
```
Shows the Local Regions
___
```
/yawp local <dim> <local> display
```
Shows the Local Regions display properties like area, teleport position and marked blocks.
___
```
/yawp local <dim> <local> tp-anchros
```
Shows the Local Regions 
___


## Region hierarchy commands

```
/yawp local <dim> <local> add child <child-region>
```
Set the specified `<child-region>` as child of the Local Region `<local>`. This in turn also set `<local>` as parent of the region `<child-region>`.
Notes:
- This also sets the priority of the child region to be higher (+1) than the priority of the parent region.
- Keep that in mind when working with overlapping regions which are not part of a hierarchy. 
- For this to work the region `pvp-arena` must be completely inside the `town` region area.
```
/yawp local minecraft:overworld town add child pvp-arena
```
This command set `pvp-arena` as child region of the Local Region `town`. This also sets the parent of `pvp-arena` to `town`.

___
```
/yawp local <dim> <local> remove child <child-region>
```
Breaks up the parent-child hierarchy of the given parent (`<local>`) and its child region (`<child-region>`).
Note: The child regions parent is then set back to the Dimensional Region (e.g.: `minecraft:overworld`).


## Area commands

### Expanding
```
/yawp local <dim> <local> area expand Cuboid [<y-min> <y-min>]
```
Expands the cuboid area of the Local Region to the specified `<y-min>` and `<y-max>` values. 
Note: Leaving the arguments empty will expand the area to the full world height.
___
```
/yawp local <dim> <local> area expand Sphere [<expansion>]
```
Expands the sphere area of the Local Region by the specified value (increment / decrement). 
Notes:
- Leaving the argument empty will expand the radius of the area by 1. 
- Shrink spheres by supplying negative values.
___

### Update the area

```
/yawp local <dim> <local> area set Cuboid <pos1> <pos2>
```
Sets the area of the Local Region as a Cuboid with the specified positions.
___
```
/yawp local <dim> <local> area set Sphere <center-pos> <radius>
```
Sets the area of the Local Region as a Sphere with the specified center position and radius.
___

Note: You can freely change the area-type of a Local Region from Cuboid to Sphere and vice versa.

### Display settings

```
/yawp local <dim> <local> display block <resource-location> 
```
Sets a new default block for displaying the visualization of the region. 
Notes:
- by default, it is one of the 16 stained-glass blocks to provide some kind of transparency.
- `<resource-location>` expects some kind of block identifier. E.g. `minecraft:cyan_stained_glass`
- if you are using vanilla blocks, you can also provide just the name after the colon e.g.: `cyan_stained_glass`
- otherwise, if using blocks from another mod, provide the full identifier e.g. `botania:manaGlass`
___

```
/yawp local <dim> <local> display glow <true|false>
```
Set the glowing effect (glowing outline) for the visualization. Use `true` to enable it, `false` otherwise. The default is `true`.
___

```
/yawp local <dim> <local> display light-level <0-15>
```
Set the light level of the block visualization. The default is `15`.
Notes:
- This is the default vanilla light level scale
- with `0` being the darkest and `15` being the brightest
___

```
/yawp local <dim> <local> display reset ...
```
Resets the visualization settings back to its default values:
- `light-level` to `15` 
- `glow` to `true`
___


## Visualization

### Show
#### Show the region
```
/yawp local <dim> <local> show local [<style>] [<block>] [<glow>] [<light-level>]
```
...
___

#### Show hierarchy

```
/yawp local <dim> <local> show local [<style>] [<recursive>]
```
...
___

#### Show intersecting

```
/yawp local <dim> <local> show local [<style>]
```
...
___

### Hide
#### Hide the region
```
/yawp local <dim> <local> hide local [<style>]
```
...
___

#### Hide hierarchy

```
/yawp local <dim> <local> hide hierarchy [<style>] [<recursive>]
```
...
___

#### Hide intersecting

```
/yawp local <dim> <local> hide intersecting [<style>]
```
...
___


## Teleport Anchors

```
/yawp local <dim> <local> add tp-anchor <name> <pos>
```
Define and add a new teleport anchor with the given name at the given position.
___

```
/yawp local <dim> <local> remove tp-anchor <name>
```
Remove an existing teleport anchor from the region.
___

### Update anchors

```
/yawp local <dim> <local> tp-anchor rename <name> <new-name>
```
Rename an existing teleport anchor. The new name can't be used by another teleport anchor already.
___

```
/yawp local <dim> <local> tp-anchor set <name> <pos>
```
Updates the position of an existing teleport anchor to the given position.
___
### Show, Hide & Teleport

```
/yawp local <dim> <local> tp-anchor show <name>
```
Visualizes the teleport anchor in the world.
___
```
/yawp local <dim> <local> tp-anchor hide <name>
```
Hides the shown teleport anchor.
___

```
/yawp local <dim> <local> tp-anchor tp <name> [<player>]
```
Teleports the executing player to the given teleport anchor. 

The `<player>` argument can be used to teleport another player to this teleport anchor. 
Otherwise, it can be omitted.
___



## State & Misc

### State commands
```
/yawp local <dim> <local> state priority <priority>
```
Sets the absolute priority for the Local Region to the specified amount. `<priority>` is an integer. Higher value = higher priority.
___
```
/yawp local <dim> <local> state priority +|- <priority>
```
Increments/decrements the priority for the Local Region by the specified amount. `<priority>` is an integer.
___

### Renaming
```
/yawp local <dim> <local> rename <name>
```
Renames the Local Region to the specified name.
___

### Deleting a Local Region
```
/yawp local <dim> <local> delete [-y]
```
This will attempt to delete a region. Use -y to confirm the deletion of a region. Regions with children cannot be deleted.
___

## Copy commands

### Copy flags
```
/yawp local <dim> <local> copy flags to-local <target-dim> <target-region>
```
Copies all flags from the Local Region to the target Local Region in the target dimension.
___
```
/yawp local <dim> <local> copy flags to-dim <target-dim>
```
Copies all flags from the Local Region to the Dimensional Region of the target dimension.

### Copy players
```/
yawp local <dim> <local> copy players to-local <target-dim> <target-region> <group>
```
Copies all players of the specified group from the Local Region to the target Local Region in the target dimension.
```
/yawp local <dim> <local> copy players to-dim <target-dim> <group>
```
- Copies all players of the specified group from the Local Region to the Dimensional Region of the target dimension.

### Copy region state
```
/yawp local <dim> <local> copy state to-local <target-dim> <target-region>
```
Copies the state of the Local Region to the target Local Region in the target dimension.
```
/yawp local <dim> <local> copy state to-dim <target-dim>
```
Copies the state of the Local Region to the Dimensional Region of the target dimension.


## Argument legend
* `<dim>`: is the dimension in which you want to create a new region (e.g. `'minecraft:overworld'`)
* `<regionname>`: the name of the region you want to create. Duplicate region names in the same dimensions are not allowed.
* `<area-type>`: the type of the area you want to create. Currently, only Cuboid and Sphere are supported.
* `<pos1>`, `<pos2> and <center-pos>`: are BlockPositions (X,Y,Z). They can be autofilled with TAB while you are looking at a block in game.
* `<radius>`: is the radius of the sphere. This needs to be a non-negative integer ( 0, 1, 2, 3, ...).
* `[<parent>]`: the parent argument is optional. It can be used to define set the parent region directly on creating a new region. Leaving parent empty will result in the Dimensional Region being used as parent region.
* `<page>` indicates the page for the pagination, this is optional and will default to `0` for the first page. Note that page navigation elements are not displayed, if only one page exists.

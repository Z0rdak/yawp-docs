---
title: 'Command overview'
description: 'Region command overview to manage Global, Dimensional and Local Regions.'
sidebar_label: 'Overview'
sidebar_position: 1
sidebar_custom_props:
  customEmoji: 💻 👀
---

The following pages give a comprehensive overview over all commands you need to effectively manage your regions and more. 

Usually you would start by display information about the dimension you are standing in using for example:
```
/yawp dim minecraft:overworld info
```
and go from there with the help of the interactive CLI. This way you can mostly avoid typing commands manually.

Refer to the pages below for more information on the commands available for each different sub command:

## Base commands

* 🌍 [`/yawp global ...`  command reference ➡️](global-commands)
* 🗾 [`/yawp dim <dim> ...`  command reference ➡️](dimension-commands)
* 🏡 [`/yawp local <dim> <local> ...`  command reference ➡️](local-commands)

## Common region commands

The following listed commands are applicable for all types of regions (Local, Dimensional and Global). 

So instead of using `/yawp local <dim> <local> ...` replace it with the base commands above.


## Info commands

The info commands show information about your region definition. Depending on the region type the displayed information can vary.

```
/yawp local <dim> <local> [info]
```
Displays the interactive info of region. You can omit `info` at the end of the command.
___

```
/yawp local <dim> <local> state
```
Displays the regions state (the state values vary depending on the region type).
___

```
/yawp local <dim> <local> list flag [<page>]
```
List the flags defined in the region.
___

```
/yawp local <dim> <local> list owner
```
Shows an overview of owners in that region.
___

```
/yawp local <dim> <local> list member
```
Shows an overview of owners in that region.
___

```
/yawp local <dim> <local> list owner player [<page>]
```
List all players set as owners for the region.
___

```
/yawp local <dim> <local> list member player [<page>]
```
List all players set as members for the region.
___

```
/yawp local <dim> <local> list children [<page>]
```
List the direct child regions of the region.

The `<page>` argument indicates the page for the pagination, this is optional and will default to `0` for the first page. 
Note that the pagination elements are not displayed, if only one page exists.


## State commands
```
/yawp local <dim> <local> state alert <true|false>
``` 
Disables/Enables player messages on triggering flags for the regions.
___
```
/yawp local <dim> <local> state enable <true|false>
```
Disables/enables the region.
___



## Flag commands

### Add flags
```
/yawp local <dim> <local> add flag <flag> [<flagstate>]
```
Adds a flag to the given region. The `flagstate` can be omitted and defaults to `Denied`.
___
```
/yawp local <dim> <local> add flags <flag-0> ... <flag-n>
```
Add flags (with default values) to the given region (list of flags separated by space). For example:
```
/yawp local minecraft:overworld spawn-region add flags break-blocks place-blocks
```
Add the flags `break-blocks` and `place-blocks` with `Denied` state to the Local Region `spawn-region` in the overworld.
___
```
/yawp local <dim> <local> add all-flags
```
Adds all flags (with default values) to the region.
___

### Remove flags
```
/yawp local <dim> <local> remove flag <flag>
```
Removes a flag from the given region.
___
```
/yawp local <dim> <local> remove flags <flag-0> ... <flag-n>
```
Remove flags from the given  region (list of flags separated by space).
___
```
/yawp local <dim> <local> clear flags
```
Removes all flags from given the region.
___




## Group / Player management

### Add players

Commands to add a player to a specific group of a region.

```
/yawp local <dim> <local> add player <group> <player>
```
___
```
/yawp local <dim> <local> add player member <player>
```
add a player as a member.
___

```
/yawp local <dim> <local> add player owner <player>
```
add a player as an owner.
___ 

### Remove players

Commands to remove a player from a specific group of a region.

* ```/yawp local <dim> <local> remove player <group> <player>```
* ```/yawp local <dim> <local> remove player member <player>``` => Removes a player from the member group from the given region.
* ```/yawp local <dim> <local> remove player owner <player>``` => Removes a player from owner group from the given region.
* ```/yawp local <dim> <local> clear players [<group>]``` - Removes all players of the given group and region. If a group is specified, only the players of the specified group are removed.
* ```/yawp local <dim> <local> clear group <group>```
* ```/yawp local <dim> <local> clear group members``` => Removes all players from the member group for the given region.
* ```/yawp local <dim> <local> clear group owners``` => Removes all players from the owner group for the given region.



## Argument legend
* `<dim>`: is the dimension in which you want to create a new region (e.g. `'minecraft:overworld'`)
* `<regionname>`: the name of the region you want to create. Duplicate region names in the same dimensions are not allowed.
* `<area-type>`: the type of the area you want to create. Currently, only Cuboid and Sphere are supported.
* `<pos1>`, `<pos2> and <center-pos>`: are BlockPositions (X,Y,Z). They can be autofilled with TAB while you are looking at a block in game.
* `<radius>`: is the radius of the sphere. This needs to be a non-negative integer ( 0, 1, 2, 3, ...).
* `[<parent>]`: the parent argument is optional. It can be used to define set the parent region directly on creating a new region. Leaving parent empty will result in the Dimensional Region being used as parent region.
* `<page>` indicates the page for the pagination, this is optional and will default to `0` for the first page. Note that page navigation elements are not displayed, if only one page exists.


## Commands Quick Tips & Notes

- Permissions to use YAWP commands can be changed in the `yawp-common.toml` [config](../../config/permissions).
- Owners of a region can always execute commands considering their region.
- All players can _see_ the YAWP commands, but the permission to use the commands are checked at execution.
- The config setting `disable_cmd_for_non_op` disables the usage of the YAWP commands for non OPs.
- The config setting `op_bypass_flags` allows OPs and players with UUID entry to bypass flags.
- The config setting `hierarchy_ownership` allows owners to have permissions for child regions as well.
- Every `<player>` argument works with the usual [entity target selectors](https://minecraft.fandom.com/wiki/Target_selectors) like `@s`, `@a`, etc. The `<team>` arguments require an already defined [vanilla minecraft team](https://minecraft.fandom.com/wiki/Commands/team).
- The position arguments are vanilla `BlockPos` (X,Y,Z coordinates), which can be filled with TAB by looking at a block.

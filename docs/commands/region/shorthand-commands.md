---
title: 'Shorthand commands for Local Regions'
description: 'Command alternatives for managing Local Regions in the players current dimension.'
sidebar_label: 'Shorthand commands'
sidebar_position: 5
sidebar_custom_props:
  customEmoji: 💻 🏡⚡️
---

This document covers the shorthand commands `/yawp <cmd>`. 
Those are just shortcut for executing commands you normally would by using `/yawp local <dim> <local> ...`.

## Info commands
```
/yawp info <local>
```
Displays information about the specified Local Region.
___

## Create commands
### Create a Cuboid Region
```
/yawp create <name> Cuboid <pos1> <pos2> [<parent>]
```
Creates a new Local Region with a Cuboid area, specified by the opposite corner blocks of that cuboid.
Notes:
- `<name>` is the name for the new Local Region
- `<pos1>` and `<pos2>` are the block positions (X, Y, Z) of the opposite corner blocks of the cuboid
- `[<parent>]` an optional parent region to set for the new Local Region - defaults to the Dimensional Region and be omitted.
___

### Create a Sphere Region
```
/yawp create <name> Sphere <center-pos> <radius> [<parent>]
```
Creates a new Local Region with a spherical area, specified by the given center and radius.
Notes:
- `<name>` is the name for the new Local Region
- `<center-pos>` sphere center as a block position (X, Y, Z)
- `<radius>` the radius of the sphere ≥ 0
- `[<parent>]` an optional parent region to set for the new Local Region - defaults to the Dimensional Region and be omitted.

___

## Delete a Local Region
```
/yawp delete <local>
```
Deletes the specified Local Region.
___

## Hide commands
### Hide a Local Region
```
/yawp hide local <local> [<style>]
```
Hides the selected Local Region’s visualization.
* `<style>` defaults to the `Frame` and can be omitted.
___

### Hide All Regions
```
/yawp hide all [<untracked>]
```
Hides all visualizations currently shown. 
Note: Also hides untracked regions when `<untracked>` is `true` - defaults to `false`.
___

### Hide Regions Near the Player
Hides regions within 192 blocks of the player.
```
/yawp hide near [<radius>]
```
Hides regions within a specified radius. `<radius>` defaults to `192` blocks and can be omitted.
___

## Show commands

### Show a Local Region
```
/yawp show local <local> [<style>]
```
Shows the visualization of the specified Local Region. `<style>` defaults to `Frame` and can be omitted.
___

### Show Regions Near the Player
```
/yawp show near [<radius> <style>]
```
Shows regions within a custom radius and the given display style.
Notes:
- `<radius>` defaults to `192` blocks and can be omitted
- `<style>` defaults to `Frame` and can be omitted
- All regions crossing the given radius will be fully shown
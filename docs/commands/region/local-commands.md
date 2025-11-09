---
sidebar_label: 'Local Region commands'
sidebar_position: 4
---

# Local Regions

The commands to manage the Local Regions can be used either by players which have the required OP level or have an entry
in the [configuration](../../config/permissions.md) or by their owners. Adding a player or a team as the Local Region
owner allows full control over managing the region.

Without permission or being an owner, players are only allowed to use `/yawp local <dim> <local> info|list|state|area` commands to show information about the Local Region.
***
## Creating a Local Region

There are two ways of creating a region:

1. Using the CLI (see [Dim-Commands](dimension-commands.md#creating-a-region-with-the-cli))
2. Using the RegionMarker in combination with the CLI (
   see [Commands-Marker](../marker/marker-commands#creating-a-region-with-the-regionmarker))

In order to create a region, you will need the appropriate permissions. You must either be an owner of the Dimensional Region you are currently in, or the owner of a Local Region where you would want to add a child region.


## Deleting a Local Region

There are two ways to delete a Local Region:

- `/yawp local <dim> <local> delete [-y]` will attempt to delete a region. Use -y to confirm the deletion of a region. Regions with children cannot be deleted at this point.
- `/yawp dim <dim> delete <local> [-y]` will attempt to delete a region. Use -y to confirm the deletion of a region. Regions with children cannot be deleted at this point.

***

## Info commands

* `/yawp local <dim> <local> area` - Shows the Local Regions area properties like area, teleport position and marked blocks.
***
## Management commands

### State commands
* `/yawp local <dim> <local> state priority <priority>` - Sets the absolute priority for the Local Region to the specified amount. `<priority>` is an integer.
* `/yawp local <dim> <local> state priority +|- <priority>` - Increments/decrements the priority for the Local Region by the specified amount. `<priority>` is an integer.

### Area commands
* `/yawp local <dim> <local> area expand Cuboid [Y_MIN] [Y_MAX]` - Expands the area of the Local Region to the specified **Y_MIN** and **Y_MAX** values. Leaving the arguments empty will expand the area to the full world height.
* `/yawp local <dim> <local> area expand Sphere [<expansion>]` - Expands the area of the Local Region by the specified radius (positive or negative). Leaving the argument empty will expand the area by 1 block.
* `/yawp local <dim> <local> area set Cuboid <pos1> <pos2>` - Sets the area of the Local Region as a Cuboid with the specified positions.
* `/yawp local <dim> <local> area set Sphere <center-pos> <radius-pos>` - Sets the area of the Local Region as a Sphere with the specified center and radius positions.
* `/yawp local <dim> <local> area set Sphere <center-pos> <radius>` - Sets the area of the Local Region as a Sphere with the specified center position and radius.
* `/yawp local <dim> <local> area teleport [<player>]` - Teleports the selected player to the teleport position of the Local Region. Leaving the player argument empty will teleport the executing player.
* `/yawp local <dim> <local> area teleport set <pos>` - Sets the teleport position of the Local Region to the specified position.

### Copy commands
* `/yawp local <dim> <local> copy flags to-local <target-dim> <target-region>` - Copies all flags from the Local Region to the target Local Region in the target dimension.
* `/yawp local <dim> <local> copy flags to-dim <target-dim>` - Copies all flags from the Local Region to the Dimensional Region of the target dimension.
* `/yawp local <dim> <local> copy players to-local <target-dim> <target-region> <group>` - Copies all players of the specified group from the Local Region to the target Local Region in the target dimension.
* `/yawp local <dim> <local> copy players to-dim <target-dim> <group>` - Copies all players of the specified group from the Local Region to the Dimensional Region of the target dimension.
* `/yawp local <dim> <local> copy state to-local <target-dim> <target-region>` - Copies the state of the Local Region to the target Local Region in the target dimension.
* `/yawp local <dim> <local> copy state to-dim <target-dim>` - Copies the state of the Local Region to the Dimensional Region of the target dimension.

### Region renaming

* `/yawp local <dim> <local> rename <name>` - Renames the Local Region to the specified name.

Every `<player>` argument works with the usual [entity target selectors](https://minecraft.fandom.com/wiki/Target_selectors) like `@s`, `@a`, etc. The `<team>` arguments require an already defined [vanilla minecraft team](https://minecraft.fandom.com/wiki/Commands/team).

The position arguments are vanilla X,Y,Z coordinates, which can be filled with TAB by looking at a block.
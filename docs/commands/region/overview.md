---
sidebar_label: 'Common region commands'
sidebar_position: 1
---
## Command overview

These pages show all region commands available to manage your regions. 

Usually you would start by display information about the dimension you are standing in (by using `/yawp dim <dim> info`) and go from there with the help of the interactive CLI. This way you can mostly avoid using commands manually.

Refer to the pages below for more information on the commands available for each different sub command:

## Base commands

* `/yawp global ...`: [Global Region commands](global-commands.md)
* `/yawp dim <dim> ...`: [Dimensional Region commands](dimension-commands.md)
* `/yawp local <dim> <local> ...`:  [Local Region commands](local-commands)

## Common region commands

The listed commands here are usable for all types of regions (Local, Dimensional and Global)

## Info commands

* `/yawp local <dim> <local>` - Displays the interactive info of region.
* `/yawp local <dim> <local> info` - Same as the `/yawp local <dim> <local>` command.
* `/yawp local <dim> <local> state` - Displays the regions state (the state values vary depending on the region type).
* `/yawp local <dim> <local> list flag|owner|member/children [<page>]` - List the region flags, owners, members or children defined in the region. When listing owners or members, the teams and players can be further listed.  
  `page` indicates the page for the pagination, this is optional and will default to 0 for the first page. Note that pagination is not displayed, if only one page exists.
***

## State commands
* `/yawp local <dim> <local> state alert <true|false>` - Disables/Enables player messages on triggering flags for the regions.
* `/yawp local <dim> <local> state enable <true|false>` - Disables/enables the region.

## Flag commands

* `/yawp local <dim> <local> add|remove flag <flag>` - Add/Remove a flag (with default values) of the Local Region.
* `/yawp local <dim> <local> add|remove flags <flag-0> ... <flag-n>` - Add/Remove flags (with default values) of the Local Region (list of flags separated by space).
* `/yawp local <dim> <local> add all-flags` - Adds all flags (with default values) to the Local Region.
* `/yawp local <dim> <local> clear flags ...` - Clears all flags of the Local Region.

## Team/Player management commands
* `/yawp local <dim> <local> add|remove player <group> <player>` - Add/Remove players of the Local Region with the specified group.
* `/yawp local <dim> <local> add|remove team <group> <team>` - Add/Remove teams of the Local Region with the specified group.
* `/yawp local <dim> <local> clear players|teams [<group>]` - Clears all players or teams of the Local Region. If a group is specified, only the players or teams of the specified group are cleared.
* `/yawp local <dim> <local> clear group <group>` - Clears all players and teams of the specified group.

## Region hierarchy commands
* `/yawp local <dim> <local> add|remove child <child-region>` - Add/Remove child regions of the Local Region.

### Notes:

- Every `<player>` argument works with the usual [entity target selectors](https://minecraft.fandom.com/wiki/Target_selectors) like `@s`, `@a`, etc. The `<team>` arguments require an already defined [vanilla minecraft team](https://minecraft.fandom.com/wiki/Commands/team).
- The position arguments are vanilla `BlockPos` (X,Y,Z coordinates), which can be filled with TAB by looking at a block.

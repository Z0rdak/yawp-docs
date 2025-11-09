---
sidebar_position: 2
---
# Permission config

* `command_op_level` - This controls the OP level which is required to execute the mods commands. Range 0-5, defaults to 4. `0` allows for all players to use the commands, `1-4` needs the corresponding OP level and `5` prevents all operators from using the commands (so only players from the list `players_with_permission` or the server console can use commands for every region).

    * Example: `command_op_level = 4`


* `players_with_permission` - This is a list of player UUIDs for players which have the permission to use the mods commands regardless of their OP level. You need to provide the full UUID, not the trimmed version. See: [How to get your UUID](https://mcuuid.net/).

    * Example: `players_with_permission = ["614c9eac-11c9-3ca6-b697-938355fa8235", "b9f5e998-520a-3fa2-8208-0c20f22aa20f"]`
    * Example: `players_with_permission = ["614c9eac-11c9-3ca6-b697-938355fa8235"]`

* `command_block_execution` - This toggles whether command blocks are allowed to execute the mods commands. Note for this to work the `command_op_level` additionally needs to be 2 or higher and command blocks needs to be enabled in the server.properties file.

    * Example: `command_block_execution = true`

* `allow_info_cmds`- This decides whether all players are allowed to use commands to display information about regions. This includes listing players, flags, state, etc.

    * Example: `allow_info_cmds = true`

* `disable_cmd_for_non_op`- Defines whether mod commands are disabled for non-OP players.

    * Example: `disable_cmd_for_non_op = true`

* `op_bypass_flags`- Defines whether OPs/permitted players are allowed to bypass flags set in regions.

    * Example: `op_bypass_flags = true`

* `hierarchy_ownership`- Defines whether owners of parent regions have implicit ownership rights for child regions as well

    * Example: `hierarchy_ownership = true`

* `allow_region_tp`- Defines whether teleport in and out of a region is allowed by everyone. Mostly useful when using something like Waystones inside of regions.

    * Example: `allow_region_tp = true`


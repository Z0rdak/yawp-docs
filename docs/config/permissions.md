---
title: 'Permission configuration'
description: 'Permission configuration for commands and other things.'
sidebar_label: 'Permissions'
sidebar_position: 2
sidebar_custom_props:
    customEmoji: 🔒🔑 ⚙️
---
# Permission config

**`command_op_level`** 

```toml
command_op_level = 4
```
This setting controls the OP level which is required to _use_ the mods commands. Note it states _use_, not _execute_. 
Due to the fact how the permission checks work, players can see and execute the commands, but are not allowed to use the commands.

Notes: 
- Values range: `0` - `5`
- `0`: all players are allowed to use the commands
- `5`: not even OPs are allowed to use the commands. This means only players from the list `players_with_permission` or the server console can use commands.
- `1-4`: players need the corresponding OP level to use the commands.
- default: `4`
___

**`players_with_permission`**

```toml
players_with_permission = ["614c9eac-11c9-3ca6-b697-938355fa8235"]
```
This setting defines a list of player UUIDs who are explicitly allowed to **use** the mod’s commands regardless of OP level. Only full, untrimmed UUIDs are valid.

Notes:
* Values: one or more valid UUID strings
* Players listed here bypass `command_op_level` entirely
* Useful for granting access to trusted non-OP players
* default: `[]`
___

**`command_block_execution`**

```toml
command_block_execution = true
```
This toggles whether command blocks are allowed to **use** the mod’s commands. 
Command blocks always count as OP level 2 for permission checks, and command blocks must be enabled in `server.properties`.
Notes:
* Values: `true` or `false`
* Requires:
    * `command_op_level >= 2`
    * `enable-command-block=true` in server.properties
* default: `true`

___

**`allow_info_cmds`**

```toml
allow_info_cmds = true
```
This determines whether information-only commands are accessible to all players. These commands expose non-destructive data such as region lists, flags, players, state, etc.
Notes:
* Values: `true` or `false`
* Does not grant access to modifying commands
* default: `true`
___

**`disable_cmd_for_non_op`**
```toml
disable_cmd_for_non_op = true
```

This setting forces all mod commands to be unusable by non-OP players, regardless of any other permission settings except 
explicit player whitelisting via `players_with_permission`.
This setting actual prevents players from seeing the available commands in the first place.

Notes:
* Values: `true` or `false`
* Overrides `command_op_level` for non-OP players
* OPs and whitelisted players remain unaffected
* default: `false`
___

**`op_bypass_flags`**

```toml
op_bypass_flags = true
```

This controls whether players with sufficient permissions (OP level or explicit whitelist) bypass all region flags. 
When enabled, their actions ignore restrictions defined inside regions.
Notes:
* Values: `true` or `false`
* Applies to OPs and UUID-whitelisted players
* Useful for administrative moderation
* default: `true`
___

**`hierarchy_ownership`**

```toml
hierarchy_ownership = true
```
This setting determines whether owners of a parent region automatically gain ownership rights for all child regions under it. 
Without this, child region ownership must be defined explicitly.

Notes:
* Values: `true` or `false`
* Affects permission inheritance across region hierarchies
* default: `true`
___

**`allow_region_tp`**

```toml
allow_region_tp = true
```
This toggles whether teleporting into or out of regions is allowed for all players. 
Enables compatibility with teleportation systems such as Waystones placed inside protected regions.

Notes:
* Values: `true` or `false`
* Does not override region-specific teleport restrictions if the mod provides them
* default: `true`
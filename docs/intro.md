---
sidebar_position: 1
---

# Documentation

Yet Another World Protector, or YAWP for short, is a server-side mod (plugin), for Fabric, Forge and NeoForge, which allows you to protect your creations against various different events/actions of players, mobs and the environment.

It was inspired by the forge mod [WorldProtector](https://www.curseforge.com/minecraft/mc-mods/worldprotector) and the [WorldGuard](https://dev.bukkit.org/projects/worldguard) plugin.

***The mod is currently in its beta state and active development - with many features not yet implemented, but to come. These features will, beside others, include most of the things you know from WorldProtector and WorldGuard.***

## Getting Started

If you are new to using YAWP please take a look at the [getting started](getting-started/installation) section of the documentation as well as the FAQ. 
___
## Looking for commands?

You can find all commands [here](commands/overview).

But why bother with typing commands when you instead can use the [Interactive CLI](interactive-cli/overview) for almost anything.

### Commands Quick Tips

- Permissions to use YAWP commands can be changed in the `yawp-common.toml` [config](config/permissions).
- Owners of a region can always execute commands considering their region.
- All players can _see_ the YAWP commands, but the permission to use the commands are checked at execution.
- The config setting `disable_cmd_for_non_op` disables the usage of the YAWP commands for non OPs.
- The config setting `op_bypass_flags` allows OPs and players with UUID entry to bypass flags.
- The config setting `hierarchy_ownership` allows owners to have permissions for child regions as well.
___
## Regions

There are three different types of regions to protect your server:

- [**Local Regions**](concepts/regions/overview): Also known as **Claims** or **Plots** are area restricted zones in your world. The area of a region can be defined using a Cuboid or Sphere. More details [**here**](concepts/regions/overview).
- [**Dimensional Regions**](concepts/regions/overview): Dimensional Regions have no area restrictions. They work like Local Regions, but are tied to a whole dimension. More details [**here**](concepts/regions/overview).
- [***The* Global Region**](concepts/regions/overview): The Global Region affects the whole server. It is the parent region to **all** Dimensional Regions. More details [**here**](concepts/regions/overview).

### Region Quick Tips
- [**Flags**](concepts/flags/overview) can be added to regions to prevent various actions and events.
- Regions can have groups to manage permissions. There are currently two default groups : **owners**, **members**.
- You are able to assign vanilla teams and/or specific players to a group.
- Regions can be de/-activated. The same is true for their flag alerts.
- Local Regions have a priority to manage overlapping regions and region hierarchy. More info about **region hierarchy** [here](concepts/regions/overview).
- Dimensional Regions **can't** be created manually. They are in fact automatically generated with each new dimension.

___
## Flags

Flags are essential rules you can add to regions to prevent or allow specific actions/events/etc. Take a look at the [Flags](concepts/flags/overview) page for more details about flag management. 

Looking for a list of all available flags? Take a look [here](concepts/flags/flag-list).

If you have a suggestion for new flags feel free to add it to the suggestion list on [GitHub](https://github.com/Z0rdak/Yet-Another-World-Protector/issues/66) or share your idea in the **#suggestions** channel on discord.

### Flag Quick Tips

- A flag has an alert message which is displayed when its action is denied and player triggers the flag. 
- You can customize the message displayed by the flag alert (including turning it off).
- A flag has a flag state. There are three: `Denied`, `Allowed` or `Disabled`.
  - set the flag state to `Denied` to prevent the action associated with the flag.
  - set the flag state to `Allowed` to allow the action associated with the flag.
  - set the flag state to `Disabled` to not consider the flag in checks.
- You can **add flags** with
    - `/yawp local <dim> <region> add flag <flag>` for Local Regions
    - `/yawp dim <dim> add flag <flag>` for Dimensional Regions
    - `/yawp global add flag <flag>` for the Global Region
- You can optionally define the flag state when adding flags:
    - `/yawp local <dim> <region> add flag <flag> [flagstate]`.
    - by default the flag state is set to `Denied`
- **Manage the properties of flags** by using
    - `/yawp flag local <dim> <region> <flag> ...` for Local Regions
    - `/yawp flag dim <dim> <flag> ...` for Dimensional Regions
    - `/yawp flag global <flag> ...` for the Global Region
___
## Groups

Regions can have **owners** and normal **members**. Owners are allowed to manage the region and bypass the flags, members are only allowed to bypass the flags set in the region.

Owners/Members can be individual players or a [team](https://minecraft.wiki/w/Commands/team).

This allows you to create regions and assign players as their owners. They can then manage their regions themselves and add other players to them, as well as create their own sub-regions within their regions.

### Groups Quick Tips

- Regions can have groups to manage permissions. There are currently two default groups : **owners**, **members**.
- You are able to assign vanilla teams and/or specific players to a group.
- Owners and members bypass flags.
- Owners are allowed to manage their region (use commands)
- The [config](config/permissions) setting `hierarchy_ownership` allows owners and members to have permissions for child regions as well.
- Groups will be customizable in the future - stay tuned!
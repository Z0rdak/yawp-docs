---
title: 'What are Flags?'
description: 'Learn about what flags are and how they work.'
sidebar_label: 'Overview'
sidebar_position: 1
sidebar_custom_props:
  customEmoji: 🏳️‍🌈
---
# What are Flags?

Flags are the core of the region protection system. They define which actions are allowed or denied in a region. Flags can be set to
- **Allowed**, to allow the corresponding action,
- **Denied**, to deny the corresponding action,
- **Disabled**, to disable the specific flag for flag checks.

There are some flags marked as **beneficial** which are activated by setting them to **Allowed**. This includes for example the `keep-inv` and `no-hunger` flags. Reference the **[Flag list](flag-list)** for more information.
Flags can be set for all kind of regions. The flags are inherited by child regions from their parents.
Additionally, it is possible to override the flag state for child regions by setting the **override** property of the flag of the parent region accordingly.

***

# Flag overview

Currently, there are **90+ flags** available.

Take a look here on how to [add](../../commands/region/overview) and [manage](../../commands/flag/flag-commands)  flags for your regions.

Due to implementation details, the available flags differ slightly between versions. The goal is to achieve consistent behavior of the flags between Forge and Fabric.

Please refer to the **[Flag list](flag-list)** regarding any note on the flags.

***

# Flag inheritance

Version 0.0.4.0-beta1, introduced flag inheritance. This means that flags are inherited from parent regions to child regions.

- The same flag set in a child region will take precedence over the same flag of any parent region in flag checks.
  This means that if a flag is set in the parent region, the child region can override this flag by setting it to a different value. If a flag is not set in the parent region, the child region can set it to a value.

_Remember that child regions must have a higher priority than their parent regions._

- If a flag is set in the parent region, but not set in the child region, the flag will be inherited from the parent region.

- A parent region can set its flags to override the flags of all child regions. This means that the child regions can't override the flag set in the parent region.

The following table show how flags are handled for region hierarchies. Note that n/a here represents a disabled flag or an undefined flag state:

| Parent                |  Child  | Result  |
|:----------------------|:-------:|:-------:|
| Denied with override  |   Any   | Denied  |
| Allowed with override |   Any   | Allowed |
| Denied                | Denied  | Denied  |
| Denied                | Allowed | Allowed |
| Allowed               | Denied  | Denied  |
| Allowed               | Allowed | Allowed |
| n/a                   | Denied  | Denied  |
| n/a                   | Allowed | Allowed |
| Denied                |   n/a   | Denied  |
| Allowed               |   n/a   | Allowed |

***

# Region flag management

Flags are added and removed by using the `add flag` and `remove flag` command for the respecting region type.
The new `/yawp flag <region-type> ...` command allows you to further manage and customize the flags.

***

# Flag messages

Flags have their own dedicated flag message which is shown when the flag is triggered. Further it's now possible to mute flag messages for each individual flag (disabling the alert of the region will still mute
all flags for the region).

Use the following placeholders (starting with 0.6.1-beta1) in flag messages to refer to specific region info:
* `%1$s` - flag name
* `%2$s` - position of the flag action ( \[X=x, Y=y, Z=z\] )
* `%3$s` - region name involved in the flag check
* `%4$s` - dimension name
* `%5$s` - player name involved, if applicable
* `%6$s` - team name involved, if applicable
* `%7$s` - the group name involved, if applicable
* `%8$s` - entity name involved, if applicable
* `%9$s` - block name involved, if applicable

Flag messages also can be formatted by using the minecraft default string formatting.
* For example `&c %5$s &r tried to break a block in &9 %3$s &r!` will result in a red player name and a blue region name.
* Take a look at [this tool](https://codepen.io/0biwan/pen/ggVemP) for reference as well as the [minecraft wiki](https://minecraft.wiki/w/Formatting_codes).

There are default flag messages defined for each player related flag in the resource pack (internationalization) which can be customized.

There are also suggestion flag messages defined for the CLI in the resource pack which can be customized.

***
# Interactive CLI

When managing the flags of regions you will most likely use the flag list command. This command will show you an interactive list of all flags of the region. You can then click on the flag name to get more information about the flag and to change the flag state.

![flag-list](../img/cli-region-info-flags.png)



---
title: 'Region default configuration'
description: 'Configure defaults for region properties.'
sidebar_label: 'Region defaults'
sidebar_position: 4
sidebar_custom_props:
    customEmoji: 🌍 ⚙️
---

# Region default config

#### `default_flags`

```toml
default_flags = ["break-blocks", "place-blocks"]
```
Defines the default flags applied to newly created **Local Regions**.
Notes:
* Values: list of flag identifiers
* Applied only to local regions
* default: `[]`
___

#### `dim_default_flags`

```toml
dim_default_flags = ["spawning-animal", "no-pvp", "no-flight"]
```
Defines the default flags applied to newly created **Dimensional Regions**.
Notes:
* Values: list of flag identifiers
* Works like `default_flags` but applies only to dimensional regions
* default: `[]`
___

#### `default_region_priority`

```toml
default_region_priority = 10
```
Sets the priority assigned to newly created **Local Regions**.
Notes:
* Values: integer
* Only affects local/normal regions
* Dimensional regions do not use explicit priorities
* default: `10`
___

#### `default_region_priority_inc`

```toml
default_region_priority_inc = 5
```
Defines the step size used by the interactive CLI when increasing or decreasing a region's priority.
Notes:
* Range: `1`–`1000`
* Used only for QoL shortcuts in CLI priority management
* default: `5`
___

#### `cli_entries_per_page`

```toml
cli_entries_per_page = 5
```
Sets the number of entries per page in CLI output for flags, regions, children, players, teams, and more.
Notes:
* Range: `5`–`15`
* Affects all paginated CLI listings
* default: `5`
___

*### `dim_enable_new`

```toml
dim_enable_new = true
```
Determines whether newly created **Dimensional Regions** are enabled by default.
Notes:
* Values: `true` / `false`
* Controls activation state at creation time
* default: `true`

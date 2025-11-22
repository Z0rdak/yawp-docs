---
title: 'Logging configuration'
description: 'Logging configuration for insight and audit.'
sidebar_label: 'Logging'
sidebar_position: 5
sidebar_custom_props:
  customEmoji: 📝 ⚙️
---

# Logging config

#### `log_flag_check`

```toml
log_flag_check = false
```

Enables logging of each flag check performed by the mod.
Notes:
* Values: `true` or `false`
* Useful for debugging or auditing permission behavior
* default: `false`
___

#### `log_flag_result`

```toml
log_flag_result = false
```

Enables logging of the final result of each flag check.
Notes:
* Values: `true` or `false`
* Logs whether the check was allowed or denied
* default: `false`
___

#### `log_empty_results`

```toml
log_empty_results = false
```

Enables logging of flag checks that produced no responsible region.
Notes:
* Values: `true` or `false`
* Helps identify missing region definitions or unintended behavior
* default: `false`

___

#### `log_result_values`

```toml
log_result_values = ["Denied"]
```
Defines which flag result states should be logged.
Notes:
* Values: list of `"Allowed"` and/or `"Denied"`
* By default, only denied results are logged
* default: `["Denied"]`
___

#### `log_flag_categories`

```toml
log_flag_categories = ["player"]
```
Specifies which flag categories will be logged.
Notes:
* Valid categories: `player`, `block`, `entity`, `item`, `environment`, `protection`, `*`
* `*` logs all categories
* default: `["player"]`
___

#### `log_flags`

```toml
log_flags = ["break-blocks", "place-blocks"]
```
Specifies which specific flags should be logged.
Notes:
* Values: list of valid flag names
* Filters log output to only the listed flags
* default: `[]`
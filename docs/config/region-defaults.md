---
sidebar_position: 4
---
# Region default config

* `default_flags` - these are the default region flags for newly created Local Regions. Default is empty.

  * Example: `default_flags = ["break-blocks", "place-blocks"]`

* `dim_default_flags` - the same as `default_flags` just only for Dimensional Regions. Default is empty.

  * Example: `dim_default_flags = ["spawning-animal", "no-pvp", "no-flight"]`

* `default_region_priority` - this is the default region priority for newly created regions. This is only important for local, normal regions. Dimensional Regions do not have an explicit priority. Defaults to 10.

  * Example: `default_region_priority = 10`

* `default_region_priority_inc` - this is used for the interactive command line interface to manage local regions. It sets the step value for the QoL links for changing a region's priority. Range 1-1000, defaults to 5.

  * Example: `default_region_priority_inc = 5`

* `cli_entries_per_page` - Amount of pagination entries for CLI output of flags, region, children region, players, teams, etc. Range 5-15, defaults to 5.

  * Example: `cli_entries_per_page = 10`

* `dim_enable_new` - Decides whether newly created Dimensional Regions are enabled or disabled by default.

  * Example: `dim_enable_new = true`
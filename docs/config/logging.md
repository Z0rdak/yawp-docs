---
sidebar_position: 5
---

# Logging config

Description WIP

- `log_flag_check` = `false | true`: Enable logging of flag checks.

- `log_flag_result` = `false | true`: Enable logging of flag check results.
- `log_empty_results` = `false | true`: Enable logging of empty (without responsible region) flag check results.
- `log_result_values` = `["Denied"]`: List of flags result states which shall be logged. By default only denied results will be logged. lid FlagStates are: allowed and denied

- `log_flag_categories` = `["player"]`: List of flag categories which shall be logged. Valid categories are: player, block, entity, item, environment, protection and * (for all).
- `log_flags` = `["break-blocks", "place-blocks"]`: List of flags which shall be logged.
---
title: 'Feature config'
description: 'Enable/disable specific YAWP features'
sidebar_label: 'Features'
sidebar_position: 5
sidebar_custom_props:
  customEmoji: 🏳️ ⚙️
---

### `player_tracker`

```toml
player_tracker = false
```

Enable player position tracker. This is required for the region enter and leave messages for players, as well as the corresponding API events to be fired.

This can cause performance impact with a high amount of regions.
___

### `auto_create_new_level_data`

```toml
auto_create_new_level_data = true
```

Enables automatic creation of Dimensional Regions for new levels
___

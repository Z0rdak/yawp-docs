---
title: 'Flag config'
description: 'Configure specific flag properties'
sidebar_label: 'Flags'
sidebar_position: 3
sidebar_custom_props:
    customEmoji: 🏳️ ⚙️
---

#### `covered_block_entities`

```toml
covered_block_entities = ["minecraft:armor_stand", "minecraft:painting", "minecraft:item_frame", "minecraft:glow_item_frame", "minecraft:leash_knot"]
```
This setting controls block-entities, which can be placed and destroyed like a block, but are not automatically covered by the `break-blocks` and `place-blocks` flags (because they are technically not blocks).
Notes: 
- Entries for block-entities from mods must be fully specified. e.g. `"<mod>:<block-entity>"`
- by default this list includes: armor stands, paintings, leash knots and item frames
___

#### `remove_entities_for_spawning_flags`

```toml
remove_entities_for_spawning_flags = true
```
This setting controls whether entities will be removed inside the affected region when **adding** a spawning flag to a region. 
Notes: 
- Entities with the `{PersistenceRequired: 1b}` tag and named entities will not be removed.
- `true` to remove entities 
- `false` entities won't get removed
- default: `true`
___

#### `disabled_flags`

```toml
disabled_flags = []
```
This setting controls flags which are disabled for flag checks to reduce performance impact. 

Note: This is currently limited to the following flags: 
- `fluid_flow`
- `water_flow`
- `lava_flow`
___

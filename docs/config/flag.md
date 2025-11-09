---
sidebar_position: 3
---
# Flag config

* `covered_block_entities` - This is a list of block-entities, which can be placed and destroyed like a block, but are not automatically covered by the `break-blocks` and `place-blocks` flags. These list includes tile-entities like armor stands, paintings, leash knots and item frames by default.

    * Example: `covered_block_entities = ["minecraft:armor_stand", "minecraft:painting", "minecraft:item_frame", "minecraft:glow_item_frame", "minecraft:leash_knot"]`

* `covered_block_entity_tags` - This is used like the `covered_block_entities` config, but can be provided with tags. This is currently disabled.

    * Example: `covered_block_entity_tags = ["botania:floating_flowers", "botania:special_floating_flowers"]`

* `remove_entities_for_spawning_flags`- #Toggle to remove entities when adding spawning-* flags. Entities with the PersistenceRequired tag will not be removed.

    * Example: `remove_entities_for_spawning_flags = true`
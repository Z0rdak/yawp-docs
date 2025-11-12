---
title: 'Dimensional Regions'
description: 'Dimensional- or Level-Region, its the same.'
sidebar_label: 'Dimensional'
sidebar_position: 3
sidebar_custom_props:
    customEmoji: 🗾
---

## Overview 

Dimensional Regions are regions covering a whole dimension, or level in technical terms. 
In general, they work like Local Regions, but without an area definition.

![dim-info](../img/cli-region-dim-info.png)

(_You can show the info for a Dimensional Region by typing `/yawp dim <dim> info` e.g. `/yawp dim minecraft:overworld info`_)

As can be seen in the screenshot Dimensional Regions also have a parent region: [_The_ Global Region](global) shown as `yawp:global` here.

The entries after that show pagination lists of all Local Regions and the child regions of this Dimensional Region.

How and why do those list differ? Let's take a look at it with an example hierarchy.

![dim-info](../img/cli-region-dim-info-regions-and-childs.png)

When looking at the screenshot we can see, the Dimensional Region has two Local Regions defined in it:

- `spawn[*]`
- `welcome-zone`

But the `spawn` region has some indicator beside its name and `welcome-zone` does not. Why? 

The spawn region is a direct child of the Dimensional Region. The `welcome-zone` Local Region is not. 
But a Local Region always has a parent so which region is its parent? It's the `spawn` region.

![dim-info](../img/cli-region-local-info-hierarchy.png)

Local at the region info of the Local Region `spawn` does show us its child region `welcome-zone`. 
So the region hierarchy would look like (upwards): `welcome-zone` -> `spawn` -> `minecraft:overworld` -> `yawp:global`. 

This is important for flag inheritance and resolution (more on that in the [flag section](../flags/flag-inheritance)).

_Note_: Every Local Regions created in a dimension/level is automatically a child region to the Dimensional Region associated with the dimension.

The state section of Dimensional Regions has some extra quality of life options for Local Regions as seen in the screenshot below. 
You can disable/enable all Local Regions as well as mute their flag messages.

![dim-info](../img/cli-region-dim-info-state.png)

## Creation

Dimensional Regions **can't** be created manually. They are in fact automatically generated with each new dimension. 

The first Dimensional Region for the overworld is created when the server is created.
The following Dimensional Regions are created whenever a player travels to a new dimension, 
thus creating the new dimension with their respective Dimensional Region.

## Managing

Dimensional Regions can be managed only by their owners, or by players which have the
required [permission](../../config/permissions).

To manage Dimensional Regions, use the `/yawp dim <dim>` command. Where `<dim>` relates to the `ResourceLocation` of the dimension/level. 
E.g. for the overworld this would be `minecraft:overworld`, for the nether `minecraft:the_nether` and `minecraft:the_end` for the end dimension.
But any other dimension either added by a mod or a data pack should work the same way.

For more info about the Dimensional Region commands take a look at its [command page](../../commands/region/dimension-commands).


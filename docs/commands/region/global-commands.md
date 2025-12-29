---
title: 'Command Overview - Global Region'
description: 'Command overview to manage _the_ Global Region'
sidebar_label: 'Global Region'
sidebar_position: 4
sidebar_custom_props:
  customEmoji: 💻 🌍
---

# Global Region

The commands for the Global Region begin with `/yawp global ...`. All common region commands apply. 

In the future this section will contain commands to manage the dimensions managed by YAWP. 

## Level / Dimension commands

```
/yawp global track <level>
```
Tracks a specific level (dimension) and thus makes it possible to configure the Dimensional Region and create Local Regions in this level.

This is only needed if you have disabled the automatic creation of Dimensional Regions in the configuration - see: [feature config](../../config/features)

## State commands

```
/yawp global reset
```
Resets the global region to its default values.
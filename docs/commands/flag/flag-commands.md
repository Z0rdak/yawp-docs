---
sidebar_label: 'Flag commands'
sidebar_position: 1
---

# Flag commands

The flag command allows you advanced management of the flags of the regions. As with most commands, you don't have to type them manually. You can use the interactive CLI to navigate the flag list and change the flag settings.

* `/yawp flag local <dim> <local>` - Lists all flags of the region
* `/yawp flag local <dim> <local> <flag> state <Allowed|Denied|Disabled>` - set the state for a flag
  * `/yawp flag local <dim> <local> <flag> state Allowed` - allow action for a flag
  * `/yawp flag local <dim> <local> <flag> state Denied` - deny action for a flag
  * `/yawp flag local <dim> <local> <flag> state Disabled` - disable flag for flag checks
* `/yawp flag local <dim> <local> <flag> override <true|false>` - sets the flag to override the same flag in child
  regions
* `/yawp flag local <dim> <local> <flag> msg set <msg>` - set a new message for the flag. Check the wiki for a
  description of possible placeholders for messages.
* `/yawp flag local <dim> <local> <flag> msg clear` - Resets the flag msg to default
* `/yawp flag local <dim> <local> <flag> msg mute` - Disables the flag alert (message) when triggering the flag

The same commands of course work for Dimensional and the Global Regions:
* `/yawp flag dim ...` to manage flag properties for a Dimensional Region
* `/yawp flag global ...` to manage flag properties for the Global Region

# Advanced flag management

## Flag list
![flag-list](../img/cli-region-info-flags.png)

## Advanced flag management
![flag-info](../img/cli-flag-info.png)
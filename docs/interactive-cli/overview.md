---
sidebar_label: 'Interactive CLI'
sidebar_position: 1
---

## Interactive CLI

You can use the interactive links (indicated by the colored text) to get command suggestions, which are copied automatically in your chat or to run them directly with a single click.
Just hover over the links and read the hints to know what they are doing.

### Local Region CLI

![](img/cli-region-info-local.png)

### Dimensional Region CLI

![](img/cli-region-info-dim.png)

### Global Region CLI

![](img/cli-region-info-global.png)

## Language support

To make properly use of the interactive CLI, you'll need to have the language support installed.

This can be done in the following way:

- adding YAWP to your client (this is functional the same as using the resource pack)
- add the resource pack to your client
- provide the resource pack automatically to connecting clients (via the `server.properties` file)

The Resource Pack for language support (I18n) is currently only available at the [YAWP Discord](https://discord.gg/d7hArKCUtm) (pinned in the release and help channel).

## Pagination

To make managing large amounts of members/owners/etc easier, they are listed with pagination.

Use the arrows below the list to navigate the different pages.

![cli-pagination](img/cli-pagination.png)

## Undo actions

![cli-undo-action](img/cli-undo-action.png)

## Copy raw region info

For easier debugging, it is possible to click the orange highlighted text in the region info header.

This will copy the raw region info to your clipboard so it can be easily pasted in a file or pasted in a service like [pastebin](https://pastebin.com/).

Note: There is currently an issue with huge region data definitions, which overloads the minecraft network packet size.

![cli-undo-action](img/cli-copy-region-data.png)
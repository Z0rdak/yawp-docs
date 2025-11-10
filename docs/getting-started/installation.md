---
title: 'Installation'
description: 'Guide to set up YAWP for your server'
sidebar_label: 'Setting up YAWP'
sidebar_position: 1
sidebar_custom_props:
  customEmoji: 🛠
---

## Requirements

Although we try to limit dependencies, YAWP needs some additional library mods to run. Be sure to have them installed before starting your server with YAWP installed.

- [Forge Config API Port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric) YAWP uses FCAP for its configuration. You might need this dependency depending on your used version.
- [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) (Fabric only)


## Installation 

YAWP is a server-side mod. You will only need it on your server. 
Just put the mod file into your `mod` directory and you are ready to go.

Want to run YAWP in a singleplayer world via LAN? No problem, it works the same as using it on a dedicated server.

Additionally, you can install it on the client to gain some quality of life features.

Currently, those quality of life features include
- Customizable flag messages (technically also I18n by using resource packs)
- Internationalization (I18n) through resource packs

_More client side, but optional, features are planned._

## First start up

After the first startup of your server, YAWP will generate the configuration and some initial region files.

Take a look at the respective sections of the documentation for more detailed information.

- [Region files](../advanced/region-data)
- [Configuration files](../config/overview)


### TODO: move to cli/I18n section

Installing YAWP on your client provides you with language support (I18n). This is the same as using the resource pack provided in the [YAWP discord server](https://discord.gg/d7hArKCUtm).

You can, of course, also let your server provide it automatically when the clients are connecting (via the `server.properties` file).
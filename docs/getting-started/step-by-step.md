---
title: 'Step-By-Step Guide'
description: 'Step-By-Step guide on how to set up YAWP'
sidebar_label: 'Step-by-Step'
sidebar_position: 3
sidebar_custom_props:
   customEmoji: 🏃‍♂️‍➡️
---

## First start up

After the first startup of your server, YAWP will generate the configuration and some initial region files.

Take a look at the respective sections of the documentation for more detailed information.

- [Region files](../advanced/region-data)
- [Configuration files](../config/overview)

With the default configuration, as OP, you'll have the permission to use the commands and thus manage all regions. 

You might want to further configure permissions to fit your needs to get started using YAWP - see [CLI Permission Config](../config/permissions).

## Step-by-Step walkthrough

1. Disable the [vanilla spawn protection](https://minecraft.wiki/w/Spawn_protection)
2. Start the server so the config files are generated
3. Stop the server (sometimes the config is reloaded while editing, so it's best to stop the server)
4. Adjust the mod [configuration](../config/overview) as needed. 
5. Add the resource pack for language support ( **optional, but highly recommended**)
   1. available at the discord server
   2. or use the mod on the client as well
6. Start the server again
7. [Set up your regions](step-by-step#managing-your-regions) - have fun!

## Managing your regions

Before you start you want to be sure you have a grasp of the basic [concepts](../concepts/overview.md).

Hop on in your world and start playing around with the interactive command line interface (CLI). 
It's in reality just a fancy UI for the commands of the mod.

Try starting with the following command and explore/go from there.
```
/yawp global info
```

This command shows you the info of the Global Region for your server. You'll find more info on the interactive
CLI [here](../interactive-cli/overview).

Note that even OPs don't bypass flags by default, but there is a [config setting](../config/permissions) for this.

## Creating your first Local Region

Having Dimensional Regions is fine, but you sure want to create your own regions to protect your spawn, create a pvp arena and so on.

Take a look at the commands to getting started [creating Local Regions](../commands/region/local-commands#creating-a-local-region).

## Protecting your regions

After creating your regions, add Flags to it to protect the area from the flag specific actions.

Take a look at the [Flag list](../concepts/flags/flag-list) as reference.

If you have trouble with the flags not working, please first double-check the marked area and the active state of the region.
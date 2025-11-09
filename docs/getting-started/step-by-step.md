---
sidebar_label: 'Step-by-Step'
sidebar_position: 2
---

## Step-by-Step Walkthrough

When first starting your server with YAWP installed, it will create three config files in `<worldname>/serverconfig`. To have a better understanding what the config files do refer to the [config page](../config/overview).

You will want to configure the `yawp-common.toml` file to fit your needs to get started using YAWP. E.g. Configuring who is able to use the YAWP commands by setting up the OP level or adding players with their UUID.

**Specifically: Give yourself OP and adjust the `command_op_level` accordingly (your OP level >= `command_op_level`) OR add your UUID to `players_with_permission` config list. This allows you to manage ANY region. See: [CLI Permission Config](../config/permissions)**

Alternatively, you can just use the server console to set up your regions. With the server console, no permission from the config is needed. You can just add your player as owner to the Dimensional Regions. From now on, you are able to manage the Dimensional Regions with their Local Regions in-game with your player.

## **Notes:** 

- The `default_flags` set in the `yawp-region-defaults.toml` config file will be automatically applied to the dimensions when you start up your server the next time.

## Step-by-Step walkthrough

0. Disable the [vanilla spawn protection](https://minecraft.wiki/w/Spawn_protection)
1. Start the server so the config files are generated
2. Stop the server (sometimes the config is reloaded while editing, so it's best to stop the server)
3. Adjust the mod configuration as needed. The config files are in the `/serverconfig` or `/config` directory (depending on your version)
   1. `yawp-common.toml` for permissions
   2. `yawp-flags.toml` for tile entities, which should be covered by the `break-blocks` flag
   3. `yawp-region-defaults.toml` for default settings for newly created regions, like default flags and priority.
   4. `yawp-logging.toml` for logging settings regarding flag actions
4. Add the resource pack for language support ( **optional, but highly recommended** - not needed for versions YAWP 0.0.2.9-beta2 and MC 1.19.4 and above)
   1. available from the discord server, pinned in the [#release](https://discord.com/channels/1010986742905585759/1012025673822503003) channel
   2. or use the mod on the client as well
5. Start the server again
6. [Set up your regions](step-by-step#managing-your-regions) - have fun!

## Managing your regions

*Before you start you want to be sure to know the difference between [Dimensional](../concepts/regions/overview) and [Local Regions](../concepts/regions/overview).*

Hop on in your world and start playing around with the interactive command line interface (CLI). It's in reality just a
fancy UI for the commands of the mod.

Try starting with the following command and explore/go from there.
```
/wp global info
```

![](./img/cli-region-info-global.png)

This command shows you the info of the Global Region for your server. You'll find more info on the interactive
CLI [here](../interactive-cli/overview).

**Note**: Your base command may change based on the config to `/yawp`.

You'll need to have either, the permission from the config or be the owner of the region to manage it.

Note that even with the config permission, you'll not be able to bypass the regions flags. This is only possible as a member or owner of a region.

## Creating your first Local Region

Having Dimensional Regions is fine, but you sure want to create your own regions to protect your spawn, create a pvp arena and so on.

Take a look at the commands to getting started [creating Local Regions](../commands/region/local-commands#creating-a-local-region).

## Protecting your regions

After creating your regions, add Flags to it to protect the area from the flag specific actions.

Take a look at the [Flag list](../concepts/flags/flag-list) as reference.

If you have trouble with the flags not working, please first double-check the marked area and the active state of the region.
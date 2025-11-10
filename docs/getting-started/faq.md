---
title: FAQ
description: 'Frequently Asked Questions'
hide_table_of_contents: true
---

## Frequently Asked Questions

- **Q**: How do I use this mod? Where do I start?
- **A**: Take a look at the [Getting Started](../getting-started/installation) page of the wiki.

If you still have questions or problems the wiki can't answer (please try first - I've created it for a reason), don't hesitate to visit our [discord](https://discord.gg/d7hArKCUtm) server to ask for help.

***

- **Q**: Do I need to install this mod on my client as well?
- **A**: No. YAWP only needs to be added to your server! A client side installation does provide a Resource Pack with language keys and maybe more later down the road..

***

- **Q**: The config is not created/Where can I find the config?
- **A**: It is a server-side config. Take a look in your `<world>/server` directory. Note that when using fabric this location might also be `<world>/`

***

- **Q**: Can you implement a flag for \<your feature here\>?
- **A**: Maybe. Take a look at the already listed [Flag Suggestions](https://github.com/Z0rdak/Yet-Another-World-Protector/issues/66) at the Issue-Tracker. If you don't find your flag there, consider adding it or visit our discord and propose a suggestion.

***

- **Q**: Why can't I use the commands provided by YAWP?
- **A**: Make sure you have the required OP level or your UUID set in the configuration.

***

***
- **Q**: My configuration seems to reset itself? WHY?!?!?
- **A**: Make sure you save the file properly **and** close it. The configuration should be reloaded automatically.

Note: You can also disable the region config in the configuration for the ForgeConfigApiMod.


**Note**: If you have trouble getting the configuration to take effect, try using `/reload`. If the config values still reset, you may want to try to shut down the server, change the configuration and restart the server afterward. If the configuration keeps resetting, this may because it is formatted incorrectly.

Feel free to reach out to me at our [Discord](https://discord.gg/d7hArKCUtm) server for help.

***
- **Q**: Can I use YAWP in my single player (Open to LAN) World?
- **A**: ~~No, YAWP is designed to be used on dedicated servers, sorry.~~ Yes indeed, since 0.0.4.0-beta1, YAWP can be used in single player worlds as well.

***

- **Q**: Can I exclude blocks/entities/items from flags?
- **A**: Not yet! I am working on that feature for the next update!

***

- **Q**: Will there be a back-port of YAWP for Fabric 1.16.5?
- **A**: No, sorry. But If you want to contribute by porting the mod back to 1.16.5, you have my full support to do so.

### Region related questions

* [How do I create a region?](../commands/region/local-commands#creating-a-local-region)
* [How do I delete a region](../commands/region/local-commands#deleting-a-local-region): `/yawp dim <dim> delete <regionname> [-y]`
* [Can I _give_ a player a region for themselves to manage?](../concepts/regions/overview)

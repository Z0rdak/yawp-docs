---
sidebar_label: 'Programming API'
sidebar_position: 1
---
# YAWP API

The YAWP API is a way to interact with the mod and its features. It is designed to be used by other mods to interact with the regions and flags of YAWP.

The API is still in development and will be expanded over time. If you have any suggestions or ideas for the API, feel free to open an issue on [GitHub](https://github.com/Z0rdak/Yet-Another-World-Protector/issues) or share your idea in the **#suggestions** channel on [Discord](https://discord.com/invite/d7hArKCUtm).

# Dependencies

Currently, YAWP uses cursemaven. To use the YAWP API, add the following snippet to your build.gradle
```groovy
repositories {
    maven {
        url "https://cursemaven.com"
    }
}

// Note: The cursemaven site explains how to select a specific file: https://www.cursemaven.com/
// The format is "curse.maven:yawp-663276:<fileId>"
dependencies {    
    //Fabric    
    modImplementation "curse.maven:yawp-663276:6176022"
    
    //Forge
    implementation fg.deobf("curse.maven:yawp-663276:6117986")
    
    //NeoForge
    implementation "curse.maven:yawp-663276:6176016"
}
```

# Example Project

Many methods are documented in the interfaces, but if not or if you have questions please visit the discord and ask away. :-)

**Note: An example project using the YAWP API will be released soon.**
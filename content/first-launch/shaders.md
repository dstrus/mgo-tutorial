+++
title = 'Community Shaders'
weight = 10
+++

_Shaders_ are programs that run while drawing the game's graphics to the screen (or screens, in VR). Mad God's Overhaul uses Community Shaders (specifically, {{< nexus 166950 >}}Community Shaders (Unofficial Fork){{< /nexus >}}), a plugin with advanced graphical features that vanilla Skyrim does not support. This is what makes MGO's dramatic visuals possible.

Community Shaders (CS) keeps its own cache of pre-compiled shaders on disk to speed up the game's startup time... except for the very first time you run it.

{{< aside type="btw" title="Remember..." >}}
To run the game from Mod Organizer 2, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /aside >}}

When you launch MGO for the first time after installation (or after certain actions, like clearing your {{< file folder-open >}}Overwrite{{< /file >}} folder or otherwise invalidating the cache), Community Shaders will begin compiling. Even on a high-end PC, this can take several minutes. If you can see the Skyrim VR window on your desktop, you should see a progress bar. If you're in VR mode, you may just see a black screen.

{{< caption name="cs-compiling" type="webp" >}}
While the game is compiling shaders, you can see the progress in the Skyrim VR window on the desktop.
{{< /caption >}}

At this point, or at any time when Skyrim VR is running, you can press <kbd>END</kbd> on the keyboard (physical or virtual) to open the CS settings panel.

{{< caption name="cs-overlay" type="webp" >}}
Press <kbd>END</kbd> on your keyboard to open the CS overlay.
{{< /caption >}}
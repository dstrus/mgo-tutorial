+++
title = 'Community Shaders'
weight = 10
+++

_Shaders_ are programs that run while drawing the game's graphics to the screen (or screens, in VR). Mad God's Overhaul uses Community Shaders (specifically, {{< nexus 166950 >}}Community Shaders (Unofficial Fork){{< /nexus >}}), a plugin with advanced graphical features that vanilla Skyrim does not support. This is what makes MGO's dramatic visuals possible.

Community Shaders (CS) keeps its own cache of pre-compiled shaders on disk to speed up the game's startup time... except for the very first time you run it.

{{< aside type="btw" title="Remember..." >}}
To run the game from Mod Organizer 2, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /aside >}}

When you launch MGO for the first time after installation (or after certain actions, like clearing your {{< file folder-open >}}Overwrite{{< /file >}} folder or otherwise invalidating the cache), Community Shaders will begin compiling. If you can see the Skyrim VR window on your desktop, you should see a progress bar. (If you're in VR mode and you're using [Open Composite](/appendices/open-composite/), you'll just see a black screen.)

{{< caption name="cs-compiling" type="webp" >}}
While the game is compiling shaders, you can see the progress in the Skyrim VR window on the desktop.
{{< /caption >}}

Compiling shaders can take anywhere from 5 minutes on a high-end PC to almost 30 minutes. If the progress bar isn't moving, and it's been 30 minutes, something may be wrong.

{{< aside type="btw" title="Keep Moving" >}}
You may need to keep your headset awake and active while CS is compiling shaders. Personally, I switch to desktop view in my headset and keep myself busy with other tasks* using my physical mouse and keyboard. That seems to be good enough.

\*That would be a great time to browse this documentation!
{{< /aside >}}

During compilation, or at any time when Skyrim VR is running, you can press <kbd>END</kbd> on the keyboard (physical or virtual) to open the CS settings panel. As with the progress bar, this will only appear in the desktop window if you're using Open Composite.

{{< caption name="cs-overlay" type="webp" >}}
Press <kbd>END</kbd> on your keyboard to open the CS overlay.
{{< /caption >}}

You can make a huge variety of adjustments from this settings overlay, but the defaults represent a reasonable balance between image quality and performance for most players. Feel free to read documentation, Nexus posts, Discord posts, etc. and tweak to your heart's content. Fair warning though: With everything cranked up, CS can make even the mightiest machine howl in pain (figuratively speaking).

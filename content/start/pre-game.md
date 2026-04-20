+++
title = 'Pre-Game (MO2)'
weight = 30
+++

Now that you have Mad God's Overhaul downloaded and installed, you can manage the installed list and launch the game via **Mod Organizer 2 (MO2)**.

If you've created a shortcut, use that to launch MO2. If not, find {{< file >}}ModOrganizer.exe{{< /file>}} in your MGO installation folder, and launch it from there.

MO2 takes a little while to start. Even the splash screen may not appear right away. Resist the temptation to launch it again. Just wait.

## Quick Start

{{< caption name="mo2-run" type="webp" >}}
To play, click the <span class="btn-inline"><i class="fa fa-play"></i> Run</span> button near the upper-right, with <span class="btn-inline">Launch MGO - Do Not Unlock</span> selected in the nearby dropdown.
{{< /caption >}}

When MO2 has finished loading, you can launch the game with the {{< btn-inline play >}}Run{{< /btn-inline >}} button near the upper-right, with {{< btn-inline >}}Launch MGO - Do Not Unlock{{< /btn-inline >}} selected in the nearby dropdown. You should always launch MGO this way. Don't just run Skyrim VR from Steam. That will launch the vanilla (unmodded) game. To play MGO, you need to run it from MO2.



{{< aside type="btw" title="Skip to the game" >}}
You can use the <span class="btn-inline"><i class="fa-solid fa-share"></i> Shortcut</span> dropdown to add a shortcut directly to launching the game, eliminating the need to run MO2 first.
{{< /aside >}}

Before jumping into Tamriel, you might want to take a quick look around MO2.

{{< aside type="btw" title="Mods & Plugins" >}}
Mod Organizer 2's interface is basically split in two: **mods** on the left, **plugins** on the right.

The left pane is the mod list. In MGO, mods are collected in folders. You can expand each folder by clicking the arrow to the left of each one.

Within the folders are the actual mods. Most of them are packaged mods that you can download from Nexusmods or somewhere similar. Others are specific to MGO. If the box is checked, that mod is enabled. If it's unchecked, the mod is disabled, and will not be included when you run the game.

Many, but not all, of the mods listed in the left pane have corresponding plugins on the right. We'll get into what makes plugins special in a later section. MGO is pre-configured so that you never need to worry about it unless you want to start fiddling with the list yourself.
{{< /aside >}}

## Before you play...

You don't need to know everything there is to know about MO2 before playing for the first time. MGO is pre-configured with sensible default, but it's worth taking a moment to do some initial configuration. Synergy Team has made it pretty straightforward.

Scroll down the mod list until you see a folder labeled {{< btn-inline folder >}}START HERE - Expand for Setup{{< /btn-inline >}}. As the label suggests, there is where you should start.

<div class="separator blue">
  <i class="fa fa-folder"></i> ▸ START HERE - Expand for Setup
</div>

If you open the **START HERE** folder, you'll see subfolders labeled **STEP 1**, **STEP 2**, etc.

---
<div class="separator sub blue1">
  <i class="fa fa-folder"></i> ▸▸ STEP 1 - Startup Notes - PLEASE READ BEFORE REPORTING ISSUES
</div>

**STEP 1** doesn't include any actual mods, but rather reminds you of some of MGO's [requirements](/start/requirements) along with some important notes for using MO2 and running the game.

* <span class="highlight">DO NOT Click Unlock</span> - When you run the game, MO2's interface will lock to keep you from accidentally messing with it while the game is running. The dialog box that opens will include an {{< btn-inline >}}Unlock{{< /btn-inline >}} button. This entry in the list is to remind you _not_ to click that button.
* <span class="highlight">DO NOT Use Auto Save or Quick Save</span> - Auto Save and Quick Save are handy features in Skyrim (flat and VR alike), but the save files they produce are not as complete as those created by full saves, and some players have reported issues loading them. A bad save can result in hours of progress lost. For safety, use full saves. As we'll discuss later, you can add a save shortcut to Spell Wheel VR to make this more convenient.
* <span class="highlight">DO NOT Use Loot Sort on Plugins</span> - LOOT is a tool that automatically sorts plugins (the files listed on the right side of MO2) to be loaded in an order that's better optimized than if you just added them without much thought. **The plugins in Mad God's Overhaul have already been carefully sorted by hand.** You shouldn't mess with that order.

---
<div class="separator sub blue2">
  <i class="fa fa-folder"></i> ▸▸ STEP 2 - Enable to Use Open Composite (Replaces Steam VR)
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly"> Open Composite XR - (Incompatible with VR Performance Kit)
</div>
<div class="mod sub">
  <input type="checkbox" class="readonly" checked> OC Unleashed - (Incompatible with Controller Bindings & Upscalers)
</div>

**STEP 2** includes two mods to choose from if you want to use **Open Composite**. Choose one or the other—not both—or disable both mods in this section to use the Steam VR runtime.

If you have a headset designed specifically for Steam VR—_e.g._ Valve Index, Bigscreen Beyond, HTC Vive Pro, Varjo VR-3—you don't need Open Composite.

If you have a headset that doesn't use Steam base stations (aka lighthouse tracking)—_e.g._ Meta Quest series, PICO series, Vive XR Elite—then you may benefit from Open Composite. [Read more about Open Composite and Open Composite Unleashed.](/appendices/open-composite)
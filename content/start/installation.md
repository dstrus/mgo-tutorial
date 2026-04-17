+++
title = 'Installation'
weight = 2
+++

To install Mad God’s Overhaul, you’ll need Wabbajack, a tool designed for the express purpose of installing big mod lists. (The fact that it’s named after a Daedric artifact created by the mad god himself is just a bonus.)

## Download Wabbajack

Download {{< file window-maximize >}}Wabbajack.exe{{< /file >}} via the big colorful {{< btn-inline download >}}Download Now{{< /btn-inline >}} link on [wabbajack.org](http://wabbajack.org). The initial download is a single Windows executable file.

{{< caption name="wabbajack-web" type="png" icon="quest-marker" >}}
Click **Download Now** on [wabbajack.org](https://wabbajack.org).
{{< /caption >}}

{{< aside type="btw" title="By the way..." >}}
The [Documentation](https://wiki.wabbajack.org/) link leads to a wiki with all you could ever want to know about how to use Wabbajack.

There’s also a link to the Wabbajack Discord.

You can also browse or search through  mod lists in the [Gallery](https://www.wabbajack.org/gallery). These are lists that can be installed directly from Wabbajack without the need to download the list itself first. On the web site, you can read detailed descriptions of these lists, find links to each list’s Discord if there is one, and even browse or search through every archive included in each list. Mad God’s Overhaul is often listed in Wabbajack's gallery, but it is not at the moment.
{{< /aside >}}

## Install Wabbajack

Once you’ve downloaded the executable, you will need to move it outside of your {{< file folder-open >}}Downloads{{< /file >}} folder before running it. If you're not sure where to put it, {{< file folder-open >}}C:\Wabbajack{{< /file >}} is fine. If you've installed it previously, you can overwrite your older version with the one you just downloaded.

## Sign in to Nexusmods within Wabbajack

{{< caption name="wj-home" type="png" icon="quest-marker" >}}
Go straight to **Settings** when you launch Wabbajack.
{{< /caption >}}

Launch the app, and it will download the latest version if necessary, and then we can start using it. There’s a great big **Get Started** button, but before you click that, go to {{< btn-inline gear >}}Settings{{< /btn-inline >}} and sign into Nexusmods, even if you don’t have a premium subscription. Without being signed in, the automated requests will get you temporarily blocked over and over.

{{< caption name="wj-settings" type="png" icon="quest-marker" >}}
Sign in to [Nexusmods](https://nexusmods.com), even if you only have a free account.
{{< /caption >}}

{{< aside type="btw" title="By the way..." >}}
With that done, you can click {{< btn-inline cloud-arrow-down >}}Browse Lists{{< /btn-inline >}}. This is where you’d find MGO if it were listed. At the moment, it isn’t, so we’ll download it directly from Nexusmods instead.
{{< /aside >}}


## Download the list from Nexusmods

The {{< file >}}.wabbajack{{< /file>}} lists for [MGO NSFW (not safe for work)](https://www.nexusmods.com/skyrimspecialedition/mods/107333) and [MGO SFW (safe for work) (SFW)](https://www.nexusmods.com/skyrimspecialedition/mods/107780) are both available for download on Nexusmods. Open the Nexus page for the version of your choice, and click the {{< btn-inline download >}}Browse Lists{{< /btn-inline >}} download button near the upper-right.

This is just the Wabbajack list that you’re downloading, without any of the actual mod content, and even that's over 2 GB compressed. It is a 7-zip archive, and you’ll need to unpack it before using it, so first install [7-zip](https://www.7-zip.org/) if you don’t already have it.


## Install Mad God's Overhaul

Once we’ve unzipped the list, we can return to Wabbajack. On the screen where you can browse the available lists, click {{< btn-inline download >}}Install From Disk{{< /btn-inline >}} instead. Find the uncompressed {{< file >}}.wabbajack{{< /file>}} file, and open it.

Before beginning the installation process, you may want to set the installation folder and the downloads folder for MGO. By default, the downloads folder is inside the installation folder. You may prefer to have it elsewhere for a couple of reasons. First, the downloads folder takes up a lot of additional space, so you can free up space on your primary SSD by moving it to another disk. Second, if you install other modlists for Skyrim VR, you can reuse the downloads folder, and if the other list includes the same versions of some of the same mods, you won’t have to download them a second time.

{{< aside type="btw" title="By the way..." >}}
You don’t strictly _need_ to keep the downloads once the game is installed. It’s nice to have them in case you mess up your list and need to reinstall it, or if you want to install another version of the list later. Not every mod will require an update, so you can avoid having to redownload some of them.

But if you don’t have the luxury of lots of storage space, you are free to delete the downloads once the list is properly installed. I do highly recommend waiting until you’ve successfully launched the modded game at least once before deleting the downloads.
{{< /aside >}}

With your folders set, it’s time to install.

Installation will take a long time, even with a premium Nexus account (and even if you have all of the mods already downloaded). Just installing them from disk takes quite a while.

## If installation fails...
If installation fails, there's a decent chance that you can just try again. Doing so will not redownload anything that you’ve already downloaded.

If there’s an error about a missing master file, that means there’s something wrong with your Skyrim VR installation, like the wrong version, or a file that’s missing or altered in some way. If you changed some files on purpose, you can always copy them somewhere before repairing your installation, but you will need the original, unaltered game files from Steam to use MGO. No, you cannot use a pirated copy.

To repair the game files, find Skyrim VR in Steam, click the <i class="fa fa-gear"></i> cog icon, and choose {{< btn-inline >}}Properties...{{< /btn-inline >}}. Choose {{< btn-inline >}}Installed Files{{< /btn-inline >}} from the left, and click {{< btn-inline >}}Verify integrity of game files{{< /btn-inline >}}. That ought to get your installation back in shape. Once you’re finished, you can retry installation from Wabbajack.

{{< aside type="alert" title="If you're still having trouble..." >}}

Double-check the requirements.

**If you can't download...**
* Be sure you have a legal copy of Skyrim VR
* Move Skyrim VR out of <span class="file"><i class="fa fa-folder-open"></i> C:\Program Files</span>
* Set game to English
* Run Steam file validation
* Log into Nexus in Wabbajack settings

**You must also...**
* Have 32GB system memory
* Use an internal SSD
* Download and install the latest [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
* Download and install the latest [.NET x64 run-time](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.11-windows-x64-installer)
* Increase minimum virtual memory to 40GB or more ([screenshot](https://imgur.com/a/virtual-memory-DttXXhK)) 
* Set shader cache to 10GB or more in Nvidia control panel (**TODO:** screenshot needed)
{{< /aside >}}

Once the installation process has finished—which, again, will be awhile—Wabbajack will give you the option of opening the installation folder in <span class="file"><i class="fa fa-folder-tree"></i> File Explorer</span> or creating a shortcut.

{{< aside type="btw" title="By the way..." >}}
The shortcut that Wabbajack creates cannot be directly pinned to the Start Menu, so I recommend manually creating a shortcut for <span class="file">ModOrganizer.exe</span> and pinning that. You can easily rename the shortcut and assign it a different icon.
{{< /aside >}}

+++
title = 'Installation'
weight = 2
+++

To install Mad God’s Overhaul, you’ll need Wabbajack, a tool designed for the express purpose of installing big mod lists. (The fact that it’s named after a Daedric artifact created by the mad god himself is just a bonus.)

## Download Wabbajack

Download <span class="file"><i class="fa fa-window-maximize"></i> Wabbajack.exe</span> via the big colorful <span class="btn-inline"><i class="fa fa-download"></i> Download Now</span> link on [wabbajack.org](http://wabbajack.org). The initial download is a single Windows executable file.

{{< caption name="wabbajack-web" type="png" icon="quest-marker" >}}
Click **Download Now** on [wabbajack.org](https://wabbajack.org).
{{< /caption >}}

{{< aside type="info" title="By the way..." >}}
The [Documentation](https://wiki.wabbajack.org/) link leads to a wiki with all you could ever want to know about how to use Wabbajack.

There’s also a link to the Wabbajack Discord.

You can also browse or search through  mod lists in the [Gallery](https://www.wabbajack.org/gallery). These are lists that can be installed directly from Wabbajack without the need to download the list itself first. On the web site, you can read detailed descriptions of these lists, find links to each list’s Discord if there is one, and even browse or search through every archive included in each list. Mad God’s Overhaul is often listed in Wabbajack's gallery, but it is not at the moment.
{{< /aside >}}

## Install Wabbajack

Once you’ve downloaded the executable, you will need to move it outside of your <span class="file"><i class="fa fa-folder-open"></i> Downloads</span> folder before running it. If you're not sure where to put it, <span class="file"><i class="fa fa-folder-open"></i> C:\Wabbajack</span> is fine. If you've installed it previously, you can overwrite your older version with the one you just downloaded.

## Sign in to Nexusmods within Wabbajack

{{< caption name="wj-home" type="png" icon="quest-marker" >}}
Go straight to **Settings** when you launch Wabbajack.
{{< /caption >}}

Launch the app, and it will download the latest version if necessary, and then we can start using it. There’s a great big Get Started button, but before you click that, go to <span class="btn-inline"><i class="fa fa-gear"></i> Settings</span> and sign into Nexusmods, even if you don’t have a premium subscription. Without being signed in, the automated requests will get you temporarily blocked over and over.

{{< caption name="wj-settings" type="png" icon="quest-marker" >}}
Sign in to [Nexusmods](https://nexusmods.com), even if you only have a free account.
{{< /caption >}}

{{< aside type="info" title="By the way..." >}}
With that done, you can click <i class="fa fa-cloud-arrow-down"></i> **Browse Lists**. This is where you’d find MGO if it were listed. At the moment, it isn’t, so we’ll download it directly from Nexusmods instead.
{{< /aside >}}


## Download the list from Nexusmods

The <span class="file">.wabbajack</span> lists for [MGO NSFW (not safe for work)](https://www.nexusmods.com/skyrimspecialedition/mods/107333) and [MGO SFW (safe for work) (SFW)](https://www.nexusmods.com/skyrimspecialedition/mods/107780) are both available for download on Nexusmods. Open the Nexus page for the version of your choice, and click the <span class="btn-inline"><i class="fa fa-download"></i> Manual</span> download button near the upper-right.

This is just the Wabbajack list that you’re downloading, without any of the actual mod content, and even that's over 2 GB compressed. It is a 7-zip archive, and you’ll need to unpack it before using it, so first install [7-zip](https://www.7-zip.org/) if you don’t already have it.

## Double-check the requirements

While you're on Nexusmods, this is a good time to double-check that all of [MGO's requirements are in place](https://www.nexusmods.com/skyrimspecialedition/articles/6779).

{{< aside type="info" title="Requirements" >}}

**If you can't download...**
* Set game to English
* Run Steam file validation
* Relog into Nexus in Wabbajack software

**You must also...**
* Have 32GB system memory
* Use an internal SSD
* Have a legit copy of Skyrim VR from Steam. **Pirated copies will not work.**
* Download and install the latest [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
* Download and install the latest [.NET x64 run-time](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.11-windows-x64-installer)
* Increase minimum virtual memory to 40GB or more ([screenshot](https://imgur.com/a/virtual-memory-DttXXhK)) 
* Set shader cache to 10GB or more in Nvidia control panel (**TODO:** screenshot needed)
* Move Skyrim out of C:\Program File folder to avoid issues with Antivirus and Defender (**TODO:** updated instructions)
{{< /aside >}}

## Install Mad God's Overhaul

Once we’ve unzipped the list, we can return to Wabbajack. On the screen where you can browse the available lists, click `Install From Disk` instead. Find the uncompressed `.wabbajack` file, and open it.

Before beginning the installation process, you may want to set the installation folder and the downloads folder for MGO. By default, the downloads folder is inside the installation folder. I prefer to have it elsewhere for a couple of reasons. First, the downloads folder takes up a lot of additional space, so I like to keep it on a separate, large, inexpensive, spinning hard disk drive—not the fancy solid state drive that I use for installation. Second, if I install other modlists for Skyrim VR, I can reuse the downloads folder, and if the other list includes the same versions of some of the same mods, I won’t have to download them a second time.

You don’t strictly _need_ to keep the downloads once the game is installed. It’s nice to have them in case you mess up your list and need to reinstall it, or if you want to install another version of the list later. Not every mod will require an update, so you can once again avoid having to redownload some of them. But if you don’t have the luxury of lots of storage space, you are free to delete the downloads once the list is properly installed. I do highly recommend waiting until you’ve successfully launched the modded game at least once before deleting the downloads.

With your folders set, it’s time to install.

Installation will take a long time, even with a premium Nexus account (and even if you have all of the mods already downloaded). Just installing them from disk takes quite a while.

If installation fails, there's a decent chance that you can just try again. Doing so will not redownload anything that you’ve already downloaded.

If there’s an error about a missing master file, that means there’s something wrong with your Skyrim VR installation, like the wrong version, or a file that’s missing or altered in some way. If you changed some files on purpose, you can always copy them somewhere before repairing your installation, but you will need the original, unaltered game files from Steam to use MGO. No, you cannot use a pirated copy.

To repair the game files, find Skyrim VR in Steam, click the ⚙️ cog icon, and choose `Properties...`. Choose `Installed Files` from the left, and click `Verify integrity of game files`. That ought to get your installation back in shape. Once you’re finished, you can retry installation from Wabbajack.

Once the installation process has finished—which, again, will be awhile, Wabbajack will give you the option of opening the installation folder in File Explorer or creating a shortcut. The shortcut that it creates cannot be directly pinned to the Start Menu, so I recommend creating your own shortcut. I also like to assign a custom icon for the shortcut. I’ll walk you through how I do that, and I'll give you an overview of Mod Organizer 2.

## Resources

Want to know more about Wabbajack? Check out the [official wiki](https://wiki.wabbajack.org/).
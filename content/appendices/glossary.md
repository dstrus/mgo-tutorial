+++
title = 'Glossary'
weight = 94
+++

## Skyrim

| Term | Definition |
| ---- | ---------- |
| Vanilla | Skyrim VR as Bethesda shipped it, without mods. |
| Flatrim | Any non-VR edition of Skyrim, including Special Edition/Anniversary Edition. |
|Journal Menu | The collection of menus containing _Quests_, _General Stats_, and _System_ tabs. |
| Tween Menu | The menu containing _Skills_/_Level Up_, _Items_, _Map_, and _Magic_. |

## Modding and VR

| Term | Definition |
| ---- | ---------- |
| MGO | Mad God's Overhaul, a mod list for Skyrim VR. |
| Wabbajack | An app for downloading and installing mod lists. The recipes for such lists are contained in files with a `.wabbajack` extension and are often informally referred to as _wabbajacks_ themselves. |
| MO2 | Mod Organizer 2, an app for managing a collection of mods. MGO is managed and launched in MO2. |
| Nexus | [Nexusmods.com](https://www.nexusmods.com/), a web site that hosts mods for numerous games, including Skyrim. |
| VD | Virtual Desktop, paid software for wirelessly connecting certain headsets (Quest, Pico, etc.) to a PC, including support for playing PCVR games. It requires a (free) streaming app on the PC, paired with a (paid) app on the HMD. Free alternatives include Meta Link, Steam Link, and ALVR. |
| HMD | Head-Mounted Display, a more precise term for a VR headset. |
| PCVR Games | VR games running on a PC with a connected (wired or wireless) headset, as opposed to games running natively on a standalone headset with no PC involved. |
| VR Runtime | The software translation layer between the game and your VR hardware. Examples include OpenXR (including specific implementations like VDXR and PimaxXR) and SteamVR / OpenVR. |
| OpenXR | |
| SteamVR | |

## Graphics and Performance

| Term | Definition |
| ---- | ---------- |
| ASW | Asynchronous SpaceWarp, a motion-smoothing technique for generating artificial intermediate frames between actual frames, giving the effect of double the actual frame rate. For Skyrim VR, ASW runs on the PC's GPU and is an option provided by the [Open Composite Unleashed mod](/appendices/open-composite/) and by Meta's PCVR software. May have fewer visual side effects than SSW. Do not enable ASW and SSW at the same time. |
| SSW | Synchronous SpaceWarp, a motion-smoothing technique for generating artificial intermediate frames between actual frames, giving the effect of double the actual frame rate. SSW runs on the VR headset itself and is an option provided by the Virtual Desktop streaming software. Do not enable ASW and SSW at the same time. |
| DLSS | Deep Learning Super Sampling, an NVIDIA upscaling technology (available only on NVIDIA GPUs) for improving performance while maintaining high image quality. |
| FSR | FidelityFX Super Resolution, a GPU-agnostic upscaling technology developed by AMD for improving performance while maintaining high image quality. |
| DLAA | Deep Learning Anti-Aliasing, NVIDIA's anti-aliasing technology, exclusive to NVIDIA GPUs, used to improve image quality by reducing jagged edges and shimmering, with fewer visual side effects than TAA, but at a much heavier GPU cost. |
| TAA | Temporal Anti-Aliasing, a GPU-agnostic, highly performant technique used to reduce jagged edges and shimmering. It can introduce ghosting/smearing, which can be offset somewhat by image sharpening technologies like CAS. |
| CAS | Contrast Adaptive Sharpening, a GPU-agnostic image-sharpening technique developed by AMD. It is often used to counteract the softness introduced by TAA, and is built into the FSR process. |
| OCU | Open Composite Unleashed, a mod for Skyrim VR that allows the use of OpenXR-based runtimes directly, bypassing the overhead of SteamVR. It also includes an onscreen VR keyboard and a configuration desktop app with controller mapping options and numerous features for improving performance. |
| CS | Community Shaders, a plugin with advanced graphical features that vanilla Skyrim does not support. MGO uses Troned's [unofficial fork of Community Shaders](https://www.nexusmods.com/skyrimspecialedition/mods/166950) that has far better VR support than the official project, and that plays nicely with OCU. |
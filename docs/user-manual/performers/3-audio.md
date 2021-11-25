---
Title: Audio Hardware & Control
sidebar_position: 3
---

# Audio Hardware & Control

The XIMI Child Node is built on the Raspberry Pi 4 single-board computer. In general, here are the kinds of audio hardware supported:

1. For **audio output**, there is an on-board 3.5mm audio jack that can be connected to normal earphones.
1. **Bluetooth audio** works for **output only** due to the Raspberry Pi platform. Refer to [Bluetooth audio](#bluetooth-audio) below.
1. For **audio input**, the best way to do so is to connect a **USB sound card**. Refer to [USB Sound card](#usb-sound-card) below.
1. Alternatively, for **audio input**, connect USB audio accessories (e.g. headphones with headset, USB microphone). Most devices, provided they are class-compliant, should work without requiring any software or driver installation.

---

## USB sound card

The most straightforward solution to get audio input working is to plug in a USB sound card that outputs to the audio jack of your choice, e.g. 1/8" TRS, 1/4" TRS. Here are some examples of such USB sound cards:

1. [Creative Sound Blaster Play 3](https://my.creative.com/p/sound-cards/sound-blaster-play-3#buy-menu)
1. [UGREEN USB Sound Card](https://www.amazon.com/UGREEN-External-Headphone-Microphone-Desktops/dp/B016CU2PEU/ref=sr_1_2_sspa?keywords=ugreen%2Bsound%2Bcard&qid=1637833947&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1MTc1Sk83WURZTjImZW5jcnlwdGVkSWQ9QTA4MTg4NTkzT0JGQ0s5RzdJTzlPJmVuY3J5cHRlZEFkSWQ9QTA4NDUyMTk4TFY1VDJJQkwxMlAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1)

![USB Sound card](/img/new-user-manual/child/15-audio.jpg)
![Combo sound card](/img/new-user-manual/child/16-audio.jpg)

### Distinction between TRS and TRRS

![TRS vs TRRS](/img/new-user-manual/trs-trrs.jpg)

It is important to note that for different 3.5mm audio cables, there are different specifications. Observe whether the jack has 3 rings (TRRS) or (TRS).

|                       | TRS                                                                                                                                   | TRRS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| form                  | 2 black bands (1 ring)                                                                                                                | 3 black bands (2 rings)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| function              | stereo out only/ stereo in only                                                                                                       | stereo out + mono mic in                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| typical device        | dedicated earphones, dedicated microphone                                                                                             | earphones or headset with microphone function                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| USB sound card needed | Split into dedicated audio in/out channels. [Example sound card](https://my.creative.com/p/sound-cards/sound-blaster-play-3#buy-menu) | One jack with "combo"/"2-in-1" function, [example sound card](https://www.amazon.com/UGREEN-External-Adapter-Aluminum-Desktops/dp/B087T5H3MQ/ref=sr_1_1_sspa?crid=3HNTPAZCHCFQ7&keywords=ugreen+sound+card+usb&qid=1637834043&sprefix=ugreen+sound+card%2Caps%2C423&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNVlWQjNYSVhNR0wxJmVuY3J5cHRlZElkPUExMDM3Njc2MVFHMlRCSVZOS0ZFUSZlbmNyeXB0ZWRBZElkPUEwMTcyNjY1MUFXUTNVTkdKSTVBSiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=) |

---

## Setting active audio device

You can use multiple audio devices simultaneously. E.g. a USB microphone for **input**, together with a pair of earphones connected to the on-board 3.5mm jack for **output**.

You will need a mouse connected to the XIMI Child Node for this operation.

After your hardware is connected, **right-click** on the speaker icon on the top right of the screen. You will be able to select connected devices for **Audio Output** and **Audio Input** separately.

![Audio Output](/img/new-user-manual/child-raspi/29-audiodetection.png)

![Audio Input](/img/new-user-manual/child-raspi/30-audiodetection.png)

---

## Bluetooth Audio

To get your Bluetooth earphones/headphones to work with the XIMI Child Node, first [install the Bluetooth software](/docs/user-manual/performers/troubleshooting/installing-bluetooth) if you don't see this Bluetooth icon on the top-right corner of your screen.

![Bluetooth icon](/img/new-user-manual/child-raspi/bluetooth-icon.png)

You can then use the Bluetooth icon to pair to your Bluetooth devices.

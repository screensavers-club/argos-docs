---
Title: Audio Hardware & Control
sidebar_position: 3
---

# Audio Hardware & Control

The XIMI Child Node is built on the Raspberry Pi 4 single-board computer. Below are 3 ways you can connect your audio device.

1. You may connect a **USB Audio Adapter** to connect a **wired audio device**. Refer to [USB Audio Adapter](#usb-sound-card) below.
2. You may also connect a **wired USB audio accessories** (e.g. headphones with headset, USB microphone) onto the **USB ports**. Most devices, provided they are class-compliant, should work without requiring any software or driver installation.
3. **Bluetooth audio devices** can also be connected, but it can only be used as a **listening device** due to Raspberry Pi's limitations. Refer to [Bluetooth audio](#bluetooth-audio) below.

We recommend going with option 1 or 2 for a reliable setup.

---

## USB Audio Adapter

The most straightforward solution to get audio input working is to plug in a **USB Audio Adapter** (also known as USB Sound Card). Note that **there are different types of audio jacks which may or may not be compatible to certain types of USB Audio Adapters**

See [Audio Jack Differences](/docs/user-manual/performers/troubleshooting/trs-trrs-differences) if you have problems setting up.

Here are some examples of such USB audio adapters:

1. [Creative Sound Blaster Play 3](https://my.creative.com/p/sound-cards/sound-blaster-play-3#buy-menu)
1. [UGREEN USB Sound Card](https://www.amazon.com/UGREEN-External-Headphone-Microphone-Desktops/dp/B016CU2PEU/ref=sr_1_2_sspa?keywords=ugreen%2Bsound%2Bcard&qid=1637833947&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1MTc1Sk83WURZTjImZW5jcnlwdGVkSWQ9QTA4MTg4NTkzT0JGQ0s5RzdJTzlPJmVuY3J5cHRlZEFkSWQ9QTA4NDUyMTk4TFY1VDJJQkwxMlAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1)

---

### Connecting the USB Adapter

First, plug in your audio device on one end of the USB Audio Adapter.

![USB Sound card](/img/new-user-manual/child/15-audio.jpg)

![Combo sound card](/img/new-user-manual/child/16-audio.jpg)

Next, plug the USB end of the Adapter onto any USB port on the XIMI unit.

![USB Input](/img/new-user-manual/child/11-accessories.jpg)

---

## Setting Active Audio Device

You can use multiple audio devices simultaneously. E.g. a USB microphone for **input**, together with a pair of earphones connected to the on-board 3.5mm jack for **output**.

You will need a mouse connected to the XIMI Child Node for this operation.

After your hardware is connected, **right-click** on the speaker icon on the top right of the screen. You will be able to select connected devices for **Audio Output** and **Audio Input** separately.

![Audio Output](/img/new-user-manual/child-raspi/4-audio.png)

![Audio Input](/img/new-user-manual/child-raspi/30-audiodetection.png)

---

## Bluetooth Audio

To get your Bluetooth earphones/headphones to work with the XIMI Child Node, first [install the Bluetooth software](/docs/user-manual/performers/troubleshooting/installing-bluetooth) if you don't see this Bluetooth icon on the top-right corner of your screen.

![Bluetooth icon](/img/new-user-manual/child-raspi/bluetooth-icon.png)

You can then use the Bluetooth icon to pair to your Bluetooth devices.

---

### Switching on Bluetooth

When Bluetooth is switched off, you should see a red icon on the Bluetooth icon. Click on the Bluetooth icon and click **"Turn Bluetooth On"** to switch Bluetooth on.

![Bluetooth icon](/img/new-user-manual/child-raspi/bt-1.png)

![Bluetooth turn on](/img/new-user-manual/child-raspi/bt-2.png)

---

### Connecting to Bluetooth Device

Click onto the Bluetooth icon again and click **"Devices"** to view available devices.

![Bluetooth devices](/img/new-user-manual/child-raspi/bt-5.png)

A pop up will appear and you will see devices that was paired before. To discover new devices, click onto the **"Search"** button

![Discovering devices](/img/new-user-manual/child-raspi/bt-6.png)

![Discovering devices](/img/new-user-manual/child-raspi/bt-7.png)

If you have a mouse, right click the device that you wish to connect to and click **"Pair"**

:::tip Note

Remember to make your Bluetooth discoverable so the XIMI unit is able to detect it.

:::

![Pairing devices](/img/new-user-manual/child-raspi/bt-8.png)

![Pairing devices](/img/new-user-manual/child-raspi/bt-9.png)

![Pairing devices](/img/new-user-manual/child-raspi/bt-10.png)

![Pairing devices](/img/new-user-manual/child-raspi/bt-11.png)

If you do not have a mouse, click onto the **"Setup..."** button

![Pairing devices](/img/new-user-manual/child-raspi/pairing0.png)

A pop up will show up asking you to pair the device. Select **"Pair Device"** and press **"Next"**.

![Pairing devices](/img/new-user-manual/child-raspi/pairing1.png)

On the next section, select **"Audio Sink"** and press **"Next"**

![Pairing devices](/img/new-user-manual/child-raspi/pairing2.png)

The pairing is now complete. You may exit the window.

![Pairing devices](/img/new-user-manual/child-raspi/pairing3.png)

---

### Disconnecting Bluetooth Devices

If you intend to disconnect a device, right click the device you wish to disconnect and click **"Disconnect"**

![Disconnecting devices](/img/new-user-manual/child-raspi/bt-12.png)

Alternatively, you can select the device you wish to disconnect and press the **"-"** icon to disconnect your device.

![Disconnecting devices](/img/new-user-manual/child-raspi/disconnect-bluetooth.png)

---

### Re-discover Bluetooth Device

If you wish to re-connect to a device that you removed, simply press the **"Search"** button again to look for the device. If this does not work, try restarting your Bluetooth device and try again.

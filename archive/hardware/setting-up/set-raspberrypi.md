---
Title: 3a. Setting Up Raspberry Pi
sidebar_position: 1
---

# 3a. Setting Up The Raspberry Pi

This section lists the steps in the assembly of the Child Node Screen Camera Module Casing

### Method 1: Installing From Scratch

Follow the [Raspberry Pi](https://www.digikey.sg/product-detail/en/raspberry-pi/RASPBERRY-PI-4-MODEL-B-8G/1690-RASPBERRYPI4MODELB8G-ND/12159401) set up tutorial using this link: [Setting Up Your Raspberry Pi](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up)

### Method 2: Flashing Using Images Via SD Card

If you already set-up your Raspberry Pi and wishes to clone it onto other SD cards, follow this [Raspberry Pi Setup Guide](https://www.raspberrypi.org/documentation/computers/getting-started.html) and look for the section **"Installing Images on (your OS)"**.

Do ignore the instruction: `"Note" You should use rdisk (which stands for 'raw disk') instead of disk, this speeds up the copying.` as it actually slows down our writing speed. You may try it if you think it may help you.

:::warning WARNING!
Please be careful when writing files. You may corrupt your computer's disk if you write to the wrong disk. Always double check the disk that you are writing before proceeding.
:::

Using method 2 will be faster in the long run as there will be no need to do any configuration after the image is installed onto the SD card.

### Method 3: Using BalenaEtcher

[BalenaEtcher](https://www.balena.io/etcher/) is a tool that you can use to flash SD cards. Download the program to begin. You should also have the ISO image ready.

Launching the program, this is what you will see

![etcher main](/img/etcher/etcher-main.png)

Click `Flash from file` and select the correct ISO file.

![flash from file](/img/etcher/flash-from-file.png)

![choosing file](/img/etcher/choosing-file.png)

Next, select the target drive which is the newly inserted SD card.

:::danger DANGER
Check that you have selected the correct drives. Failing to do so may overwrite your computer's disk.
:::

![select target](/img/etcher/select-target.png)

![target selected](/img/etcher/target-selected.png)

Finally, click `Flash!` to begin flashing.

![flash](/img/etcher/flash.png)

Enter password and allow the program to use the drive

![admin](/img/etcher/admin.png)

The flashing will begin

![flashing](/img/etcher/flashing.png)

Once it's done, you may remove the drive and start flashing a new SD card.

![finished](/img/etcher/finished.png)

### Other Configurations

**Onscreen Keyboard**
Follow the [following tutorial](https://pimylifeup.com/raspberry-pi-on-screen-keyboard/) to install on-screen keyboard

**HDMI Port Configuration**
There are 2 HDMI Micro ports on the Raspberry Pi. Each of them is specific to HDMI 1 and HDMI 0 which are not cross-compatible by default. There is a need to configure the Raspberry Pi software to make them cross-compatible. This step is important to allow HDMI cables of different types to fit into any port.

1. Open the terminal

2. Enter `sudo nano /boot/config.txt`

3. Inside the config file, find and uncomment `hdmi_force_hotplug=1`

4. Once that is done, press `ctrl + x` and then `enter` to exit the terminal.

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

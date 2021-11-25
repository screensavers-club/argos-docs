---
Title: 1. The Child Node Module
sidebar_position: 1
---

# 1. The Child Node Module

## Current Version

The current hardware version is **Version 3.4**, uploaded on 1st October 2021.

## About

The Child Node Module is a compact audio / video device that can be easily deployed and connected to the Argos system.

The Child Node consists of a Raspberry Pi 4 Model B, a HD Webcam with mountable lenses, a Raspberry Pi Touch Display, assembled together in a 3D printed PLA casing. This module is designed to be flexible in its uses and maintenance with features including a mount for tripod use, the option to change camera lenses, and easy access of hardware.

## Hardware Used

### Raspberry Pi 4 Model B 8GB

The Raspberry Pi is the brains for the child node unit.

Specifications:

- Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz, 8GB LPDDR4-3200 SDRAM
- 2.4 GHz and 5.0 GHz IEEE 802.11ac wireless, Bluetooth 5.0, BLE, Gigabit Ethernet
- 2 USB 3.0 ports; 2 USB 2.0 ports, Raspberry Pi standard 40 pin GPIO header (fully backwards compatible with previous boards)
- 2 × micro-HDMI ports (up to 4kp60 supported), 2-lane MIPI DSI display port, 2-lane MIPI CSI camera port
- 4-pole stereo audio and composite video port
- H.265 (4kp60 decode), H264 (1080p60 decode, 1080p30 encode) OpenGL ES 3.0 graphics
- Micro-SD card slot for loading operating system and data storage
- 5V DC via USB-C connector (minimum 3A*) 5V DC via GPIO header (minimum 3A*)
- Power over Ethernet (PoE) enabled (requires separate PoE HAT) Operating temperature: 0 – 50 degrees C ambient

### Raspberry Pi 7" Touch Display

The display we are using is a 7" touch screen display that is compatible with the Raspberry Pi.

Specifications:

- 10 Finger capacitive touch
- Screen Dimensions: 110x194x20mm
- Viewable screen size: 86x155mm
- Screen Resolution 800x480 pixels

### Raspberry Pi HQ Camera

The Raspberry Pi High-Quality Camera is used as the camera input of the device. It features interchangeable lenses that can be swapped based on the needs of the performance.

Specifications:

- Higher Resolution & Sensitivity, Compatible With Raspberry Pi Series Boards
- The HQ Camera Offers Up To 12.3MP, Along With Nearly 50% Greater Area Per Pixel, Delivering Better Imaging Effect
- Raspberry Pi High Quality Camera, 12.3MP IMX477 Sensor, High Sensitivity, Supports C- And CS-Mount Lenses
- Compared To 8MP Of Normal Raspberry Camera, The High Quality Camera Offers Up To 12.3MP, Along With Nearly 50% Greater Area Per Pixel, Delivering Better Imaging Effect
- SENSOR: 12.3MP, 4056 (H) × 3040 (V); 7.9mm CMOS diagonal size

### 8mm CS Mount Lens for Raspberry Pi HQ Camera

8mm Lens Specifications:

- Model No: CS2008ZM05A
- Optical Format: 1/2.3″
- Focal Length: 8mm
- Aperture: F1.2
- Field of View (FOV): 50°(H) on Raspberry Pi High Quality Camera, 30°(H) on Raspberry Pi V1/V2 Camera
- Focus Type: manual
- Mount: CS mount
- Back Focal Length: 7.53mm
- MOD: 0.2m
- Dimension: Φ30×29.5mm
- Weight: 53g

## 3D Print

The 3D printed model is the support hardware for the Argos Child Node. It ensures that the right components are securely assembled together and allows for ease of assembly, use, and maintenance. It aims to be available for anyone and everyone to 3D print and assemble on their own.

Three main components to print are:

### Main Body

This component is the body of the device, housing all the parts together. It's design to be as modular as possible, as users are given the freedom to mount a camera, connect different wires, mount onto a tripod or place on flat ground.

### Front Cover

This part protects the screen, especially its corners, from damage. It also helps with the balance of the unit by providing extra support on the front.

### Backplate

This part covers away the electronics, protecting them from unintended damage from stray tools or hands. It is also designed to have many openings so it does not trap heat, and also allow easy access during maintenance.

# Using an Audio Interface

## Requirements

- 1 x Class Compliant USB Audio Device

## Initial

Acquire the current list of USB Audio Input/Output (I/O) devices in the terminal with:

For input:

```bash
arecord -l
```

![screenshot of arecord](../../static/img/audio-setup/aplayl_screenshot.png)

For output:

```bash
aplay -l
```

![screenshot of aplay](../../static/img/audio-setup/arecordl_screenshot.png)

Once you have verified your audio device is recognised by the computer you may proceed to the **next step**.

> If your device is not recognised in these steps, your device may not be **class compliant**, and might require drivers. If so, please consult the relevant sources for these drivers if they exist for raspberry pi

## Using alsamixer to change audio device

You will need to configure the chosen audio device with the `alsamixer` command line application. This will bring up alsamixer to allow you to change your audio I/O.

```bash
alsamixer
```

![screenshot of alsamixer1](../../static/img/audio-setup/alsamixer_screenshot1.png)

In this screen, you can interact with alsamixer to change I/O by using the `F3, F4, F5, and F6` keys on your keyboard.

First, we can configure the playback (output) device:
Hit `F3` to select _playback_ followed by `F6` to select from the list of available devices.
Hit `Enter or Return` to select the device.
![screenshot of alsamixer2](../../static/img/audio-setup/alsamixer_screenshot2.png)

Next, we can configure the capture (input) device.
Hit `F4` to select _capture_ followed by `F6` to select from the list of available devices.
Hit `Enter or Return` to select the device. The input gain of the capture device can be set using the up and down arrows on your keyboard.
You can hit `ESC` to exit once this is set.
![screenshot of alsamixer3](../../static/img/audio-setup/alsamixer_screenshot3.png)

## Testing

You can test the input and output devices using this command in the terminal.

```bash
arecord -D plughw:1,0 -d 7 -f cd test.wav && aplay test.wav
```

This command records an input of 7 seconds at CD quality (44.1 kHz sampling frequency and 16 bit depth) and saves it as a file, named "test.wav", to the current location. Following which, `aplay` will play back this file.

![screenshot of alsamixer3](../../static/img/audio-setup/testing_screenshot.png)

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[whyisnoaudio]: https://google.com

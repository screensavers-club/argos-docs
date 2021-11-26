---
title: Camera fails to turn on after OS upgrade
---

# Camera fails to turn on after OS upgrade

:::warning

We are verifying this fix with more units before this is considered an official solution

:::

managed to get it working again by downgrading chromium, Try:

```
wget  "http://archive.raspberrypi.org/debian/pool/main/c/chromium-browser/chromium-browser_88.0.4324.187-rpt1_armhf.deb"
wget "http://archive.raspberrypi.org/debian/pool/main/c/chromium-browser/chromium-codecs-ffmpeg-extra_88.0.4324.187-rpt1_armhf.deb"

sudo apt install --no-install-recommends --allow-downgrades --allow-change-held-packages ./chromium-browser_88.0.4324.187-rpt1_armhf.deb ./chromium-codecs-ffmpeg-extra_88.0.4324.187-rpt1_armhf.deb
```

possibly, try

```
sudo modprobe bcm2835-v4l2
v4l2-ctl --set-fmt-video=width=1920,height=1088,pixelformat=4
```

---
title: Camera fails to turn on after OS upgrade
---

# Camera fails to turn on after OS upgrade

![webcam not detecting](/img/new-user-manual/troubleshoot/webcam-1.png)

Image above: The issue where the camera refuses to switch on when "Test Cam" button is pressed.

The issue lies in the compatibility of the camera with the web browser, **Chromium** on later versions. To rectify this, we need to downgrade Chromium.

Below is the command to be used on Terminal to fix this issue.

```
wget  "http://archive.raspberrypi.org/debian/pool/main/c/chromium-browser/chromium-browser_88.0.4324.187-rpt1_armhf.deb"

wget "http://archive.raspberrypi.org/debian/pool/main/c/chromium-browser/chromium-codecs-ffmpeg-extra_88.0.4324.187-rpt1_armhf.deb"

sudo apt install --no-install-recommends --allow-downgrades --allow-change-held-packages ./chromium-browser_88.0.4324.187-rpt1_armhf.deb ./chromium-codecs-ffmpeg-extra_88.0.4324.187-rpt1_armhf.deb
```

After downgrading Chromium, try testing the camera again.

:::tip Note

If you have Chromium on during the downgrading process, please restart Chromium so that the changes apply.

:::

![webcam not detecting](/img/new-user-manual/troubleshoot/webcam-2.png)
Image above: The camera working again.

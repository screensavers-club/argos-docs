---
Title: 4. Troubleshooting
sidebar_position: 4
---

# 4. Troubleshooting

### Software Updates

The Argos Child and Parent browsers are automatically updated by the dev team. However, when there is an update to the Raspberry Pi Operating System, we will push out an update that requires you to download and install. As of now, there is no need to update anything as we have not developed that far yet.

### Issue 1: Lens is not focusing when adjusting focus knob

**Solution 1**

The first reason why this happens is usually the adaptor. The camera module's default lens mount is compatible with **CS-Mount Lenses**, while it comes with a **C-CS Adaptor** to adapt to **C-Mount lenses**.

You could have installed the adaptor accidentally while you're using a CS-Mount lens -- Or, have not installed the adaptor while using a C-Mount lens.

:::info Solution
**Try removing or attaching the C-CS Adaptor and try focusing again**
:::

Please check this [issue](https://www.raspberrypi.org/forums/viewtopic.php?t=276558) and this [documentation](https://static.raspberrypi.org/files/product-guides/Typical_C-Mount_Lens_Guide.pdf) to understand more about this issue.

**Solution 2**

If the lens adaptor is not the issue, it could just be that the focus is not adjusted properly. Here is a series of steps to help guide you to correctly focus the camera.

1. Identify the 2 knobs on the lens. One of the knob controls **aperture**, the other controls **focus**. We want to single out the aperture knob.

2. Once the aperture knob is identified, adjust the knob until you've reached the desired brightness. Look for the protruding knob screw and turn it **clockwise** to tighten the knob. Make sure it is tightened to the point where you cannot adjust the knob anymore.

3. Once the aperture is locked in place, the rotation will only affect the focus of the camera. You can now turn the knob until the desired focus is reached. Then, you can also tighten the knob screw to lock the focus, if required.

:::tip Note

Take note not to unscrew the lens in the process! Make sure you are only rotating the lens knobs and not the entire lens.

:::

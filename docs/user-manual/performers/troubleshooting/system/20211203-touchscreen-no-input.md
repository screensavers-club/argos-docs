---
title: Touchscreen Not Registering Input After Configuring Bluetooth
---

# Touchscreen Not Registering Input After Configuring Bluetooth

This issue pertains to users not able to click onto the **Raspberry Pi Menu**, the **Desktop Icons**, and the top right **System Icons**. This usually happens after the user opens the **Bluetooth dropdown menu**.

---

## How does this issue happen

This issue happens when click onto the **Bluetooth Icon**, then exit the dropdown menu without performing any action.

![Blueman Touchscreen Bug](/img/new-user-manual/child-raspi/blue-1.png)

![Blueman Touchscreen Bug](/img/new-user-manual/child-raspi/blue-3.png)

The screen will now be bugged as mentioned above.

---

## How to fix this issue

To fix it, open the same **Bluetooth Icon** and click **Help**

![Blueman Touchscreen Bug](/img/new-user-manual/child-raspi/blue-4.png)

A popup will showup. Simple move the popup menu around the screen and close it afterwards. It does not matter how much the popup is being moved.

![Blueman Touchscreen Bug](/img/new-user-manual/child-raspi/blue-5.png)

The bug will then be fixed and you can now access **Raspberry Pi Menu**, **Desktop Icons**, and the **System Icons**.

---

:::info

This is a very strange solution and as such is our current workaround for this issue. A more permanent solution might be available when `blueman-applet` software is updated by their developers.

:::

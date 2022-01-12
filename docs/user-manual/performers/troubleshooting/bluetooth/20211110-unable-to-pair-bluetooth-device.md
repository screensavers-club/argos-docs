---
title: Unable to Pair Bluetooth Device
---

## Unable to Pair Bluetooth Device

Before you begin, ensure to try connecting to other Bluetooth audio devices. If those still don't work, you can proceed to try the following fixes.

![bluetooth fails](/img/new-user-manual/child-raspi/bt-failed-to-connect.png)

The following instructions are for troubleshooting bluetooth connectivity issues on the XIMI unit. **This is applicable in the following situations:**

1. You are unable to connect to a bluetooth device even after following the [steps to do so correctly](/docs/user-manual/performers/audio#bluetooth-audio)

2. You see a red cross beside the Bluetooth icon that would not go away and does not allow you to switch on your bluetooth

---

### Verifying The Issue

First, **connect a keyboard** onto your XIMI unit.

Next, open the **terminal** as shown in the image below.

![bluetooth sap fix intro](/img/new-user-manual/child-raspi/bt-sap-1.png)

Then, type the following command line `sudo systemctl status bluetooth` and press **enter**.

![sap fix terminal command line 1](/img/new-user-manual/child-raspi/bt-sap-2.png)

So far, we have identified three outcomes to this issue:

### [Error "Sap driver initialization failed"](#error-sap-driver-initialization-failed-and-sap-server-operation-not-permitted)

### [Error "Blocked through rfkill"](#error-blocked-through-rfkill)

### [Other errors](#error-without-sap-driver-failure-1)

Press `ctrl + c` or `q` to exit the output message before you continue.

---

## Error "Sap driver initialization failed." and "sap-server: Operation not permitted"

If you encounter this error, the terminal output will look like this.

![sap fix terminal command line output](/img/new-user-manual/child-raspi/bt-sap-3.png)

### Troubleshooting Sap Driver Error

Type the following command:

`sudo nano /etc/systemd/system/bluetooth.target.wants/bluetooth.service` and press **enter**

![sap fix terminal command 2](/img/new-user-manual/child-raspi/bt-sap-4.png)

A document should open in the terminal like the image below

![sap fix document edit 1](/img/new-user-manual/child-raspi/bt-sap-5.png)

Go to the line `ExecStart=/usr/lib/bluetooth/bluetoothd`, **add a space behind the line** and type:

`--noplugin=sap`

![sap fix document edit 2](/img/new-user-manual/child-raspi/bt-sap-6.png)

Once done, press `ctrl + s` to save the document and `ctrl + x` to exit the document.

### Restart Bluetooth

Next you have to restart bluetooth. Type `sudo systemctl daemon-reload` in the terminal and press **enter**.

![sap fix restart bt 1](/img/new-user-manual/child-raspi/bt-sap-7.png)

Then, type `sudo service bluetooth restart` and **enter**.

![sap fix restart bt 2](/img/new-user-manual/child-raspi/bt-sap-8.png)

Once that is done, you can check if the system is working by typing `sudo systemctl status bluetooth`

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-9.png)

The output should show no messages in red.

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-10.png)

If bluetooth continues to fail, please document the issue and [contact us here](/docs/help-problem) so we can help you to troubleshoot.

---

## Error "Blocked through rfkill"

If you see an error `Failed to set mode: Blocked through rfkill (0x12)`, please try the steps below to rectify.

![rfkill 1](/img/new-user-manual/child-raspi/rfkill-1.png)

On the command line, type `sudo rfkill unblock bluetooth`

![rfkill 2](/img/new-user-manual/child-raspi/rfkill-2.png)

Then, restart bluetooth by typing `sudo systemctl restart bluetooth`

![rfkill 3](/img/new-user-manual/child-raspi/rfkill-3.png)

Checking the bluetooth using `sudo systemctl status bluetooth` to check if there are anymore error messages.

---

## Other errors

If you get an error messages without the [Sap Driver error](#error-sap-driver-initialization-failed-and-sap-server-operation-not-permitted) or [rfkill error](#error-blocked-through-rfkill), your terminal output should look like this.

![failed to set privacy issue](/img/new-user-manual/child-raspi/bt-sap-error-after-restart.png)

**or it will look like this**

![failed to set mode issue](/img/new-user-manual/child-raspi/bt-failed-to-set-mode.png)

### Troubleshooting: Restart Bluetooth

Type `sudo systemctl daemon-reload` in the terminal and press **enter**.

![sap fix restart bt 1](/img/new-user-manual/child-raspi/bt-sap-7.png)

Then, type `sudo service bluetooth restart` and **enter**.

![sap fix restart bt 2](/img/new-user-manual/child-raspi/bt-sap-8.png)

:::info Note
You may receive a pop up message with a title **Connection to BlueZ failed**. Close the pop up.
:::

Lastly, check if the system is working by typing `sudo systemctl status bluetooth`

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-9.png)

The output should show no messages in red.

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-10.png)

If bluetooth continues to fail, please document the issue and [contact us here](/docs/help-problem) so we can help you to troubleshoot.

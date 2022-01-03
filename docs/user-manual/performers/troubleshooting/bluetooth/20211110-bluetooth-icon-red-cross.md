---
title: Bluetooth icon has red cross next to it, unable to launch Bluetooth menu
---

# Bluetooth icon has red cross next to it, unable to launch Bluetooth menu

Please follow the instructions below if you are unable to connect to a bluetooth device even after following the [steps to do so correctly](/docs/user-manual/performers/audio#bluetooth-audio); or if you see a red cross beside the Bluetooth icon that does not disappear even if you tried to switch on bluetooth.

---

### Discovering the issue

First, connect a keyboard onto your XIMI unit.

Next, open the terminal as shown in the image below.

![bluetooth sap fix intro](/img/new-user-manual/child-raspi/bt-sap-1.png)

Then, type the following command line

`sudo systemctl status bluetooth`

![sap fix terminal command line 1](/img/new-user-manual/child-raspi/bt-sap-2.png)

You should see the following output. If you receive the same errror in red, continue below on how to fix the issue.

![sap fix terminal command line output](/img/new-user-manual/child-raspi/bt-sap-3.png)

Press `ctrl + c` to exit the output message

---

### Troubleshooting the issue

Next, type the following command:
`sudo nano /etc/systemd/system/bluetooth.target.wants/bluetooth.service`

![sap fix terminal command 2](/img/new-user-manual/child-raspi/bt-sap-4.png)

A document should open in the terminal like the image below

![sap fix document edit 1](/img/new-user-manual/child-raspi/bt-sap-5.png)

Go to the line `ExecStart=/usr/lib/bluetooth/bluetoothd`, add a space behind the line and type `--noplugin=sap`

![sap fix document edit 2](/img/new-user-manual/child-raspi/bt-sap-6.png)

Once done, press `ctrl + s` to save the document and `ctrl + x` to exit the document.

---

### Restart bluetooth

Next you have to restart bluetooth. Type `sudo systemctl daemon-reload` in the terminal and press enter.

![sap fix restart bt 1](/img/new-user-manual/child-raspi/bt-sap-7.png)

Then, type `sudo service bluetooth restart`

![sap fix restart bt 2](/img/new-user-manual/child-raspi/bt-sap-8.png)

Once that is done, you can check if the system is working by typing `sudo systemctl status bluetooth`

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-9.png)

The output should show no messages in red.

![sap fix check bt 1](/img/new-user-manual/child-raspi/bt-sap-10.png)

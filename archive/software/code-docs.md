---
Title: Code Documentation
sidebar_position: 3
---

# Code Documentation

:::tip WIP!
WIP!!!
:::

Invoke Axios

- Bring to the lowest level possible without it breaking, when it is relevant.

Using useState to render multiple button states
[Example](https://steep-judo-e9e.notion.site/React-Render-Multiple-States-3f2e66aa89794d819ceb85e8b9aaa47d)

Using useRef to publish and unpublish tracks.

[Example](https://steep-judo-e9e.notion.site/useRef-340a19c20fa3481dad23cc5bbd58a5a1)

Turning Fullscreen

[Example](https://steep-judo-e9e.notion.site/Turning-Fullscreen-12474b947a414b16b1342ef9f745642c)

Using xState

- Input how xState is used here

Receiving Payload from Livekit
[Example](https://steep-judo-e9e.notion.site/Livekit-Receiving-Payload-a1880a49f0214e85932e783192c9b035)

Using useRef to create Modal
[Example](https://steep-judo-e9e.notion.site/Using-useRef-to-create-Modal-e044dc1798714fc48894f0d488989688)

- Randomly generating room names

- Obtaining and checking key

- document livekit and how we go about with the video and video arrangement

- document input text system and password system (how we do the password system)
  limit 5 character
  limit to numericals
  shake when wrong password

**(Child node Raspberry Pi) Setting shortcut to QV4L2**

First: Open Main Menu Editor from `Menu > Preferences > Main Menu Editor`

Next, click on `New Item`

Create a name for your command.

Next, type in the command `qv4l2`

Next, Check the checkbox for `Launch in Terminal?`

Click `OK` and the new shortcut will appear in Menu named `QV4L2`

Drag and drop it onto the desktop to create desktop shortcut.

**(Child node Raspberry Pi) Set Shortcut For Chrome To Automatically Enter Child Node Site**

[Reference Link](https://diyprojects.io/open-html-page-starting-raspberry-pi-os-chromium-browser-full-screen-kiosk-mode/#.YU1NcWaA63I)

First: Open Main Menu Editor from `Menu > Preferences > Main Menu Editor`

Next, click on `New Item`

Create a name for your command.

Next, type in the command `/usr/bin/chromium-browser --start-fullscreen http://argos-child.vercel.app/`

Alternatively, you can start it up `kiosk mode` by writing `/usr/bin/chromium-browser --kiosk http://argos-child.vercel.app/`

Next, Check the checkbox for `Launch in Terminal?`

Click `OK` and the new shortcut will appear in Menu named `QV4L2`

Drag and drop it onto the desktop to create desktop shortcut.

---
Title: The UI
sidebar_position: 1
---

# The UI

## Wireframe

We designed the wireframe of the application using Figma.

### Child Node UI

![start page](../../static/img/software-v1-0/ui-child-enter-password.png)

Entering password in the child UI

![start page](../../static/img/software-v1-0/ui-child-room-joined.png)

Joined room in child UI

### Parent Node UI

![start page](../../static/img/software-v1-0/ui-parent-start-page.png)

The start page in parent UI

![set password](../../static/img/software-v1-0/ui-parent-set-password.png)

The set password page in parent UI

![select room](../../static/img/software-v1-0/ui-parent-select-room.png)

The select room page in parent UI

![enter password](../../static/img/software-v1-0/ui-parent-enter-password.png)

The enter password page in parent UI

## The workflow

We made a flow chart for the parent node to plan out the interaction

![parent flowchart](../../static/img/software-v1-0/parent-flow.png)

As we work in React xState, we developed a state chart that aligns with the flowchart.

![parent state machine](../../static/img/software-v1-0/parent-state-machine.png)

## Prototype

We show our prototype on 30th July 2020, displaying the application's basic server and video capabilities.

![onboard](../../static/img/software-v1-0/0-onboard.png)

The onboard page

![room create](../../static/img/software-v1-0/1-room-create.png)

Creating room

![room set password](../../static/img/software-v1-0/2-room-set-password.png)

Setting the password

![room created](../../static/img/software-v1-0/3-room-created.png)

Room created

![error](../../static/img/software-v1-0/4-error.png)

Error page

![available room](../../static/img/software-v1-0/5-available-room.png)

Showing available rooms

![child live room](../../static/img/software-v1-0/child-live-room.png)

Child node live demo of room

![child webcam quality](../../static/img/software-v1-0/child-webcam-quality.png)

The quality of the webcam

## Workflow

- Start with a flowchart
- Frontend design using Figma
- Use xState machine to align with the flowchart
- Build components within xState machine

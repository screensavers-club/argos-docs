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

## Workflow

- Start with a flowchart
- Frontend design using Figma
- Use xState machine to align with the flowchart
- Build components within xState machine

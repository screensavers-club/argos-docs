---
title: Finite State Machines
author: Siah
author_title: Argos Contributor
tags: [devlog]
---

The parent and child nodes for Argos are both single page React apps, considering that they are both essentially single-purpose user interfaces. The challenge appears when we consider the fact that there is a lot of state to manage, and much of it unknown, depending on multiple external factors (e.g. wifi condition, network state, no. of child nodes, latency) and sequence of user actions.

It is advantageous to handle this with a state machine implementation. [Redux](https://redux.js.org) and [XState](https://xstate.js.org) were considered, with XState chosen for its ability to declare/handle [Transitions](https://xstate.js.org/docs/guides/transitions.html) explicitly.

Consider the following example:

1. We want the parent node UI to start in a `START` state, with some valid interaction options shown when in this state: `JOIN ROOM`, `START NEW ROOM`
2. Upon entering either available states,

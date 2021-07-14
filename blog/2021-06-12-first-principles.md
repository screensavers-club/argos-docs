---
title: First principles (WIP)
author: Siah
author_title: Argos Contributor
tags: [devlog]
---

Initial explorations checklist:

- Learning WebRTC APIs from [first principles](https://codelabs.developers.google.com/codelabs/webrtc-web/#5)
- Implementing and benchmarking a packaged solution [PeerJS](https://peerjs.com/)

## WebRTC with native browser APIs (RTCPeerConnection)

First task at hand was learning to implement the native web browser WebRTC APIs.

Watched this: https://youtu.be/p2HzZkd2A40

Code references:

- https://codelabs.developers.google.com/codelabs/webrtc-web/#3
- https://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-signaling

What I understand so far:

- `new RTCPeerConnection()` on both clients
- `.createOffer()` returns a promise containing the `description`, which needs to be set on the peer client (remote `RTCPeerConnection`)
- Remote `RTCPeerConnection` does `.setRemoteDescription()` with the "local" description, , then `.createAnswer()`. `setLocalDescription()` with its own description from `createAnswer()`. "Local" RTCPeerConnection then does the same with the "remote" description.
- `addIceCandidate` is the part I'm stuck at

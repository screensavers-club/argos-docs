---
Title: Designing for States: Managing PeerJS and other state
---

User experience starts with connecting to the Peer Server in order to even begin signalling. 

Upon connected, there are multiple states that lead to multiple actions. 

- Child node needs to maintain a WebRTC connection to Parent node
- Child node could possibly connect to multiple other child nodes
- Send audio only when `getUserMedia` is working

How do we design to represent all this state in a comprehensible and succint UI to user? Good design would reduce ambiguity and make obvious what action needs to be taken to solve any outstanding issues preventing a successful video connection. 


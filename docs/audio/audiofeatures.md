# Audio Features and Support in Argos

## General Note

- The idea here is to provide an over-simplified approach to audio interfacing within argos. This comes passes responsibility to the user to integrate any additional functions they might need, most use cases imaginable will be documented.

## Some Prerequisites

- Feel free to install any command line editor, but as Raspbian comes default with `nano`, this guide will provide commands and isntructions for implementing changes with it.

- In order to provide consistent integration with the `Web Audio API`, the system's default audio is disabled by default. Please see [this link to a different chapter][#whyisnoaudio] to understand why this is done, and how to change that if you need to do so.

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[#whyisnoaudio]: #CHANGETOLINK

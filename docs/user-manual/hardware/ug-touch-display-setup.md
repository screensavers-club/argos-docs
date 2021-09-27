---
Title: 4. Attaching The Raspberry Pi To The Screen
sidebar_position: 4
---

# 4. Attaching The Raspberry Pi To The Screen

Before installation, ensure the orientation of the screen aligns with the image. The yellow chip should be on the **down** position.

1. First, we will install the jumper wires.

![Pi assembly](/img/assembly/pi7.png)

2. Insert the wires as such:

| colour | pin | Position (from the left) |
| ------ | --- | ------------------------ |
| red    | 5V  | 1                        |
| green  | SDA | 3                        |
| yellow | SCL | 4                        |
| black  | GND | 5                        |

![Pi assembly](/img/assembly/pi9.png)

3. Next, we will install the ribbon cable

![Pi assembly](/img/assembly/pi10.png)

4. On the **left** of the Raspberry Pi 7" Touch Display, you will see the display input port that has a black tab. It should be labelled "RPI-DISPLAY".

![Pi assembly](/img/assembly/pi11.png)

5. Open the black tab.

![Pi assembly](/img/assembly/pi12.png)

6. Insert the ribbon cable. The pins on the cable shoule be pointing **away** from the black tab, facing you in this set up.

![Pi assembly](/img/assembly/pi13.png)

7. Close the black tab once the ribbon cable is secure.

:::warning Fragile!
Make sure the ribbon cable is correctly aligned with the contacts before pushing down the black tab to avoid damaging the cable. Do not force the ribbon cable with excessive force.
:::

![Pi assembly](/img/assembly/pi14.png)

8. Attach all 4 11mm M2.5 hex standoffs onto the 7" Touch Display. Refer to the image below.

![Pi assembly](/img/assembly/pi15.png)

![Pi assembly](/img/assembly/pi16.png)

9. With the Raspberry Pi's USB inputs facing **right** of the current setup, place it on top of the Touch Display, aligning the screwholes.

![Pi assembly](/img/assembly/pi17.png)

10. Screw the Raspberry Pi unit onto the 4 standoffs installed earlier.

![Pi assembly](/img/assembly/pi18.png)

![Pi assembly](/img/assembly/pi19.png)

![Pi assembly](/img/assembly/pi20.png)

11. Once that is done, open up the ribbon cable port labelled "DISPLAY" on the **left** side of the Raspberry Pi.

![Pi assembly](/img/assembly/pi21.png)

12. Pick up the ribbon cable and plug it into the open port. Do note that the pins are facing **away** from the black tab. Close the black tab when the cable is secure.

:::warning Fragile!
Make sure the ribbon cable is correctly aligned with the contacts before pushing down the black tab to avoid damaging the cable. Do not force the ribbon cable with excessive force.
:::

![Pi assembly](/img/assembly/pi22.png)

![Pi assembly](/img/assembly/pi23.png)

![Pi assembly](/img/assembly/pi24.png)

13. Now for the jumper cables. Plug the cables in according to these positions:

![Pi assembly](/img/assembly/pi25.png)

![Pi assembly](/img/assembly/pi26.png)

![Pi assembly](/img/assembly/pi27.png)

![Pi assembly](/img/assembly/pi28.png)

Top down view of where each cable is plugged in:

![Pi assembly](/img/assembly/pi29.jpg)

Refer to the following table and pinout diagram to ensure the cables are plugged in correctly.

| colour | pin | pin number on Raspberry Pi |
| ------ | --- | -------------------------- |
| red    | 5V  | 4                          |
| green  | SDA | 3                          |
| yellow | SCL | 5                          |
| black  | GND | 6                          |

![Pinout diagram](https://www.raspberrypi.org/documentation/computers/images/GPIO-Pinout-Diagram-2.png)

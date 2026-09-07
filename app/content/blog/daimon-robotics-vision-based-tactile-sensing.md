---
slug: daimon-robotics-vision-based-tactile-sensing
title: "DAIMON Robotics: teaching robot fingers to see what they touch"
description: "A small Hong Kong robotics startup turns touch into an image its robots already know how to read, packing over 110,000 sensing points into a single fingertip."
publishedAt: 2026-09-07
seriesOrder: 48
lang: en
---

I ran into this while reading about a robot in a Hong Kong lab picking up a cracked eggshell without crushing it, which stopped me because that's exactly the kind of task video-only robots usually fail at.

The hand belongs to DAIMON Robotics, a two-and-a-half-year-old company led by Michael Yu Wang, an IEEE Fellow who spent decades researching dexterous manipulation at Carnegie Mellon and Hong Kong University of Science and Technology before founding the startup with his former postdoc, Duan Jianghua. Their premise is simple: robots can watch all the video they want, but until they can feel what they're holding, they'll keep dropping fragile things and fumbling in the dark.

That's the clever part. Instead of wiring a fingertip with an array of physical pressure sensors, which is hard to scale up in resolution, DAIMON put a tiny camera inside a soft fingertip and pointed it at the underside of the material. As the surface deforms against an object, the camera captures a sequence of images of that deformation, and from those images the system infers force, slip, texture, even material type. It's a monochromatic vision-based tactile sensor, and it packs more than 110,000 effective sensing points into a module the size of a fingertip.

The real trick is architectural. Because touch now arrives as an image, it slots directly into the same vision-based models robots already use to interpret cameras. DAIMON calls the result VTLA, Vision-Tactile-Language-Action, an extension of the standard Vision-Language-Action framework that treats touch as a modality on equal footing with sight instead of an afterthought bolted on.

In April, DAIMON released Daimon-Infinity, built with Google DeepMind, Northwestern University and the National University of Singapore: a tactile-rich dataset spanning more than 80 real-world scenarios and 2,000-plus human skills, with 10,000 hours open-sourced for anyone to use. The company's business is basically devices, data and deployment: sell the sensors, collect the data they generate, help partners train and deploy the resulting models.

Wang's own test case for where this lands first isn't factories, it's convenience stores in China, where a robot arm needs three slim fingers to slide one item off a crowded shelf the way a human would, something no two-jaw gripper can manage. It's a small, unglamorous proving ground, and probably the right one to start with.

## Sources

- [DAIMON Robotics Wants to Give Robot Hands a Sense of Touch (IEEE Spectrum)](https://spectrum.ieee.org/daimon-robotics-physical-ai)
- [DAIMON Robotics](https://www.dmrobot.com/)
- [Daimon-Infinity dataset (ModelScope)](https://modelscope.cn/datasets/daimonrobotics/Daimon-Infinity)

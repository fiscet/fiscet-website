---
slug: shen-ai-camera-vital-signs-medical-sdk
title: "Shen AI: turning a phone camera into a certified vital-signs monitor"
description: "An Estonian-Polish startup reads heart rate, blood pressure, and breathing rate from a 30-second phone camera scan, and its Medical SDK just earned CE certification as a Class IIa device."
publishedAt: 2026-08-28
seriesOrder: 41
---

I keep noticing how much of the interesting AI work right now happens by removing a piece of hardware rather than adding one, and Shen AI is a clean example. The startup, headquartered in Tallinn with its R&D team in Wrocław, spent the past few years teaching a phone camera to read a pulse, and at the end of July it earned CE certification as a Class IIa medical device for the part of that claim that matters most: the numbers are now regulated, not just demoed.

Here is what the product actually does. Point any decent smartphone camera at a face for 30 seconds and Shen AI's SDK returns heart rate, heart rate variability, breathing rate, and blood pressure, plus more than 30 other health markers when medical-grade certification isn't the goal. No wearable, no cuff, nothing touching the skin.

The clever part is the sensing itself. Shen AI reads remote photoplethysmography, tiny color shifts in the skin caused by blood pulsing through capillaries, and combines it with remote ballistocardiography, the micro-movements a face makes with every heartbeat. Both signals run entirely on-device, so nothing leaves the phone, and the model was trained on data from 2 million people specifically to hold up across skin tones and lighting, a problem that has quietly undermined camera-based health tools for years. The payoff: heart rate accurate to under half a beat per minute against clinical reference devices.

What stays with me is the split between the existing Wellness SDK and the new Medical one. Same underlying technology, but the certified version now carries the paperwork to sit inside an actual diagnostic pathway, in telehealth, insurance triage, or a car dashboard checking a driver's alertness. A camera nobody thinks of as a sensor, doing sensor work, feels like exactly where this kind of technology should be heading.

## Sources

- Shen AI, technology overview: https://shen.ai/technology
- Shen AI, Medical SDK certification announcement: https://shen.ai/blog/now-ce-certified
- Shen AI, What is rPPG: https://shen.ai/blog/what-is-rppg

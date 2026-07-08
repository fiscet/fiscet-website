---
slug: neuronova-analog-chip-always-on-sensing
title: "Neuronova: a chip that computes before it goes digital"
description: "A Milan startup skips the always-on digitizer that drains battery life in smart devices. Its H1 chip processes sound in analog first, cutting power for wake-word detection by up to 1,000x."
publishedAt: 2026-07-08
seriesOrder: 20
---

I stumbled on Neuronova while reading about why "always-on" voice assistants drain batteries so fast, and one idea stood out: what if the chip never converted sound to digital until something worth hearing actually happened.

Every microphone-based device works the same way today. It samples the analog signal, runs it through an analog-to-digital converter, then feeds the digital stream to a neural network, continuously, whether or not anything is happening. That constant digitization is one of the biggest drains on battery life in wearables and IoT sensors.

Neuronova, a small Milan-based team spun out of Politecnico di Milano's PoliHub incubator, decided to remove that step. Their chip, called H1, implements neurons and synapses as physical analog circuits and processes the incoming signal before it reaches the ADC. Only when something meaningful happens, a wake word, a knock, an alarm, does it output digital data downstream. Everything else stays below what the founders call the digital power floor.

The numbers are the interesting part. A conventional digital network for a task like wake-word detection needs around 100,000 parameters and constant activity. Neuronova's analog approach gets the same accuracy with about 1,000 parameters, running at under 1 microwatt, up to 1,000 times less power than the digital equivalent, packed onto a chip smaller than 2mm by 2mm.

The clever part isn't the neuromorphic concept itself, researchers have chased brain-like efficiency for years. It's starting with audio, the most power-hungry always-on task, to prove the architecture where it's hardest, before moving to health sensors, vibration monitoring, and eventually, in their own words, a "trillion-sensor economy."

They showed H1 at Embedded World 2026 and are shipping evaluation kits now. If the always-on layer of every sensor can run on almost nothing, "smart" might finally stop meaning "battery-hungry."

## Sources

- [Neuronova](https://www.neuronovatech.com/)
- [Bringing the brain to silicon: Neuronova's vision for energy-efficient AI hardware (Tech.eu, Jan 2025)](https://tech.eu/2025/01/20/bringing-the-brain-to-silicon-neuronovas-vision-for-energy-efficient-ai-hardware/)
- [Green Always-On Sensing With Neuronova's Sub-μwatt Chip? (EE Times)](https://www.eetimes.com/podcasts/green-always-on-sensing-with-neuronovas-sub-%CE%BCwatt-chip/)

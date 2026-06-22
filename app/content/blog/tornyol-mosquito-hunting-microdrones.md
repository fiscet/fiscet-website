---
slug: tornyol-mosquito-hunting-microdrones
title: "Tornyol: micro-drones that hunt mosquitoes by the sound of their wings"
description: "Two founders, 40-gram drones, and a serious idea hiding behind a joke: chemical-free mosquito control that identifies the female by its wingbeat and runs the whole signal chain on board."
publishedAt: 2026-06-17
seriesOrder: 11
---

I ran into a startup this week with an idea that sounds like a joke until you look at how it works: micro-drones that hunt mosquitoes.

Tornyol (two founders, backed by Y Combinator) builds 40-gram drones (they started from toy drones) that patrol a space and take out mosquitoes mid-air. No chemicals, no traps, no spraying. What caught my attention is how they pick the target: the drone listens. It identifies female mosquitoes, the ones that actually bite, by the frequency of their wingbeat, separating that signal from background noise in real time.

The part I find genuinely clever is where the intelligence sits. Detection runs on a miniaturized ultrasonic phased-array sonar paired with an array of microphones (the prototype uses a Xilinx FPGA driving hundreds of PDM mics), and the signal processing happens on board, not in the cloud. Once a target is locked, control algorithms steer the drone to ram the mosquito while keeping clear of walls. It's heavy-duty DSP running on a few grams of electronics.

Two things make this matter beyond the novelty. Mosquitoes are still the deadliest animal to humans, and the default defense is dispersing insecticide into the environment. Tornyol's approach is selective and physical: it goes after only what bites and leaves the rest of the ecosystem alone. The planned product is a drone-plus-base-station that patrols a garden around the clock.

The skeptics were loud enough that people tried to community-note the demo as impossible, usually a good sign that someone built something new. Cheap parts plus clever software solving a serious problem: that's the kind of engineering I like.

## Sources

- Tornyol (official site): https://tornyol.com/
- Y Combinator (launch, Nov 2025): https://www.ycombinator.com/launches/Omt-tornyol-micro-drones-that-kill-mosquitoes

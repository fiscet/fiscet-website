---
slug: nyquis-ai-grid-fault-detection-wildfire
title: "Nyquis: catching the spark before it becomes a fire"
description: "A small startup is teaching power grids to recognize the electrical signature of a wildfire before it ignites, not just cut power after it does."
publishedAt: 2026-07-31
seriesOrder: 30
---

I keep coming back to grid-sparked wildfires, because the failure mode is almost always the same: something small goes wrong long before anything big does.

Most fires that start on power lines don't begin with a dramatic short circuit. They begin with a high-impedance fault: a frayed conductor, a branch brushing a line, a loose connection arcing quietly. These faults draw too little current to trip a breaker, so conventional protection equipment simply doesn't see them. The grid's only real defense today is reactive: cut power broadly when conditions get risky, or after a fire has already started.

Nyquis, a small startup piloting its technology in New Mexico, goes after the anomaly itself. Its sensors sit on distribution lines and read the electrical signal continuously, and models trained on the pattern of a developing high-impedance fault flag it to utility crews in real time. Socorro Electric Cooperative and Socorro County are now working on a grant to bring the sensors onto their local grid, precisely the kind of small, rural utility that can't afford a satellite constellation or a fleet of inspection drones.

Here's the clever part: Nyquis treats fault detection as a pattern-recognition problem rather than a current-threshold one, reading the "noise" on a line the way a model reads a sequence. That reframing is what lets it see faults conventional relays are structurally blind to.

The upside, if it holds up outside a pilot, is precision. Utilities today manage fire risk with a blunt tool, the public safety power shutoff, blacking out entire regions on windy days. A system that can name the specific pole or span with a developing problem replaces a blackout with a work order.

It's a quiet kind of AI story, no chatbot, no demo video, just a sensor getting better at noticing what it's already looking at. I like those the most.

## Sources

- [Socorro County grant could bring AI wildfire prevention technology to power grid](https://www.dchieftain.com/news/socorro-electric-co-op-eyes-ai-grid-wildfire-prevention/3085938)
- [Nyquis — Real-time Grid Fault Detection](https://nyquis.com/)

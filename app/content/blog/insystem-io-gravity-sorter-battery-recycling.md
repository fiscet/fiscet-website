---
slug: insystem-io-gravity-sorter-battery-recycling
title: "inSystem.io: catching the battery hiding in your trash before it catches fire"
description: "A small Dutch startup built a free-fall sorting machine that pulls loose batteries out of household waste at 96 percent purity, using a camera that tracks each falling object instead of a conveyor belt."
publishedAt: 2026-07-27
seriesOrder: 29
---

I came across inSystem.io while reading about why recycling trucks keep catching fire, and the number that stopped me was this: a single fully loaded municipal waste truck contains, on average, 252 portable batteries. Nobody throws a battery away on purpose anymore, and yet globally only about 15 percent of them are ever properly recycled (in the Netherlands, a country that takes this seriously, it's still just half). The rest ride along in the household waste stream, get shredded with everything else, and occasionally ignite.

inSystem.io, a small Dutch recycling automation company, built a machine called the Gravity Sorter to pull those batteries back out before they cause damage. It targets the 5 to 70 millimeter size range, the band where batteries hide among metal fragments and where ordinary optical sorters and magnets struggle, because the material is small, dense, and moves unpredictably once it's mixed with everything else.

The clever part is what it does instead of a conveyor belt. Rather than accelerating objects to a few meters per second on a moving line, the Gravity Sorter just drops them. An AI vision system watches each piece fall at up to 400 frames per second, tracking its speed, rotation, and trajectory, and compressed-air nozzles fire at the exact calculated instant to knock the batteries sideways into a separate stream. CEO Evgeny Gudov's reasoning is almost disarmingly simple: why spend energy accelerating something on a belt when gravity, from the height of an ordinary chair, gets it to the same speed for free.

The result, according to the company, is more than 96 percent purity at up to six tons of material an hour, with a nice side effect: because the air only fires in the exact gap between falling objects instead of running continuously, the system uses noticeably less compressed air than older sorters.

It's not a flashy AI story. It's physics, timing, and a camera, aimed at a problem every recycling facility already has and nobody wants to hand-sort. That's usually where the good engineering lives.

## Sources

- [Dutch startup develops AI sorting system to recover batteries from household waste](https://roboticsandautomationnews.com/2026/05/13/dutch-startup-develops-ai-sorting-system-to-recover-batteries-from-household-waste/101448/)
- [Automated battery sorting reaches 96% purity](https://www.recycling-magazine.com/2026/05/13/battery-sorting-from-municipal-waste)

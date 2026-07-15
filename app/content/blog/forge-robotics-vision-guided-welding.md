---
slug: forge-robotics-vision-guided-welding
title: "Forge Robotics: the welding robot that measures before it moves"
description: "A tiny Irish-founded startup skips the teach pendant entirely. Forge scans each part to sub-millimeter accuracy first, then lets the welding arm plan its own path, closing the gap that leaves 10% of welded parts needing rework."
publishedAt: 2026-07-15
seriesOrder: 24
---

I came across Forge Robotics while reading about a number that surprised me: in the US alone there are roughly 400,000 unfilled welding jobs today, headed toward 600,000 by 2030. Manufacturing has a labor problem robots were supposed to solve decades ago, and mostly haven't.

The reason is duller than you'd expect. Industrial welding arms are usually taught by hand, once, for one exact part geometry, using a teach pendant. Any part that comes out of cutting or stamping slightly warped or misaligned, which is most of them, throws the arm off. Traditionally programmed welding robots end up needing rework on about 10 percent of parts, because the robot never actually looks at what it's welding. It just repeats a memorized path.

Forge, started by two founders out of Galway with backgrounds in mechatronics and computer vision, attacks that blind spot directly. A robot-mounted vision system scans every part to sub-millimeter accuracy, well under a tenth of a millimeter on the features that matter, builds a digital twin on the spot, and runs feature detection that finds the actual weld seams as they exist on that specific piece of metal, not the ideal CAD drawing. The arm then plans its own path from that live map, instead of replaying a script.

The clever part isn't the welding itself, it's the closed loop: measure first, then move, on every part, every time. Forge reports 99 percent first-pass yield against an industry baseline closer to 90. Small detail, big consequence: it turns robotic welding from something that only pays off on high-volume, identical parts into something that works on the messy, low-volume runs most fabricators actually deal with.

## Sources

- [Forge Robotics, Y Combinator](https://www.ycombinator.com/companies/forge-robotics)
- [Launch YC, Forge Robotics](https://www.ycombinator.com/launches/Oo6-forge-robotics-the-future-of-manufacturing)
- [Forge Robotics](https://forge-robotics.com/)

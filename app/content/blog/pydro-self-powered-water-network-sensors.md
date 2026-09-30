---
slug: pydro-self-powered-water-network-sensors
title: "Pydro: a water sensor that powers itself from the pipe it measures"
description: "A Hamburg startup built a flow meter with a tiny turbine inside, so it runs on the water it monitors and needs no battery, no cable, and no site visit."
publishedAt: 2026-09-30
seriesOrder: 57
lang: en
---

I found Pydro while scrolling a list of water-tech startups, and one line made me stop: a sensor with no battery. It sounds like a detail, but anyone who has worked with IoT knows that power is the real enemy. Underground chambers, flooded valve pits, pipes in the middle of nowhere: you either run a cable, or you send someone to swap batteries every few years.

Pydro, a Hamburg and Rostock company that grew out of the Startup Dock at Hamburg University of Technology, took the most direct route possible. Its PT1 device sits in the pipe and harvests energy from the water flowing through it, using a small integrated turbine. The same turbine doubles as a flow measurement, which I find quite elegant: one moving part, two jobs.

The spec sheet is concrete. It measures flow (about 0.16 to 13.9 litres per second, within 2%), pressure up to 10 bar, and temperature. It is rated IP68, so a flooded chamber is fine, and it reports to the cloud over LTE-M or NB-IoT with a built-in eSIM, sending data every minute. The company says installation takes under 30 minutes.

The clever part is what this unlocks. Water utilities lose roughly 30% of treated water on average worldwide, yet most of the network is invisible because instrumenting it is expensive. If a sensor costs nothing to power and nothing to maintain, you can afford to put many of them into the places nobody looks at, and let the cloud analysis spot a burst or a slow leak from pressure and flow patterns. Early deployments include Gelsenkirchen, Oslo, and Switzerland.

I would like to see independent numbers on how much water these networks actually save, since most figures I found are the company's own projections. Still, the idea is the kind I enjoy most: not a bigger model, but removing the one constraint everybody had accepted. Good engineering, applied to something as unglamorous and as vital as a pipe.

## Sources

- Hamburg Business, Hamburg's Pydro on a mission to save water: https://hamburg-business.com/en/news/hamburgs-pydro-mission-save-water
- Pydro, Self-Powered Smart Turbine Flow Meter: https://www.pydro.com/flowmeter
- World Water-Tech Innovation Summit, Meet 17 Companies Driving Water Innovation: https://www.worldwatertechinnovation.com/articles/meet-water-start-ups-2026

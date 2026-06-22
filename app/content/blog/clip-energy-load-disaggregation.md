---
slug: clip-energy-load-disaggregation
title: "CLIP Energy: reading every appliance from a single number"
description: "One non-invasive clip-on sensor plus a neural net that disaggregates the load, turning a single meter reading into appliance-by-appliance insight, and cutting bills ~20%."
publishedAt: 2026-06-12
seriesOrder: 7
---

I came across a UK startup doing something that, put plainly, sounds like magic: figuring out which appliances you have running at home by looking at a single number.

The starting point got me. The meter only sees total consumption, one figure. It doesn't know whether you're running the oven, the dryer, or the old fridge that's pulling more than it should. You pay, but in the dark.

CLIP Energy clips a single non-invasive sensor onto the main cable, with no electrician and no rewiring, and runs a neural network on top that, every two seconds, "decomposes" the total consumption and recognizes the individual appliances.

The clever part is right there: every appliance has its own electrical signature when it switches on, and the model learns to separate them in real time. One sensor, not one per outlet. Poor data turned into useful information.

The claimed result is an average bill reduction of around 20%, simply because you finally see where the energy goes.

Maybe, with this kind of granularity, the home will one day warn you on its own when a device starts to degrade. Bring on the AI that saves energy, and money, without asking you to change anything.

## Sources

- CLIP Energy: https://www.clipenergy.co.uk/
- South African Journal of Industrial Engineering: https://sajie.journals.ac.za/pub/article/view/3350

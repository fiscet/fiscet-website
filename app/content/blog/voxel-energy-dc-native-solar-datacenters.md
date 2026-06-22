---
slug: voxel-energy-dc-native-solar-datacenters
title: "Voxel Energy: powering data centers by never leaving DC"
description: "The bottleneck for AI data centers isn't chips — it's a multi-year wait to plug into the grid. Voxel skips the grid entirely with off-grid solar, second-life EV batteries, and a microgrid that stays DC end to end."
publishedAt: 2026-06-22
seriesOrder: 13
---

I came across Voxel while reading about why AI data centers keep slipping their schedules. I assumed the holdup was chips or construction. It turns out the wall is much more boring: getting permission to plug into the electrical grid. Interconnection queues now run anywhere from two to seven years in many regions — you can finish the building and still sit idle, waiting for the utility.

Voxel Energy (Y Combinator, Winter 2026) decided to stop waiting. They build data centers that run off-grid, powered by on-site solar and stored in second-life EV batteries — the packs retired from electric cars that still hold a large chunk of their original capacity and would otherwise head straight to recycling. No utility connection, deployable in months instead of years.

The clever part, to me, isn't the off-grid idea itself — it's that they keep everything in DC. Solar panels produce direct current. Batteries store direct current. The servers inside the racks ultimately run on direct current too. The conventional setup converts DC to AC to feed the grid or the building, then back to DC at the rack, losing a slice of energy at every hop. Voxel's DC-native microgrid skips those conversions, so a system that already dodged the interconnection queue also stops bleeding power into pointless round-trips.

It isn't only theory: in 2025, battery recycler Redwood Materials stood up a 12 MW / 63 MWh second-life microgrid to run a 2,000-GPU AI cluster outside Reno, so the building blocks are proven at real scale.

What I like here is the framing. Everyone is racing to manufacture more power; Voxel is quietly reusing power infrastructure we were about to throw away, and refusing to pay the conversion tax on the way in. The most interesting energy story around AI might not be a bigger plant — it might be a smarter wire.

## Sources

- Voxel Energy / Y Combinator: https://www.ycombinator.com/companies/voxel-energy
- "Second-life EV batteries approved for data center microgrid expansion" / pv magazine: https://www.pv-magazine.com/2026/03/25/second-life-ev-batteries-approved-for-data-center-microgrid-expansion/

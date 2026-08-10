---
slug: vaire-computing-reversible-chips
title: "Vaire Computing: chips that recycle their own heat"
description: "A London and Cambridge startup is building processors where computation runs both forward and backward, so the energy that would normally leak out as heat gets reused for the next calculation."
publishedAt: 2026-08-10
seriesOrder: 34
---

I was reading about the cooling bill behind every AI data center when I found a startup trying to make the heat disappear at the source, not after the fact.

Vaire Computing, a small team out of London, Cambridge and Seattle founded in 2021 by Dr. Hannah Earley and Rodolfo Rosini, builds chips around reversible computing. The premise is almost embarrassingly simple once you hear it: a classical logic gate takes two units of bit-energy in, uses one to produce the output, and throws the other away as heat because the calculation only runs in one direction. Vaire's gates run in both directions. Instead of discarding the input information, the chip swings it back through a resonator and reuses it to power the next calculation.

The clever part is that this is not a simulation or a paper claim. Their Ice River test chip, fabricated in 22 nm CMOS, is the first full-stack demonstration of reversible computing built inside a real foundry. The resonator recycled about half its energy on average, and the design hit an energy-recovery factor above 1 (1.77 on a capacitor array, 1.41 on an adder), meaning it genuinely recovered more energy than it spent proving the concept. It runs at 500 MHz today, with a 1 GHz version targeted for the next tape-out.

Classical semiconductors recycle exactly 0% of their energy. Vaire's own long-term math says reversible logic could eventually deliver a 4,000x efficiency gain over conventional CMOS, though that number sits 10 to 15 years out and depends on much better resonators than today's. What's real right now is a commercially competitive AI inference chip targeted for 2027.

Most "AI energy crisis" stories are about building bigger power plants or smarter cooling. This one questions whether a chip has to throw energy away at all. If reversible logic scales the way Vaire hopes, the fix for AI's power problem might not be more electricity. It might be a chip that barely needs any to begin with.

## Sources

- Vaire Computing: https://vaire.co/
- DataCenterDynamics, Vaire Computing tapes out demo chip: https://www.datacenterdynamics.com/en/news/vaire-computing-tapes-out-demo-chip-capable-of-recycling-50-of-its-energy-intensity/
- DataCenterDynamics, Here, Vaire, and everywhere: A bet on billions of reversible computing chips: https://www.datacenterdynamics.com/en/analysis/vaire-computing-reversible-computing-semiconductor-chip/

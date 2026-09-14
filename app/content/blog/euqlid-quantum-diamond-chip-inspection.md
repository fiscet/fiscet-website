---
slug: euqlid-quantum-diamond-chip-inspection
title: "EuQlid: seeing inside a chip without cutting it open"
description: "A small Maryland startup uses synthetic diamonds and machine learning to map buried currents inside 3D chips, replacing the slicing and grinding that chip inspection has always required."
publishedAt: 2026-09-14
seriesOrder: 51
lang: en
---

I kept seeing headlines about 3D-stacked chips and chiplets, and it made me wonder how anyone actually checks whether the connections buried inside all those layers still work. Until recently, the honest answer was often: you don't, not without destroying the chip first.

EuQlid, a small team out of College Park, Maryland, founded by physicists from Harvard, Yale and the University of Maryland alongside semiconductor veterans from Cadence and Texas Instruments, built a scanner that gets around that problem. Their platform, Qu-MRI, uses microscopic synthetic diamonds engineered with nitrogen-vacancy centers, tiny defects in the crystal lattice that react to nearby magnetic and electric fields. Shine green light on them and they fluoresce red; when current flows through a buried interconnect close by, that fluorescence shifts in a way the sensor picks up. Signal processing and machine learning then turn those shifts into current maps, pinpointing exactly where a connection is broken or a defect is hiding, layers deep inside the chip.

The clever part is what this replaces: grinding or slicing through a chip to inspect it, which destroys the part being tested, or slow X-ray methods with limited resolution. EuQlid claims Qu-MRI runs about 100 times faster than X-ray inspection, reads down to 100-150 micrometers non-destructively, and is fast enough for inline use on a production line, not just in a lab.

The underlying sensing technology is not brand new. EuQlid's earlier diamond microscope, built for geoscience and bioimaging, is already running at Harvard, NYU, Oxford and Curtin University. Pointing that same physics at semiconductors puts EuQlid inside a metrology and inspection market worth over $10 billion a year, one growing fast as chipmakers move to 3D stacking that makes hidden defects far more expensive to catch late.

What I like here is that it is not another model or chatbot. It is a genuinely different way of looking inside matter, quantum sensing aimed squarely at a problem that AI's own hardware boom keeps making more urgent.

## Sources

- Tom's Hardware, Quantum diamond scanner delivers non-invasive 3D imaging of semiconductors: https://www.tomshardware.com/tech-industry/semiconductors/quantum-diamond-scanner-delivers-non-invasive-3d-imaging-of-semiconductors-euqlid-qu-mri-could-save-chip-foundries-billions-of-dollars
- The Quantum Insider, EuQlid Emerges from Stealth With Quantum Sensing Platform: https://thequantuminsider.com/2025/11/04/euqlid-emerges-from-stealth-with-quantum-sensing-platform-for-3d-imaging-of-semiconductors-and-batteries/

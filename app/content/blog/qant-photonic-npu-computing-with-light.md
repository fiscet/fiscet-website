---
slug: qant-photonic-npu-computing-with-light
title: "Q.ANT: doing AI math with light instead of transistors"
description: "A small Stuttgart team built a processor that runs neural-network math inside optical waveguides, claiming far lower energy because light barely heats up and one optical element replaces hundreds of transistors."
publishedAt: 2026-06-26
seriesOrder: 15
---

I keep reading that AI's real wall is not intelligence, it is electricity. So a startup that attacks the problem at the level of physics, rather than the model, immediately caught my attention.

Q.ANT, a small team out of Stuttgart, builds a processor that does math with light. Not as a metaphor: their Native Processing Unit runs the actual calculations inside optical waveguides, where the computation is a property of how light moves through a special material (thin-film lithium niobate), instead of billions of transistors switching on and off.

The surprising part for me was the efficiency claim, and where it comes from. In a normal chip, a nonlinear function (the kind neural networks lean on heavily) takes thousands of transistors and a lot of switching. In Q.ANT's design, a single optical element can do the same job, replacing somewhere between 100 and 1,000 transistors. Light barely heats up, so the chip skips most of the cooling overhead that can eat up to 40% of a data center's energy. They claim up to 30x lower energy use and 50x higher performance on the workloads that fit.

The clever bit is computing those nonlinear functions natively, in analog, in the optical domain. A network can then reach the same accuracy with far fewer parameters and shallower training, the opposite of the "just add more compute" reflex.

What I like is that this is not a lab toy: the NPU 2 ships as a plain 19-inch server with a normal x86 host and C++/Python APIs, slotting into existing machines over PCIe. In one year they went from recognizing digits to learning images.

If light-based computing really scales faster than silicon, the next efficiency jump in AI might not come from a smarter model at all. It might come from changing what does the arithmetic.

## Sources

- Q.ANT, The photonic AI accelerator: https://qant.com/photonic-computing/
- The Quantum Insider, Q.ANT releases new photonic processor for AI and HPC (Nov 2025): https://thequantuminsider.com/2025/11/19/qant-next-gen-photonic-npu/
- Q.ANT, Native Processing Unit and energy efficiency through light: https://qant.com/news/q-ant-takes-photonic-ai-computing-commercial-as-ais-power-demand-surges/

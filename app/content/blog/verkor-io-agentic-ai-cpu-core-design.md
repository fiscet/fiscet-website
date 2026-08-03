---
slug: verkor-io-agentic-ai-cpu-core-design
title: "Verkor.io: an AI agent designed a CPU core from a 219-word prompt"
description: "A chip design startup built an agentic harness that turned one written spec into a working RISC-V CPU core in twelve hours, no human writing the register-transfer code."
publishedAt: 2026-08-03
seriesOrder: 31
---

I ran into this one while reading about chip design, a field I don't normally follow closely, and it stopped me: a startup called Verkor.io fed a single 219-word specification to an AI agent, and twelve hours later had a complete, working CPU core.

The core, named VerCore, uses the open RISC-V instruction set and runs at 1.48 gigahertz, roughly matching an Intel Celeron chip from 2011. Not fast by today's standards, but that's not the point. The point is that nobody wrote a line of the register-transfer level code, planned the layout, or debugged the timing by hand.

Here's the clever part: Verkor didn't train a specialized model for chip design. They built a harness, called Design Conductor, that forces a general AI agent through the same steps a human chip team would follow: design, implementation, testing, layout, and back again whenever something breaks. The system manages its own subagents and a working file database, calling existing tools (an open-source 7-nanometer design kit, the Spike RISC-V simulator) exactly where a human engineer would reach for them.

It's not flawless. At one point the agent got stuck chasing a timing bug, made broad speculative changes instead of narrowing in on the cause, and only found the fix after several wrong turns. The team calls this "trading experience for compute": the agent is slower and less elegant than a senior engineer, but it never needs sleep, and its floor keeps rising every few months.

What strikes me is the shift in scope. A small team, not a hyperscaler's chip division, took a project usually measured in engineer-years and reduced it to twelve hours plus a paragraph of intent. If that curve holds, the barrier to designing custom silicon stops being headcount and starts being imagination.

## Sources

- [How Agentic AI Chip Design Built a Full RISC-V Core, IEEE Spectrum](https://spectrum.ieee.org/ai-chip-design)

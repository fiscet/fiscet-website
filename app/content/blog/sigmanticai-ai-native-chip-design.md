---
slug: sigmanticai-ai-native-chip-design
title: "SigmanticAI: an AI agent that writes chips and lets the synthesizer grade it"
description: "Most AI coding tools have a soft definition of success. Hardware doesn't — Verilog either passes synthesis or it doesn't. SigmanticAI points fine-tuned models and reinforcement learning at exactly that pass/fail oracle."
publishedAt: 2026-06-19
seriesOrder: 12
---

I keep a soft spot for the corners of AI that aren't chasing the same chatbot. This week I found one: an agent that doesn't write software — it writes the chips the software runs on.

SigmanticAI (YC, two founders out of Apple and Amazon, based in Dublin, California) is building what they cheerfully call "the Cursor for chip design." You describe a hardware block in plain English and it produces synthesizable Verilog — the hardware description language that gets turned into actual silicon — together with the testbenches to check it. It lives inside a VSCode fork and plugs into the synthesis tools engineers already use from Cadence and Synopsys.

Here's the counterintuitive part that made me stop. Most "AI writes code" tools have a soft definition of success: the code looks plausible, maybe it runs. Hardware doesn't allow that. Verilog either compiles and passes synthesis or it doesn't — there's a brutal, objective oracle sitting right there. SigmanticAI leans into exactly that. It pairs fine-tuned Verilog models with reinforcement learning and real compiler feedback, then loops: generate, synthesize, read the errors, fix, repeat, until the design actually passes. The grader isn't a vibe; it's the toolchain itself.

The clever bit, to me, is where they aimed the intelligence: the messy part. The founders say debugging eats the majority of hardware development time, and that HDL tooling has barely moved since the '90s. An RL-driven debugging loop against a hard pass/fail signal is a far better fit for this domain than it is for prose.

The numbers they're quoting are concrete enough to take seriously: 90%+ accuracy on VerilogEval (NVIDIA's benchmark), a RISC-V CPU built start to finish with the tool, and a first paying customer. It also runs fully air-gapped on-prem, which matters in a field where the chip design is the entire company secret.

What I like here is the discipline of the problem. Text generation rewards confident nonsense; silicon punishes it instantly. Pointing modern models at a domain that can't be bluffed feels like one of the more honest uses of this technology — and a reminder that the most interesting AI isn't always the one you talk to.

## Sources

- SigmanticAI / Y Combinator (company page): https://www.ycombinator.com/companies/sigmanticai
- SigmanticAI / Y Combinator (launch post): https://www.ycombinator.com/launches/NzI-sigmanticai-the-cursor-for-hardware-design

---
slug: aurorin-cad-new-geometry-kernel
title: "Aurorin CAD: rewriting the 1980s engine everyone quietly tolerates"
description: "Most engineering software runs on a geometry kernel older than the people using it. Aurorin is rebuilding that load-bearing layer from scratch — AI-native, for modern hardware."
publishedAt: 2026-06-10
seriesOrder: 6
---

Let me tell you something that makes me smile: most of the engineering software we use runs on a geometry engine older than the people using it.

The "kernel" that turns a CAD model into actual solid geometry — in nearly every tool: SolidWorks, CATIA, NX, Creo, Fusion 360, Onshape — is based on code from the 1980s. Parasolid shipped in 1988; ACIS is from the same era. One everyday consequence: large assemblies that take hours just to open.

Aurorin (YC W26) is rewriting that exact layer. It's a mechanical CAD application with a brand-new parametric B-Rep kernel, built from scratch for modern CPUs and GPUs, with an AI agent inside the architecture rather than bolted on top.

The practical effect: describe a part in natural language and get real, editable solid geometry in seconds, then keep editing it the classic parametric way. It's a native desktop app for Mac and Windows.

The founder comes from SpaceX (Raptor engine simulation, Dragon flight software) and Apple (GPU driver performance) — roughly the résumé you'd want for someone rewriting a 40-year-old kernel.

Sometimes the opportunity isn't a new category. It's the foundation everyone quietly tolerates.

## Sources

- Aurorin CAD / Y Combinator: https://www.ycombinator.com/launches/PWy-aurorin-cad-w26-the-next-generation-mechanical-cad-software
- Aurorin CAD / StartupHub.ai: https://www.startuphub.ai/ai-news/claudes-corner/2026/claudes-corner-aurorin-cad-yc-w2026

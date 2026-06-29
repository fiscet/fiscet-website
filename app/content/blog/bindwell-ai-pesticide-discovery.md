---
slug: bindwell-ai-pesticide-discovery
title: "Bindwell: designing safer pesticides with AI before the lab"
description: "A tiny team built three neural models that predict a pest protein's shape, screen millions of compounds in hours, and flag when a prediction can't be trusted."
publishedAt: 2026-06-29
seriesOrder: 16
---

I do not usually expect to find clever AI in a field as old as crop protection, which is exactly why Bindwell stuck with me.

The problem is real and a bit grim. Pests keep evolving resistance, so chemicals that worked a decade ago slowly stop working, and discovering a new pesticide has traditionally meant years of trial and error at the bench. Bindwell, a tiny team that came out of Y Combinator, decided to attack that loop with models instead of test tubes.

Their stack is three neural models doing three jobs. Foldwell predicts the 3D shape of a pest's target protein, so chemists know exactly where a molecule should bind. They claim it runs about four times faster than AlphaFold 3, which matters when you are mapping a lot of targets. PLAPT then screens candidates: it can score essentially every compound ever synthesized, millions of them, in roughly six hours, narrowing the field to the few that might actually stick. For biological pesticides, a third model called APPT looks at protein-to-protein interactions instead.

The clever part, for me, is not raw speed. It is the uncertainty quantification baked in: the models tell you when to trust a prediction and when you still need a real experiment. That is the honest version of AI for science, and it is what keeps the whole thing from being a confident hallucination generator pointed at agriculture.

What I like is the leverage. Work that used to take days of bench chemistry collapses into seconds of inference, so a small team can explore chemical space that big agro labs would never have time to cover. And if it leads to pesticides that are safer and slower to breed resistance, that is a quietly important outcome.

Curious to see whether models, not molecules, become the next bottleneck.

## Sources

- Bindwell, AI pesticide discovery company: https://bindwell.ai/
- Bindwell, Defeating pests with AI models: our first-principles approach: https://bindwell.com/posts/defeating-pests-with-ai
- Bindwell Raises \$6M to Discover New, Safer Pesticides with AI (Business Wire): https://www.businesswire.com/news/home/20251103558856/en/Bindwell-Raises-\$6M-to-Discover-New-Safer-Pesticides-with-AI
- TechCrunch, Teen founders raise \$6M to reinvent pesticides using AI: https://techcrunch.com/2025/11/13/teen-founders-raise-6m-to-reinvent-pesticides-using-ai-and-convince-paul-graham-to-join-in/

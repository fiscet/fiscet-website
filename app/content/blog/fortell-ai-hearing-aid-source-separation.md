---
slug: fortell-ai-hearing-aid-source-separation
title: "Fortell: teaching a hearing aid to separate voices instead of guessing presets"
description: "A four-founder New York startup built a custom chip that runs real-time AI source separation inside a hearing aid, tackling the cocktail-party problem old presets never solved."
publishedAt: 2026-09-23
seriesOrder: 54
lang: en
---

I stumbled on this one through a hearing aid review, of all things, where the lab tester kept re-running his numbers because the results seemed too good to be true. The product is Fortell, a small New York startup founded by four people (Matt de Jonge, Andrew Casper, Cole Morris, and Igor Lovchinsky) after watching their own grandparents go quiet at family dinners once hearing loss set in.

The insight behind it: hearing loss is only half an ear problem. Amplifying sound is the easy part; manufacturers solved that decades ago. The hard part is the brain's part, telling speech apart from noise, which is exactly what healthy hearing does automatically at a crowded table. Conventional hearing aids classify the room ("restaurant," "car," "quiet office") and apply a matching preset, but to that preset a voice and a dishwasher are just two overlapping frequencies. Fortell instead trained a neural network to separate sound sources in real time, deciding stream by stream what to keep and what to cut, then built a custom coprocessor to run it inside the hearing aid itself: about 100 billion operations per second, roughly 235 times the compute of a standard hearing aid chip, at under 10 milliseconds of latency, fast enough that sound never drifts out of sync with the lips you're reading.

The clever part isn't the neural network (source separation research is old news). It's squeezing full separation into a device that has to sit behind an ear and run all day on a coin-sized battery, then proving it in a lab: independent testing this month gave Fortell the strongest speech-in-noise score that lab has ever measured, and the company's own blinded trials reported most wearers preferring it over top competitors.

It's not flawless: the aggressive processing can make your own voice sound boomy, and Android support is still missing. But roughly one in eight Americans has hearing loss, and fewer than one in six of them wears a hearing aid at all. A device that restores the understanding part of hearing, not just the volume, seems worth those trade-offs.

## Sources

- [Fortell AI Hearing Aids Lab Review](https://www.hearingtracker.com/hearing-aids/fortell-ai-hearing-aids)
- [The Startup Using AI To Make Hearing Aids Better (Forbes)](https://www.forbes.com/sites/innovationrx/2026/07/29/the-startup-using-ai-to-make-hearing-aids-better/)
- [A Letter From Our Founders (Fortell)](https://www.fortell.com/blog/a-letter-from-the-founders-of-fortell)

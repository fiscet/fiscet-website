---
slug: rxall-rxscanner-offline-counterfeit-drug-detection
title: "RxAll: the pill scanner that learned to work without a data center"
description: "A Nigerian startup builds a handheld scanner that spots fake pills in seconds. When the internet failed during a live demo, the fix reshaped the whole product."
publishedAt: 2026-07-17
seriesOrder: 25
---

I came across this one in an IEEE Spectrum piece about "small AI," and the origin story stuck with me more than the technology itself. In 2019, Adebayo Alonge was in a Cape Town hotel room, about to demo his startup's device for spotting fake medicine. It didn't work. His server was in the US, and getting the result of a single pill scan took over five minutes.

RxAll's product, the RxScanner, is a handheld spectrometer: point it at a pill, it shines infrared light on it, reads the molecular profile, and matches that against a pharmaceutical database to tell you in seconds whether the drug is genuine. Pharmacies across a dozen countries, including Ghana, Kenya, Myanmar and Nigeria, already use it.

The clever part isn't the spectrometer. It's what happened after the failed demo: Alonge's engineers shrank the AI model down to run entirely on an Android phone, no server, no connection, two hours of work. That constraint became the actual product: a scanner that authenticates medicine in places without broadband, computers, or even reliable electricity.

The stakes make sense of the effort. The counterfeit drug trade in Africa is estimated at $30 billion, and roughly one in ten drugs sold in developing markets is fake. Alonge isn't solving this in the abstract: in 2006 he nearly died after taking pills contaminated with lethal levels of diazepam.

RxAll fits a pattern IEEE Spectrum calls "small AI": models pruned or distilled down to a few megabytes, running on cheap chips, sometimes on solar power, built for the roughly 99 percent of the world's poorest internet users who have never touched a chatbot. It's a quieter story than most AI news this year, and a more useful one: a model small enough to run on a five year old phone, deciding whether the pill in your hand will help you or kill you.

## Sources

- [Small AI Models Gain Traction Around the World (IEEE Spectrum)](https://spectrum.ieee.org/small-language-models-ai-pharmaceuticals)
- [World Changing Ideas 2025: RxAll is using AI to eliminate counterfeit prescription drugs (Fast Company)](https://www.fastcompany.com/91336645/rxall-world-changing-ideas-2025)
- [Startup Stories: Curbing the Spread of Counterfeit Medicine (Yale School of Management)](https://som.yale.edu/story/2024/startup-stories-curbing-spread-counterfeit-medicine)

---
slug: visionary-ai-software-isp
title: "Visionary.ai: throwing out a chip that's been in every camera for decades"
description: "An all-software, AI-based ISP that works on the sensor's RAW signal before it's degraded — +75% object detection and −91% false positives in low light, all at the edge."
publishedAt: 2026-06-15
seriesOrder: 10
---

I ran into a startup that did something fairly bold when you think about it: they threw out a piece of hardware that's been inside practically every camera for decades.

I'm talking about the ISP, the chip that turns the sensor's signal into the image we see. Visionary.ai replaced it with an all-software, AI-based ISP. The difference isn't cosmetic: their model works on the sensor's RAW signal before it's compressed and impoverished — right where all the information still is. The result shows up most of all in the dark: denoising, HDR, and exposure handled in real time.

The numbers they published (tests with Chips&Media) got my attention: in low light, over +75% accuracy in detecting objects and −91% false positives. And it all runs at the edge, on an NPU.

The part I find genuinely smart is something else: because it's software, the camera's "views" can be updated even after the product is already in the field. A hardware ISP, once soldered, is what it is forever. Maybe with this approach cars, drones, and security cameras will see better in the dark without fitting bigger, pricier sensors — the gain comes from the model, not the glass.

## Sources

- Visionary.ai (Edge AI and Vision Alliance): https://www.edge-ai-vision.com/2026/04/2026-edge-ai-and-vision-product-of-the-year-award-winner-showcase-visionary-ai-camera-or-sensor/
- Chips&Media + Visionary.ai (Security Info Watch): https://www.securityinfowatch.com/ces-show/news/55341303/visionary-products-chipsmedia-and-visionaryai-introduce-first-fully-ai-driven-image-signal-processor-redefining-camera-pipelines

---
slug: bucket-robotics-synthetic-data-inspection
title: "Bucket Robotics: training the AI before the part even exists"
description: "Instead of photographing thousands of defective parts, Bucket generates the vision model straight from CAD with synthetic data, so quality control is ready before production starts."
publishedAt: 2026-06-15
seriesOrder: 9
---

Browsing the web, I ran into a startup that took a deeply boring problem, factory quality control, and flipped it in a way that grabbed my attention.

Normally, to teach a camera to recognize a scratch or a dent, it takes weeks: you photograph thousands of real defective parts and label them by hand, one by one. Bucket Robotics (a small team out of the self-driving world) does the opposite. It starts from the part's CAD file, before the physical part even exists.

From the 3D model they generate synthetic data, simulating lights, reflections, variations, and the look of the defects themselves, and train the vision system right there. That's the clever bit: quality control is ready before production even begins, with no need to stop the lines to collect images. They claim activation up to 50x faster than traditional integrators, from weeks to days.

It strikes me because it attacks the real bottleneck of so many AI projects: not the model, but the data. And it does so on reflective surfaces and constantly changing parts, exactly where fixed-rule systems give up. Maybe it's the sign that "real data" is no longer the only way to start.

## Sources

- Bucket Robotics (Y Combinator): https://www.ycombinator.com/companies/bucket-robotics
- Launch YC, Bucket Robotics: https://www.ycombinator.com/launches/LXd-bucket-robotics-vision-for-manufacturing

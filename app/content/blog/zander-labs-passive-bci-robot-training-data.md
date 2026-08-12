---
slug: zander-labs-passive-bci-robot-training-data
title: "Zander Labs: teaching robots from the exact moment a human notices a mistake"
description: "A small German-Dutch neuroscience startup builds a brain-wave headset that flags the instant a person registers error or surprise, adding that signal to the training data robots learn from."
publishedAt: 2026-08-12
seriesOrder: 35
---

I came across this while reading about a warehouse in California where people wear headsets to teach robots how to pour coffee and stack poker chips, and one detail stopped me: the headset was also reading their brain waves.

The warehouse belongs to Encord, a company that manufactures training data for humanoid and warehouse robots. The headset came from Zander Labs, a small German-Dutch startup built on neuroscientist Thorsten Zander's two decades of work on passive brain-computer interfaces: EEG systems that don't wait for a conscious command like a cursor click, but decode mental states that happen on their own, error, surprise, workload, while a person just does the task in front of them.

That's the clever part. Robots mostly learn to manipulate objects from video: a camera watches a hand pour, grip, or plug in a cable, and a model tries to copy the motion. But video doesn't say when something actually mattered. If a "pilot," Encord's term for these human trainers, fumbles a cable or catches a toppling block, their brain registers that error or surprise before they consciously react to it. Zander Labs' headset catches that signal in real time and tags it onto the footage, adding a layer video alone can't give: not just what happened, but the instant the brain flagged that it mattered.

Zander Labs neuroscientist Lukas Gehrke frames it as a way to teach models when to spend more compute: the amount of brain activity at a given moment is a clue about how hard the task actually is. Encord treats this as a trial for now, building a small brain-tagged dataset and checking whether it measurably improves a robot model before scaling it up.

It's an odd pairing, decades of BCI research on assistive tech and stress detection ending up glued to a Jenga tower in a robotics lab, but that's usually how the more interesting AI infrastructure gets built: not from a new model, but from a new kind of signal nobody thought to record.

## Sources

- [Are brain waves the next unlock for physical AI? (TechCrunch)](https://techcrunch.com/2026/07/26/are-brain-waves-the-next-unlock-for-physical-ai/)
- [Zander Labs](https://www.zanderlabs.com/)
- [Thorsten O. Zander (Wikipedia)](https://en.wikipedia.org/wiki/Thorsten_O._Zander)

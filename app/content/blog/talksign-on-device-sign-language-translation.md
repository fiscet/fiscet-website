---
slug: talksign-on-device-sign-language-translation
title: "Talksign: skipping the cloud to translate sign language in real time"
description: "A self-funded Nigeria-and-UK team builds a bidirectional ASL translator that runs on hand landmarks instead of raw video, so it keeps working offline and under 100ms."
publishedAt: 2026-07-21
seriesOrder: 26
---

I ran into Talksign while reading about a Nigerian founder taking on Google's SignGemma, and the detail that stopped me wasn't the rivalry. It was the decision to throw away video streaming entirely.

Edidiong Ekong, who learned ASL at nine to talk with three deaf friends in Nigeria, co-founded Talksign in November 2025 with AI engineer Kazi Rahman. Most sign language systems stream webcam footage to a remote server and let a big model do the interpreting there. That works fine on fast, cheap connections. It falls apart in most of the world, where data is expensive and links drop constantly.

Talksign-1 does the opposite: it extracts hand and body landmarks directly in the browser, a small stream of 3D coordinates instead of a video file, and translates that locally. No raw footage ever leaves the device. That's the clever part: by processing skeletons instead of pixels, the model gets fast enough to run offline and still respond in under 100 milliseconds, and privacy comes almost for free as a side effect of the architecture, not a separate feature bolted on afterward.

The system is bidirectional. It reads 250 ASL signs from a webcam at 84.7% accuracy and turns them into speech or text, and it also converts typed or spoken words back into sign language video, so a hearing person can sign back. Ekong's example was his own shoemaker in a Nigerian market negotiating sole types and delivery dates with hearing customers: a genuine two-way conversation instead of a one-sided announcement.

It's still early. Vocabulary is limited, fingerspelling and continuous sentences aren't supported yet, and the whole thing is self-funded rather than VC-backed. But the offline-first choice is what stays with me: a reminder that the useful constraint in AI right now often isn't model size, it's whether the product works when the network doesn't.

## Sources

- [Talksign Launches AI Model Translating ASL to Speech in Under 100ms](https://techafricanews.com/2026/02/17/talksign-launches-ai-model-translating-asl-to-speech-in-under-100ms/)
- [Talksign-1: A Nigerian is racing Google to build AI for deaf communication](https://thecondia.com/a-nigerian-is-racing-google-to-build-ai-for-deaf-communication/)

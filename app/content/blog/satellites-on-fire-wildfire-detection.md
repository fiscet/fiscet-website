---
slug: satellites-on-fire-wildfire-detection
title: "Satellites on Fire: beating NASA's wildfire alerts with more satellites, not a bigger model"
description: "Three Argentine students turned a school project into a wildfire detection platform that fuses eight satellite feeds and beats NASA's FIRMS alerts by roughly 35 minutes on average."
publishedAt: 2026-07-01
seriesOrder: 17
---

I keep noticing that some of the most useful AI work is not about a smarter model, it is about smarter plumbing around an old one. Satellites on Fire is a good example.

The company started in 2020 as a school project in Buenos Aires, after friends of one founder lost their home to wildfires in Córdoba. What struck me is how seriously they treated the failure of version one: they interviewed more than 80 firefighters and emergency responders, concluded the prototype was useless in the field, and rebuilt it from scratch. Franco Rodriguez Viau, now 22, still leads the company as CEO.

What they ended up building is a detection platform that pulls imagery from more than eight satellites across NASA, NOAA, and the European Space Agency, refreshed as often as every five minutes, and runs its own models on top to spot heat signatures and simulate how a fire will spread.

The clever part is not the AI itself, it is the aggregation. NASA's own FIRMS service, the reference most agencies rely on, uses fewer satellites with revisit gaps that can stretch for hours over Latin American territory. By stacking more feeds and closing those gaps, Satellites on Fire detects fires roughly 35 minutes ahead of FIRMS on average, and in one documented case in Argentina, about seven hours ahead.

The platform now covers 21 countries, serves more than 55,000 users, and has built a training set of over 20,000 field-validated fire reports, reportedly the largest of its kind in Latin America. It supported the response to more than 600 wildfires in 2025, and insurer Aon already uses it to price forestry policies across the region.

None of this needed a bigger model. It needed people willing to talk to 80 firefighters before writing a line of code. That is the part I wish more AI startups would copy.

## Sources

- Satellites on Fire: https://www.satellitesonfire.com/en
- The Next Web, Argentine wildfire AI startup raises $2.7M after building a detection system that beats NASA's alerts by 35 minutes: https://thenextweb.com/news/satellites-on-fire-wildfire-ai-raises-2-7m
- Newsweek, His hometown burned down. Then he used AI to do something about it: https://www.newsweek.com/teens-hometown-burned-down-then-he-used-ai-to-do-something-about-it-11026585

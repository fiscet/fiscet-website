---
slug: ai-governance-a-brief-history
title: "Artificial Intelligence and Its Governance: A Brief History and Where Things Stand Today"
description: "How AI's technical evolution and the regulation trying to keep up with it actually fit together — from the 2017 Transformer to the EU AI Act's 2026 enforcement."
publishedAt: 2026-09-10
seriesOrder: 42
---

Most conversations about artificial intelligence focus on what the technology can do. Fewer focus on how it got here, and fewer still on how it is being governed. Both questions matter for anyone making decisions about adopting AI in a business context — technical capability changes quickly, but the rules that govern its use change on a different, often slower, timeline. Understanding the gap between the two is, in practice, more useful than tracking the latest model release.

## How we got here: a brief technical foundation

The current generation of AI systems exists because of one architectural breakthrough combined with scale. In 2017, researchers published the Transformer architecture, which solved a long-standing limitation in how machines process language: earlier systems processed text sequentially and lost track of earlier context as sequences grew longer. The Transformer's self-attention mechanism let a model weigh the relevance of every part of an input against every other part, regardless of distance, and — just as importantly — it was well suited to being run in parallel on modern hardware.

That architecture, combined with increasingly large training datasets and increasingly large amounts of compute, produced the large language models in use today. The moment this became visible to the public was the release of ChatGPT in November 2022, which is a reasonable marker for when generative AI shifted from a research topic to a business one.

## A consistent pattern: regulation follows capability

Looking at the record, AI governance has consistently been a response to capability jumps rather than a preparation for them.

- The **OECD AI Principles** (2019) were the first intergovernmental AI standard, adopted well before generative AI existed, and were largely aspirational.
- After GPT-3 and the public release of ChatGPT, the pace changed. The **NIST AI Risk Management Framework** was published in January 2023 as a voluntary framework for organizations in the United States.
- In November 2023, the UK's AI Safety Summit produced the **Bletchley Declaration**, signed by 28 countries, addressing risks specific to frontier AI systems.
- The same year, **ISO/IEC 42001** (December 2023) became the first certifiable AI management system standard, and the European Union reached political agreement on what would become the **EU AI Act**.

In each case, the regulatory response came after the capability that prompted it, not before. This is worth stating plainly because it shapes what governance can realistically do: it manages risk retroactively and iteratively, not preemptively.

![Timeline diagram showing AI capability milestones (Transformer 2017, ChatGPT 2022) followed by governance responses at different speeds — a voluntary standard about two months later, binding law about twenty-one months later — plus the EU/US regulatory paths diverging after January 2025](/images/ai-governance-timeline.svg)

*Capability moves first, governance follows — but at very different speeds depending on whether the response is a voluntary standard or binding law.*

## Where things stand as of August 2026

Two developments define the current moment.

**The EU AI Act is now in full effect.** After entering into force in August 2024, its obligations were phased in: prohibited practices and AI-literacy requirements from February 2025, governance rules and obligations for general-purpose AI providers from August 2025, and — as of this month, August 2026 — the core obligations for high-risk AI systems apply to most use cases. This is a binding, risk-tiered legal framework, not a voluntary code of conduct.

**The United States has moved in the opposite direction.** An October 2023 executive order had mandated federal safety testing and the use of NIST standards. In January 2025, that order was rescinded and replaced with a policy explicitly oriented toward reducing regulatory barriers to AI development. The result is a genuine divergence between the two largest AI markets: one has increased binding oversight, the other has reduced it.

In the absence of a single global standard, a third layer has become more visible: companies publishing their own safety and governance frameworks voluntarily. Anthropic's Responsible Scaling Policy, first published in September 2023 and updated multiple times since, is one example — it defines internal capability thresholds that trigger additional safeguards, in the absence of a law requiring it to do so.

## What this means in practice

For an organization using or building with AI today, the practical governance stack is rarely just "the law." It is closer to four layers, in the following order of reliability: binding law where it applies (which varies significantly by jurisdiction and sector), industry standards that can be adopted voluntarily (ISO/IEC 42001, NIST AI RMF), the safety policies published by AI providers themselves, and — underneath all of that — the organization's own internal usage policy, which is the one layer that is always fully within its control.

The practical implication is straightforward: waiting for regulation to fully define what responsible AI use looks like is not a viable position, because regulation has consistently arrived after the fact. Organizations that build internal governance practices now — rather than waiting for a binding standard to require them — are simply better positioned for whichever version of the rules ends up applying to them.

## Closing

The technology has moved fast. Its governance has moved unevenly — sometimes ahead in one jurisdiction, absent in another, and frequently supplemented by voluntary standards and company policy rather than law. That is not a criticism of any single actor; it is a description of how governance for a fast-moving technology tends to work. The organizations that treat this as background context they can safely ignore are making a specific, avoidable bet — that the rules will not catch up to them before they need to comply.

---

**Sources:** [The History of Artificial Intelligence — IBM](https://www.ibm.com/think/topics/history-of-artificial-intelligence) · [EU AI Act — regulatory framework and timeline (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · [AI Governance Timeline — AI Governance Reference](https://aigovref.com/timeline) · [President Trump rescinds Biden's AI executive order — A&O Shearman](https://www.aoshearman.com/en/insights/ao-shearman-on-tech/president-trump-rescinds-bidens-ai-executive-order-and-announces-ai-investment) · [Anthropic's Responsible Scaling Policy](https://www.anthropic.com/responsible-scaling-policy)

---
slug: bylaw-ai-agent-evidence-gate
title: "Bylaw: catching the moment an agent trusts the wrong fact"
description: "A Waterloo team built the check nobody puts in front of an agent's write: not can it use the tool, but can it trust the evidence behind the decision."
publishedAt: 2026-07-06
seriesOrder: 19
---

I keep running into the same complaint from teams shipping AI agents: the agent called the right tool and still did the wrong thing. Bylaw, a small YC-backed team out of Waterloo, built a company around that exact gap.

Their point is sharp once you hear it. Guardrails answer "can this agent use this tool." Evals catch mistakes after the fact, once the damage is already done. Neither one checks whether the chat log, the policy doc, the CRM record, and the tool's own output actually agree at the moment the agent decides to write. So an agent can be fully authorized to issue a refund, call the tool correctly, and still approve it based on a customer's claim that contradicts the order history nobody bothered to check.

Bylaw sits as a gate between the agent and the sensitive action: a CRM update, a refund, a customer reply, a pricing change. Before the write goes through, it builds an "evidence manifest" of every fact the agent relied on: where it came from, when it was created, whether it was observed or inferred, whether it conflicts with another source. A policy engine, compiled offline from a team's plain-language rules and SOPs, then decides: allow, block, or route to a human.

The clever part is where they draw the line on the LLM. It helps translate messy human rules into structured policy ahead of time, but it never makes the runtime call. The decision has to be deterministic: the same evidence and the same policy always produce the same answer, which is also what makes the audit trail actually mean something.

The founders met studying computer science at Waterloo and had interned at places (Meta, Optiver, BitGo) where acting on a wrong fact tends to be expensive in a very literal sense. That background shows. This isn't AI safety as branding, it's plumbing for agents about to be trusted with real writes.

## Sources

- Bylaw: https://www.usebylaw.com/
- Bylaw on GitHub: https://github.com/UseBylaw

---
date: 2026-01-31
title: "Who Said CVE? How Vulnerability Identifiers Are Mentioned by Humans, Bots, and Agents in Pull Requests"
authors: Pien Rooijendijk, Christoph Treude, Mairieli Wessel
people:
- pien
- mairieli

paperURL: https://arxiv.org/abs/2601.19636
venue: MSR Mining Challenge
---
Vulnerability identifiers such as CVE, CWE, and GHSA are standardised references to known software security issues, yet their use in practice is not well understood. This paper compares vulnerability ID use in GitHub pull requests authored by autonomous agents, bots, and human developers. Using the AIDev pop dataset and an augmented set of pull requests from the same repositories, we analyse who mentions vulnerability identifiers and where they appear. Bots account for around 69.1% of all mentions, usually adding few identifiers in pull request descriptions, while human and agent mentions are rarer but span more locations. Qualitative analysis shows that bots mainly reference identifiers in automated dependency updates and audits, whereas humans and agents use them to support fixes, maintenance, and discussion.
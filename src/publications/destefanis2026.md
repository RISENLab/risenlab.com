---
date: 2026-01-31
title: "The Dose Makes the Agent: Therapeutic Index Analysis of AI Coding Contributions"
authors: Giuseppe Destefanis, Ronnie de Souza Santos, Marco Ortu, Mairieli Wessel
people:
- giuseppe
- ronnie
- mairieli

venue: MSR Mining Challenge
---
AI coding agents contribute thousands of pull requests daily to open-source repositories, yet practitioners lack empirical guidance on optimal contribution sizing. We adapt the therapeutic index framework from pharmacology to characterise the relationship between pull request size and integration outcomes. Analysing 33,078 agent-authored pull requests from the AIDev dataset across five AI coding agents, we model dose-response relationships for efficacy (merge probability) and toxicity (review friction). All agents exhibit statistically significant negative relationships between size and merge probability (p < 0.001), differing substantially in baseline performance (47.5% to 82.6%) and dose sensitivity. Task type substantially moderates these relationships: bug fixes exhibit ED50 of 1,467 lines [95% CI: 
1,025--2,216] with therapeutic index of 35.2, whilst features show ED50 of 18,234 lines [95% CI: 12,337--28,390] with therapeutic index of 2.3.  This 15-fold difference, confirmed by non-overlapping confidence intervals, indicates that bug fixes exhibit wider therapeutic windows whilst feature implementations exhibit narrower windows.
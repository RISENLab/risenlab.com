---
date: 2026-01-30
title: "Ask, Then Think: Enhancing LLM Performance with Socratic Reasoning"
authors: Antonio Della Porta, Jonan Richards, Lucageneroso Cammarota, Stefano Lambiase, Fabio Palomba, Mairieli Wessel
people:
- antonio
- jonan
- mairieli

venue: MSR Registered Reports
---
Large Language Models (LLMs) are widely used for code generation, repair, and explanation, yet they still make mistakes when instructions are vague or when their initial assumptions are wrong. Current prompting methods help models show their reasoning but do not encourage them to check whether that reasoning is sound. This confirmatory study introduces MIND, a Socratic-style prompting framework that guides models through self-questions aimed at clarifying the task, identifying missing information, and checking intermediate conclusions. We will evaluate the framework across four benchmarks covering code generation, repair, explanation, and efficiency, comparing it with methods such as Chain-of-Thought, Self-Ask, Self-Refine, and ReAct. We will also run an ablation study to examine which stages of the questioning process contribute most to performance.
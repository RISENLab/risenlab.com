---
date: 2025-11-14
title: "BRIDGE: Building Reliable Interfaces for Developer Guidance and Exploration through Static Analysis and LLM Translation"
authors: Krishna Narasimhan and Mairieli Wessel
people:
- krishna
- mairieli

venue: BENEVOL
---
Although LLMs are often applied to code-related tasks, they fail to represent the links between syntax and identifiers, limiting their ability to reason about program behaviour. Static analysis tools capture these relationships accurately but remain difficult to use due to specialised query languages and complex interfaces. We present BRIDGE, a system that applies LLMs to translation and delegates program analysis to static tools. BRIDGE translates natural language queries into formal analysis queries, executes them with established tools, and adapts its responses according to developer proficiency. A proof-of-concept built with open-source components shows that even small models can perform accurate translations when provided with clear specifications. It answers developer queries in under a second, correctly resolves syntactic relationships, and adapts explanations to different skill levels. This disruptive ideas and visionary explorations paper outlines the system’s architecture and an evaluation plan assessing accuracy, performance, and practical utility.

---
date: 2026-02-18
title: "An empirical study of the evolution of GitHub actions workflows"
authors: Pooya Rostami Mazrae, Alexandre Decan, Tom Mens, Mairieli Wessel
people:
- pooya
- mairieli

venue: JSS
---
CI/CD practices play a significant role during collaborative software development by automating time-consuming and repetitive tasks such as testing, building, quality checking, dependency and security management. GitHub Actions, the CI/CD tool integrated into GitHub, allows repository maintainers to automate development workflows. We conducted a mixed methods analysis of GitHub Actions workflow changes over time. Through a preliminary qualitative analysis of 439 modified workflow files we identified seven types of conceptual changes to workflows. Next, we performed a quantitative analysis over 49K+ GitHub repositories totaling 267K+ workflow change histories and 3.4M+ workflow file versions from November 2019 to August 2025. This analysis revealed that repositories contain a median of three workflow files, and 7.3% of all workflow files are being changed every week. The changes made to workflows tend to be small, with about three-quarters containing only a single change. The large majority of the observed changes have to do with task configuration and task specification in workflow jobs. We did not find any conclusive evidence of the effect of LLM coding tools or other major technological changes on workflow creation and workflow maintenance frequency. Our findings highlight the need for improved tooling to support fine-grained maintenance tasks, such as a broader adoption of dependency management and AI-based support for ensuring and sustaining workflow security and quality.

---
date: 2024-04-15
title: "Running a Red Light: An Investigation into Why Software Engineers (Occasionally) Ignore Coverage Checks"
authors: Alexander Sterk, Mairieli Wessel, Eli Hooten, Andy Zaidman
people:
- mairieli

paperURL: https://dl.acm.org/doi/abs/10.1145/3644032.3644444
venue: AST
award: Best Runner-up Paper
---
Many modern code coverage tools track and report code coverage data generated from running tests during continuous integration. They report code coverage data through a variety of channels, including email, Slack, Mattermost, or through the web interface of social coding platforms such as GitHub. In fact, this ensemble of tools can be configured in such a way that the software engineer gets a failing status check when code coverage drops below a certain threshold. In this study, we broadly investigate the opinions and experience with code coverage tools through a survey among 279 software engineers whose projects use the Codecov coverage tool and bot. In particular, we are investigating why software engineers would ignore a failing status check caused by drop in code coverage. We observe that >80% of software engineers - at least sometimes - ignore these failing status checks, and we get insights into the main reasons why software engineers ignore these checks.
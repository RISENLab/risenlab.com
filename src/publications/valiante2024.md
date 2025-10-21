---
date: 2024-09-30
title: "The Importance of Attributes in Predicting the Lifetime of Human and Automated Pull Requests"
authors: Leandro Ferrarezi Valiante, Mairieli Wessel, Manoel Limeira de Lima Júnior
people:
- mairieli

paperURL: https://sol.sbc.org.br/index.php/wbots/article/view/30518
venue: WBots
award: Distinguished Paper
---
Pull request (PR)-based workflows improves collaboration in software development; however, the influx of PRs in certain repositories is challenging. Bots, like Dependabot, automate PR creation but can cause communication noise, indicating the need for smarter tools. We investigated 197, 736 PRs from 90 open-source projects using regression algorithms to predict PR lifetimes. Results showed that in 21 repositories, Dependabot PRs were reviewed faster, whereas in 47 repositories, human PRs were quicker. The RMSE difference was notable, with 18, 338 minutes for human PRs and 5, 585 minutes for Dependabot PRs. Key attributes for prediction were similar across scenarios, although the number of commits was very important only for Dependabot PRs.
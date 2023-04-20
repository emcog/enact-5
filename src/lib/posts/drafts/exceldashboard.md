---
title: "Excel dashboard"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "_product"
- "office"
- "data-visualisation"
- "ui"
coverWidth: 16
coverHeight: 9
excerpt: Saving money for one of the big four accountancy firms
---

I recently built a dashboard for one of the big-four accountancy firms. This is used to help 
them visualise costs and potential saving. It generates graphs in real time and allows the user
to compare costs.

Using excel is "default behviour" within the organsisation, so this was idea tool to seed the idea.
It was then used to coax staff to adopt a more complex database driven system.


The design and implementation of the project followed software design and development 
conventions where possible. It was separated into a front and back end. Front end for data
input and back end where all the maths took place. The design of the back end was inspired
by test driven development, and exposed as many steps as possible, so a "developer" could
see the maths and check the results. The back end was deeply hidden so a user would not 
stumble on it. Then front end was inspired by good design practice for forms. Inputs were
highlighted and only these were editable. 

Finally the spreadsheet was programmed to show only the dashboard when opened. ie. no other cells 
were visible. 
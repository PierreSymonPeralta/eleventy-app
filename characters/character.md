---
title: Rick and Morty Characters
layout: base.njk
pagination:
  data: characters
  size: 1
  alias: character
puppers: false
permalink: '/characters/{{character.name|slug}}/'
---

## {{character.name}}

![{{character.name}}]({{character.image}})

Species: {{character.species}}

Status: {{character.status}}

Gender: {{character.gender}}

Type: {{character.type}}
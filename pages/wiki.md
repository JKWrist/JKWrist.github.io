---
layout: default
title: Wiki
description: 笔记 & 速查
keywords: Wiki, 维基, 笔记, 速查手册
comments: false
menu: 维基
permalink: /wiki/
---

<section class="section">
  <div class="container" style="max-width: 820px;">
    <header class="section-header" style="text-align: left; margin-bottom: 3rem;">
      <h1 style="font-size: 2rem; font-weight: 800;">Wiki</h1>
      <p style="color: var(--text-secondary); margin-top: 0.75rem;">笔记 &amp; 速查 · 共 {{ site.wiki.size }} 篇</p>
    </header>

    {% for g in site.data.wiki-groups %}
    {% assign group_items = site.wiki | where: "group", g.key %}
    <div class="wiki-group-card" id="{{ g.key }}" style="margin-bottom: 1.5rem;">
      <h3>{{ g.icon }} {{ g.name }} <span class="cat-count">{{ group_items.size }}</span></h3>
      <p class="group-desc">{{ g.desc }}</p>
      <div class="wiki-group-items">
        {% for wiki in group_items %}
        <a href="{{ wiki.url | relative_url }}" class="chip">{{ wiki.title }}</a>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

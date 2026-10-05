---
layout: default
title: Wiki
description: 工具与命令速查手册
keywords: Wiki, 维基, 工具笔记
comments: false
menu: 维基
permalink: /wiki/
---

<section class="section">
  <div class="container" style="max-width: 750px;">
    <header class="section-header" style="text-align: left; margin-bottom: 3rem;">
      <h1 style="font-size: 2rem; font-weight: 800;">Wiki</h1>
      <p style="color: var(--text-secondary); margin-top: 0.75rem;">工具与命令速查手册</p>
    </header>

    <div class="skills-grid" style="grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));">
      {% for wiki in site.wiki %}
      {% if wiki.title != "Wiki Template" %}
      <a href="{{ wiki.url | relative_url }}" class="skill-item" style="text-decoration: none; color: var(--text);">
        <div class="skill-name">{{ wiki.title }}</div>
      </a>
      {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

---
layout: default
title: 归档
description: 按年份归档的全部文章
keywords: 归档, archives
comments: false
permalink: /archives/
---

<section class="section">
  <div class="container" style="max-width: 750px;">
    <header class="section-header" style="text-align: left; margin-bottom: 3rem;">
      <h1 style="font-size: 2rem; font-weight: 800;">归档</h1>
      <p style="color: var(--text-secondary); margin-top: 0.75rem;">按时间线浏览全部文章</p>
    </header>

    {% assign thisyear = 0 %}
    {% for post in site.posts %}
      {% assign year = post.date | date: '%Y' %}
      {% if year != thisyear %}
        {% if thisyear != 0 %}</ul>{% endif %}
        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 2rem 0 1rem; color: var(--accent); font-family: var(--font-mono);">{{ year }}</h3>
        <ul style="list-style: none; padding: 0;">
        {% assign thisyear = year %}
      {% endif %}
      <li style="padding: 0.6rem 0; display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.04);">
        <a href="{{ site.url }}{{ post.url }}" style="color: var(--text); font-size: 0.95rem;">{{ post.title }}</a>
        <span style="color: var(--text-muted); font-size: 0.78rem; font-family: var(--font-mono); white-space: nowrap; margin-left: 1rem;">{{ post.date | date: '%m-%d' }}</span>
      </li>
    {% endfor %}
    {% if thisyear != 0 %}</ul>{% endif %}
  </div>
</section>

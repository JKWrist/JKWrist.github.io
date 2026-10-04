---
layout: default
title: 分类
description: 全部文章分类索引
keywords: 分类, categories
comments: false
menu: 分类
permalink: /categories/
---

<section class="section">
  <div class="container" style="max-width: 750px;">
    <header class="section-header" style="text-align: left; margin-bottom: 3rem;">
      <h1 style="font-size: 2rem; font-weight: 800;">文章分类</h1>
      <p style="color: var(--text-secondary); margin-top: 0.75rem;">按主题浏览全部文章</p>
    </header>

    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
    <div style="margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border);" id="{{ category[0] }}">
      <h3 style="margin-bottom: 1rem;">
        <span style="color: var(--accent); font-family: var(--font-mono); font-size: 0.85rem;">{{ category[1].size }} 篇</span>
        <span style="margin-left: 0.75rem;">{{ category[0] }}</span>
      </h3>
      <ul style="list-style: none; padding: 0;">
        {% for post in category.last %}
        <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; justify-content: space-between; align-items: baseline;">
          <a href="{{ site.url }}{{ post.url }}" style="color: var(--text); font-size: 0.95rem;">{{ post.title }}</a>
          <span style="color: var(--text-muted); font-size: 0.78rem; font-family: var(--font-mono); white-space: nowrap; margin-left: 1rem;">{{ post.date | date: '%Y-%m-%d' }}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

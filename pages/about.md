---
layout: default
title: 关于
description: Junze Xu ——系统程序员，专注于 Linux、C/C++、OpenSSL
keywords: Junze Xu, 作品集, 系统程序员, Linux, C++
comments: false
menu: 关于
permalink: /about/
---

<!-- Hero -->
<section class="hero" style="min-height: auto; padding: 5rem 2rem 3.5rem;">
  <span class="hero-tag">PORTFOLIO / 2026</span>
  <h1>你好，我是 <span class="gradient-text">Junze Xu</span></h1>
  <p>系统程序员 · Linux / C/C++ / OpenSSL<br>记录技术思考与开发实践</p>
</section>

<!-- Bio -->
<section class="section" style="padding-top: 1.5rem;">
  <div class="container" style="max-width: 620px;">
    <p style="color: var(--text-secondary); line-height: 1.9; margin-bottom: 1.5rem;">
      我是 <strong style="color: var(--text);">Junze Xu</strong>，一名系统程序员，常驻深圳。
      专注于 Linux 系统编程、C/C++ 开发、OpenSSL 工具链与 Makefile 构建体系。
    </p>
    <p style="color: var(--text-secondary); line-height: 1.9;">
      这个博客记录我在技术学习过程中的笔记、思考与实践经验。
      所有文章与速查手册都可以在 <a href="{{ '/' | relative_url }}">首页</a> 按分类浏览。
    </p>
    <div style="margin-top: 2rem;">
      <img src="{{ '/images/Wechat_JunzeXu.jpeg' | relative_url }}" alt="微信二维码" style="width: 140px; height: auto; border-radius: 12px; border: 1px solid var(--border); display: block;">
      <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem;">扫码加微信</p>
    </div>
  </div>
</section>

<!-- Skills -->
<section class="section" id="skills">
  <div class="container">
    <div class="section-header">
      <h2>Skills</h2>
      <p>我的技术栈</p>
    </div>
    <div class="skills-grid">
      {% for skill in site.data.skills %}
      <div class="skill-item">
        <div class="skill-header">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" style="width: {{ skill.level }}%"></div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Projects -->
<section class="section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2>Projects</h2>
      <p>近期项目展示</p>
    </div>
    <div class="projects-grid">
      {% for project in site.data.portfolio.projects limit:6 %}
      <div class="project-card">
        <div class="project-cover">
          <span class="emoji">{{ project.emoji | default: '📁' }}</span>
        </div>
        <div class="project-info">
          <span class="project-tag">{{ project.tag }}</span>
          <h3>{{ project.title }}</h3>
          <p class="desc">{{ project.description }}</p>
          {% if project.tech %}
          <div class="project-tech">{{ project.tech }}</div>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Contact -->
<section class="contact" id="contact">
  <h2>让我们一起创造 ✨</h2>
  <p>如果你也有一个想法想做成，欢迎来找我聊聊</p>
  <div class="contact-links">
    <a href="mailto:{{ site.email }}">📧 Email</a>
    <a href="https://github.com/{{ site.github_username }}" target="_blank">🐙 GitHub</a>
    {% for social in site.data.social %}
    <a href="{{ social.url }}" target="_blank">{{ social.sitename }}</a>
    {% endfor %}
  </div>
  </section>

# JunzeXu's Blog

<p align="center">
  <a href="https://junze-xu.github.io">🌐 在线访问</a> ·
  <a href="https://github.com/junze-xu/junze-xu.github.io/issues">💬 留言</a>
</p>

## 关于

我的个人技术博客，记录 Linux、C/C++、OpenSSL、Makefile 等领域的技术笔记与开发心得。

**内容构成**

- 技术博客文章（Linux / C++ / OpenSSL / 构建工具 / 开发笔记）
- 速查手册（按四组分类：开发工具 / 系统平台 / 效率软件 / 生活兴趣）
- 支持全文搜索（标题 + 正文）

**技术栈**

- [Jekyll](https://jekyllrb.com/) 静态站点生成 + [GitHub Pages](https://pages.github.com/) 自动部署
- 自研深色主题（CSS 变量驱动，原生 JS，无 jQuery 依赖）
- [Utterances](https://utteranc.es/) 评论系统（基于 GitHub Issues，无隐私追踪）
- [不蒜子](https://busuanzi.ibruce.info/) 轻量访问量统计
- Open Graph + Twitter Card + sitemap 等 SEO 完善

## 本地运行

```bash
# 安装依赖
bundle install

# 本地预览
bundle exec jekyll serve

# 访问 http://localhost:4000
```

## 目录结构

```
.
├── _posts/          # 博客文章
├── _wiki/           # 速查手册
│   ├── dev/         # 开发工具
│   ├── system/      # 系统平台
│   ├── software/    # 效率软件
│   └── life/        # 生活兴趣
├── _layouts/        # 页面模板
├── assets/          # CSS / JS / 图片
├── pages/           # 静态页面
└── _config.yml      # 站点配置
```

## License

- 文章内容 © JunzeXu
- 主题代码为原创，欢迎参考但请保留署名

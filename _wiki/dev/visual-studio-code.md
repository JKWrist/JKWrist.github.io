---
group: dev
layout: wiki
title: Visual Studio Code
categories: Tools
description: Visual Studio Code 的快捷键与使用技巧
keywords: Visual Studio Code
---

## 快捷键

C --> Ctrl

S --> Shift

M --> Alt

Cmd --> Command

### 通用操作

| 功能              | Windows/Linux | Mac OS X      |
|:------------------|:--------------|:--------------|
| 命令面板          | C-S-p         | Cmd-S-p       |
| 快速打开文件      | C-p           | Cmd-p         |
| 关闭当前编辑器    | C-w           | Cmd-w         |
| 新建窗口          | C-S-n         | Cmd-S-n       |
| 切换终端          | C-`           | C-`           |
| 侧边栏显隐        | C-b           | Cmd-b         |
| 全局查找          | C-S-f         | Cmd-S-f       |
| 全局替换          | C-S-h         | Cmd-S-h       |

### 编辑操作

| 功能              | Windows/Linux | Mac OS X      |
|:------------------|:--------------|:--------------|
| 复制当前行        | C-C           | Cmd-C         |
| 删除当前行        | C-S-k         | Cmd-S-k       |
| 上移/下移行       | Alt-Up/Down   | Alt-Up/Down   |
| 多光标选择        | C-d           | Cmd-d         |
| 列选择            | C-S-Alt-↑↓    | Cmd-S-Alt-↑↓   |
| 格式化代码        | C-S-f         | Cmd-S-f       |
| 注释/取消注释     | C-/           | Cmd-/         |
| 跳转行            | C-g           | Cmd-g         |
| 跳转文件开头/结尾 | C-Home/End    | Cmd-Up/Down   |

### 导航

| 功能              | Windows/Linux | Mac OS X      |
|:------------------|:--------------|:--------------|
| 转到定义          | F12           | F12           |
| 查看定义          | Alt-F12       | Alt-F12       |
| 转到引用          | S-F12         | S-F12         |
| 返回/前进         | Alt-← / Alt-→ | Ctrl-±        |
| 书签              | C-F2          | Cmd-F2        |

### 资源管理器

| 功能              | Windows/Linux | Mac OS X      |
|:------------------|:--------------|:--------------|
| 打开文件          | C-o           |               |
| 打开文件夹        | C-k C-o       |               |
| 关闭文件夹        | C-k f         |               |
| 资源管理器        | C-S-e         | Cmd-S-e       |
| 搜索              | C-S-f         | Cmd-S-f       |
| Git               | C-S-g         | Cmd-S-g       |
| 调试              | C-S-d         | Cmd-S-d       |
| 插件              | C-S-x         | Cmd-S-x       |

### Markdown

| 功能                | Windows/Linux | Mac OS X      |
|:--------------------|:--------------|:--------------|
| Markdown 预览       | C-S-v         | Cmd-S-v       |
| Markdown 侧边预览   | C-k v         | Cmd-k v       |

## 推荐插件

| 插件名              | 功能说明                          |
|:--------------------|:----------------------------------|
| GitLens             | 增强 Git 功能，显示代码作者与历史  |
| Prettier            | 代码格式化                        |
| ESLint              | JavaScript 语法检查               |
| Python              | Python 语法高亮、调试与智能补全    |
| C/C++               | Microsoft 官方 C++ 支持           |
| Remote - SSH        | 远程开发                          |
| Docker              | Docker 容器管理                   |
| Markdown All in One | Markdown 快捷键与目录生成         |
| One Dark Pro        | 暗色主题                          |

## 实用设置

### settings.json

```json
{
    "editor.fontSize": 14,
    "editor.tabSize": 4,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,
    "terminal.integrated.fontSize": 13,
    "workbench.colorTheme": "One Dark Pro"
}
```

### 终端配置

VS Code 内置终端支持配置 shell：

* Windows: 设置 `terminal.integrated.defaultProfile.windows` 为 Git Bash 或 PowerShell
* macOS/Linux: 支持 zsh、bash 等

### Remote SSH 远程开发

1. 安装 Remote - SSH 插件
2. 命令面板 → Remote-SSH: Connect to Host
3. 输入 `user@host` 连接
4. 在远程机器上直接编辑文件，本地无需同步代码

## 参考资源

* [VS Code 官方文档](https://code.visualstudio.com/docs)
* [VS Code 快捷键速查](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

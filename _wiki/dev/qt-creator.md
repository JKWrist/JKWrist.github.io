---
group: dev
layout: wiki
title: Qt Creator
categories: Qt
description: Qt Creator 的常用快捷键和操作记录
keywords: Qt, Qt Creator
---

## 快捷键（for mac）

参考：<http://doc.qt.io/qtcreator/creator-keyboard-shortcuts.html>

C --> Ctrl

S --> Shift

M --> Alt

Cmd --> Command

| 功能               | 快捷键           |
|:-------------------|:-----------------|
| 自动完成           | C-Space          |
| 显示/隐藏侧边栏    | Cmd-0            |
| 切换已打开的文件   | M-Tab            |
| 上/下一行          | C-p/C-n          |
| 前进/后退一个字符  | C-f/C-b          |
| 删除一个单词       | M-Del            |
| 构建               | Cmd-b            |
| 运行               | Cmd-r            |
| 调试               | Cmd-y            |
| 注释               | Cmd-/            |
| 换行               | Cmd-Return       |
| 跳到定义           | F2               |
| 切换头文件与源文件 | F4               |
| 前进/后退          | M-Cmd-Left/Right |
| 打开定位器         | Cmd-k            |
| 全局查找           | C-S-f            |
| 全部保存           | Cmd-A Cmd-S      |

## 快捷键（for Windows/Linux）

| 功能               | 快捷键           |
|:-------------------|:-----------------|
| 自动完成           | C-Space          |
| 构建               | C-b              |
| 运行               | C-r              |
| 调试               | F5               |
| 跳到定义           | F2               |
| 切换头文件与源文件 | F4               |
| 注释               | C-/              |
| 全部保存           | C-S-s            |

## 实用技巧

### 代码重构

* 重构 → 重命名符号（Ctrl+Shift+R）：全局重命名变量/函数
* 重构 → 提取函数：将选中代码提取为独立函数

### 调试

* 条件断点：右键断点 → 设置条件表达式
* 局部变量窗口：自动显示当前作用域变量值
* 表达式求值：调试时在「表达式」窗口输入变量名查看

### 代码风格

支持自定义代码格式规则：工具 → 选项 → C++ → 代码风格

### .pro 文件配置

```qmake
QT       += core gui network
greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = MyApp
TEMPLATE = app

SOURCES += main.cpp \
           mainwindow.cpp

HEADERS  += mainwindow.h

# 添加第三方库
LIBS += -L/path/to/lib -lmylib

# 预编译头
PRECOMPILED_HEADER = stable.h
```

## 参考资源

* [Qt 官方文档](https://doc.qt.io/)
* [Qt Creator 手册](https://doc.qt.io/qtcreator/)

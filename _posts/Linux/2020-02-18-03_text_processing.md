---
layout: post
title: 1.3 Linux 文本处理
categories: Linux
description: 
keywords: Linux
---

## 概述  
本节将介绍Linux下使用Shell处理文本时最常用的工具：
find、grep、xargs、sort、uniq、tr、cut、paste、wc、sed、awk；
提供的例子和参数都是常用的；

## find 文件查找
```
//查找txt和pdf文件:
find . \( -name "*.txt" -o -name "*.pdf" \) -print

//正则方式查找.txt和pdf:
find . -regex  ".*\(\.txt\|\.pdf\)$"
-iregex： 忽略大小写的正则

//否定参数 ,查找所有非txt文本:
find . ! -name "*.txt" -print

//指定搜索深度,打印出当前目录的文件（深度为1）:
find . -maxdepth 1 -type f
```
## 定制搜索
```
    $whatis command
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```
## 更加详细的说明文档:
```
    $info command  
```

## 查看路径

查看程序的binary文件所在路径:
``` 
    $which command  
```  
eg:查找make程序安装路径::
```
    $which make
    /opt/app/openav/soft/bin/make install
```
查看程序的搜索路径:
```
    $whereis command
```
当系统中安装了同一软件的多个版本时，不确定使用的是哪个版本时，这个命令就能派上用场；


## 总结  
whatis info man which whereis

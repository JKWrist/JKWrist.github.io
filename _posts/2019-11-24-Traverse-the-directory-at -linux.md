---
layout: post
title: Linux目录遍历
categories: Linux
description: Linux目录遍历
keywords: Linux, 系统调用, 编程
---

Linux目录遍历主要分为三步
- 打开目录 
- 读取目录
- 关闭目录
![代码](https://upload-images.jianshu.io/upload_images/617813-2dfcc142fad025d8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
#include <sys/stat.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <dirent.h>
#include <stdlib.h>
#define args_check(argc,num) {if(argc!=num) {printf("error args\n");return -1;}}

//目录深度优先遍历
void printdir(char * dirname,int width)  //递归调用自己
{
	DIR *pdir;  //定义DIR类型变量这是opendir的返回值
	pdir=opendir(dirname); //打开目录
	if(NULL==pdir) //若传参不正确
	{
        perror("opendir"); //返回opdir错误在哪里
		return;
	}
	struct dirent *p; //定义dirent类型指针为了获取某文件夹目录内容，所使用的结构体
	char path[512]={0}; //定义目录字符串
    
	while((p=readdir(pdir))!=NULL) //readdir读取目录的返回值为一个dirent类型的指针
	{
		if(!strcmp(p->d_name,".")||!strcmp(p->d_name,"..")) 
		{
			continue; //跳过当前目录和上一级目录，避免无限循环
		}
		printf("%*s%s\n",width,"",p->d_name); //printf 打印空格
		if(p->d_type==4)  //d_type的枚举类型值表示一个类型4是目录,0是未知,1是管道,2是字符设备,8表示文件,6是块设备
		{
			sprintf(path,"%s%s%s",dirname,"/",p->d_name);//sprintf将三个字符串拼接起来
            printdir(path,width+4); //递归调用自己，下一层目录前面打印空格多4个
		}
	}
	closedir(pdir);
}

int main(int argc,char *argv[])
{
	args_check(argc,2); //此处定义为宏，判断传入参数
	printf("%s\n",argv[1]); //打印传入目录
	printdir(argv[1],4); //调用递归函数
	return 0;
}
```


磁盘删除只是删除了dirent信息 除非下一次再写入文件到那个位置的时候就会

文件剪切只是创建了一个硬链接和copy有很大不同，速度快的多

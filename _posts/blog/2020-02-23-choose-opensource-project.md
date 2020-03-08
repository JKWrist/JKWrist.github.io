---
layout: post
title: 如何选择一个开源项目
categories: Blog
description: 如何选择一个开源项目
keywords: 2020, 总结
---
# 选：如何选择一个开源项目？

## 聚焦是否满足业务？

 简单来说：如果你的业务要求1000 TPS，那么一个20000 TPS 和50000 TPS的方案是没有区别的。有的人可能会担心我TPS不断上涨怎么办？其实不用担心，我们的架构会不断演进的，等到真的需要这么高的时候我们再来架构重构，记住：不要过早优化，过早优化是万恶之源 —— 《UNIX编程哲学》

## 聚焦是否成熟？

可以从以下几个方面考察是否成熟：

- 1）版本号：一般建议除非特殊情况，否则不要选0.X版本的，至少选1.X版本的，版本号越高越好。
- 2）使用的公司数量：一般开源项目都会把采用了自己项目的公司列在主页上，公司越大越好，数量越多越好
- 3）社区活跃度：看看社区是否活跃，发帖数、回复数、问题处理速度等

## 聚焦运维能力？

可以从以下几个方案去考察运维能力：

- 1）开源方案**日志**是否齐全：有的开源方案日志只有寥寥启动停止几行，出了问题根本无法排查
- 2）开源方案是否有**命令行**、管理控制台等维护工具，能够看到系统运行时的情况
- 3）开源方案是否有**故障检测和恢复的能力**，例如告警、倒换等

案例2：很多团队最初使用MySQL的时候，也没有怎么研究过，经常有业务部门抱怨MySQL太慢了，其实经过定位，发现最关键的几个参数（例如innodb_buffer_pool_size, sync_binlog，innodb_log_file_size等）都没有配置或者配置错误，性能当然会慢。



# 用：如何使用开源方案？

## 深入研究，仔细测试

可以从如下几方面进行研究和测试：

- 1）通读开源项目的设计文档或者白皮书，了解其设计原理
- 2）核对每个配置项的作用和影响，识别出关键配置项
- 3）进行多种场景的性能测试
- 4）进行压力测试，连续跑几天，观察cpu、内存、磁盘io等指标波动
- 5）进行故障测试：kill，断电、拔网线、重启100次以上、倒换等

如果我们在商业项目中采用了一些开源项目，前提是自己一定是理解其原理，完全掌握了才建议在商业项目使用，一些UI类的开源控件还好，尤其是对于一些框架类的开源项目，如网络请求库、ORM框架、各种图片加载库、依赖注入框架等等，不求你掌握他具体实现的每个细节，但是一定要理解其原理，并且熟练掌握他的各种API，再考虑运用到公司的项目中。

## 小心应用，灰度发布


假如我们做了上面的“深入研究、仔细测试”，发现没什么问题，是否就可以放心大胆的应用到线上了呢？别高兴太早，即使你的研究再深入，测试再仔细，也还是要小心为妙，因为再怎么深入的研究，再怎么仔细的测试，都只能降低风险，但不可能完全覆盖所有线上场景。


但是，不管研究多深入、测试多仔细、自信心多爆棚，时刻对线上要有敬畏之心，小心驶的万年船。我们的经验就是先在非核心的业务上用，然后有经验后慢慢扩展。

## 做好应急，以防万一
虽然因为一次故障就完全反对尝试是有点反应过度了，但确实故障也给我们提了一个醒：对于重要的业务或者数据，使用开源项目时，最好有另外一个比较成熟的方案做备份，尤其是数据存储。例如：如果要用MongoDB或者Redis，可以用MySQL做备份存储。这样做虽然复杂度和成本高一些，但关键时刻能够救命！
一旦他出问题了，或者说他突然宣布某一天不开源了，那你要崩溃了，替换的代价几乎可以重写了。所以建议大家使用那种专注的开源框架，如只做网络库的，只做图片处理的，而这种大多都有替代品，一旦他出事，你还有其他别的选择。



# 改：如何基于开源项目做二次开发？


## 保持纯洁，加以包装
我们的建议是不要改动原系统，而是要开发辅助系统: 监控，报警，负载均衡，管理等。以Redis为例，如果我们想增加集群功能，不要去改动Redis本身的实现，而是增加一个proxy层来实现，Twitter的Twemproxy就是这样做的，而Redis到了3.0后本身提供了集群功能，原有的方案简单切换到Redis 3.0即可。

如果实在想改到原有系统，怎么办呢？我们的建议是直接给开源项目提需求或者bug，但弊端就是响应比较缓慢，这个就要看业务紧急程度了，如果实在太急那就只能自己改了，不过不是太急，建议做好备份或者应急手段即可。

在使用一些开源项目的时候，不可能永远满足我们自己的需求，我们一般都会在其基础上定制些我们自己的业务需求，这个时候建议大家不要改源码，而是在自己的项目里对引用的开源框架进行扩展，如果他不可扩展或者说扩展起来很麻烦，只能说他的设计还不够好。
为什么不建议大家改源码？因为好的开源项目一般会持续维护与更新，而一旦我们更改源码，这意味着以后我们想要更新版本变得很麻烦。所以，不是特别必要，都强烈建议大家不要改源码。

计算机史上有个万能的解决方案就是，如果原有层面解决不了问题，那么就请再加一层！对于开源项目，我们知道有些库设计的确实很棒，使用者调用起来非常方便，一行代码直接搞定，拿图片加载库 Picasso 举个例子：Picasso.with(context).load(imageUrl).into(imageView);
使用起来是不是特简单？你也许问我，都封装的这么好了还用得着再封装一层么？那你错了，哪怕他已经很完美了，都要这样做：

```
public class ImageLoader 
{
    public static void with(Context context, String imageUrl, ImageView imageView) 
    {
        Picasso.with(context).load(imageUrl).into(imageView); 
    }
}
```
这样我所有项目调用的方式直接就是 ImageLoader.with() ，这样做的好处是：
- 入口统一，所有图片加载都在这一个地方管理，一目了然，即使有什么改动我也只需要改这一个类就可以了。
- 随着你们业务的需求，发现 Picasso 这个图片加载库已经满足不了你们了，你们需要换成 Fresco ，如果你没有封装一层的话，想要替换这个库那你要崩溃了，要把所有调用 Picasso 的地方都改一遍，而如果你中间封装了一层，那真的非常轻松，三天两头的换一次也没问题。
这就是所谓的外部表现一致，内部灵活处理原则。

| 选开源项目                               | 是否                                                  |
|--------------------------------------------|---------------------------------------------------------|
| 是否满足业务                               |                                         |
| 版本号                                      |                                        |
| 使用的公司数量                              |                                         |
| 社区活跃度                                  |                                        |
| 日志                                       |                                          |
| 故障检测和恢复的能力                         |                                          |


| 用开源项目                                 | 是否                                                   |
|--------------------------------------------|---------------------------------------------------------|
| 读开源项目的设计文档或者白皮书，了解其设计原理       |                                     |
| 配置项的作用和影响，识别出关键配置项               |                                      |
| 读开源项目的设计文档或者白皮书，了解其设计原理         |                                     |
| 性能测试                                        |                                     |
| 压力测试，连续跑几天，观察cpu、内存、磁盘io等指标波动  |                                       |
| 故障测试                                         |                                         |



| 改开源项目                                 | 是否                                                     |
|--------------------------------------------|---------------------------------------------------------|
| 是否易封装                                |                                                          |


# 举例
我们目前的项目中要嵌入一个日志系统，首要选择的就是在Linux平台下，C/C++开发，方便集成到项目中的，学习成本比较低的开源库

首先从一些优秀的开源项目中查看有哪些优秀的日志系统
* [Awesome C++](http://fffaraz.github.io/awesome-cpp/)
## Logging

* [Blackhole](https://github.com/3Hren/blackhole) - Attribute-based logging framework, which is designed to be fast, modular and highly customizable. [MIT]
* [Boost.Log](http://www.boost.org/doc/libs/1_56_0/libs/log/doc/html/index.html) - Designed to be very modular and extensible. [Boost]
* [Easylogging++](https://github.com/easylogging/easyloggingpp) - Extremely light-weight high performance logging library for C++11 (or higher) applications. [MIT] [website](https://muflihun.github.io/easyloggingpp)
* [G3log](https://github.com/KjellKod/g3log) - Asynchronous logger with Dynamic Sinks. [PublicDomain]
* [glog](https://github.com/google/glog) - C++ implementation of the Google logging module.
* [Log4cpp](http://log4cpp.sourceforge.net/) - A library of C++ classes for flexible logging to files, syslog, IDSA and other destinations. [LGPL]
* [log4cplus](https://github.com/log4cplus/log4cplus) - A simple to use C++ logging API providing thread-safe, flexible, and arbitrarily granular control over log management and configuration. [BSD & Apache2]
* [loguru](https://github.com/emilk/loguru) - A lightweight C++ logging library. [PublicDomain]
* [plog](https://github.com/SergiusTheBest/plog) - Portable and simple log for C++ in less than 1000 lines of code. [MPL2]
* [reckless](https://github.com/mattiasflodin/reckless) - Low-latency, high-throughput, asynchronous logging library for C++. [MIT]
* [spdlog](https://github.com/gabime/spdlog) - Super fast, header only, C++ logging library.
* [templog](http://www.templog.org/) - A very small and lightweight C++ library which you can use to add logging to your C++ applications. [Boost]
* [P7Baical](http://baical.net/p7.html) - An open source and cross-platform library for high-speed sending telemetry & trace data  with minimal usage of CPU and memory. [LGPL]

## 如何选择开源许可证

![如何选择开源许可证](https://personal-website-1251812117.cos.ap-beijing.myqcloud.com/如何选择开源许可证？.png)


[Apache](http://choosealicense.com/licenses/apache/)一个较宽松且简明地指出了专利授权的协议。

- **商业软件可以使用，也可以修改使用Apache协议的代码。**

[GPL](http://choosealicense.com/licenses/gpl-v2/)此协议是应用最为广泛的开源协议，拥有较强的版权自由( copyleft )要求。衍生代码的分发需开源并且也要遵守此协议。此协议有许多变种，不同变种的要求略有不同。

- **商业软件不能使用GPL协议的代码。**


[MIT](http://choosealicense.com/licenses/mit/)宽松简单且精要的一个协议。在适当标明来源及免责的情况下，它允许你对代码进行任何形式的使用。

- **商业软件可以使用，也可以修改MIT协议的代码，甚至可以出售MIT协议的代码。**

[Artistic](http://choosealicense.com/licenses/artistic/) Perl 区尤为钟爱此协议。要求更改后的软件不能影响原软件的使用。

[BSD](http://choosealicense.com/licenses/bsd/)较为宽松的协议，包含两个变种[BSD 2-Clause](http://choosealicense.com/licenses/bsd) 和[BSD 3-Clause](http://choosealicense.com/licenses/bsd-3-clause)，两者都与MIT协议只存在细微差异。

- **商业软件可以使用，也可以修改使用BSD协议的代码。**

[Eclipse](http://choosealicense.com/licenses/eclipse/)对商用非常友好的一种协议，可以用于软件的商业授权。包含对专利的优雅授权，并且也可以对相关代码应用商业协议。

[LGPL](http://choosealicense.com/licenses/lgpl-v2.1/)主要用于一些代码库。衍生代码可以以此协议发布（言下之意你可以用其他协议），但与此协议相关的代码必需遵循此协议。

- **商业软件可以使用，但不能修改LGPL协议的代码。**

[Mozilla](http://choosealicense.com/licenses/mozilla/)  Mozilla Public License(MPL 2.0)是由Mozilla基金创建维护的。此协议旨在较为宽松的BSD协议和更加互惠的GPL协议中寻找一个折衷点。

- **商业软件可以使用，也可以修改MPL协议的代码，但修改后的代码版权归软件的发起者。**

[No license](http://choosealicense.com/licenses/no-license/)你保留所有权利，不允许他人分发，复制或者创造衍生物。当你将代码发表在一些网站上时需要遵守该网站的协议，此协议可能包含了一些对你劳动成果的授权许可。比如你将代码发布到GitHub，那么你就必需同意别人可以查看和 Fork你的代码。

[Public domain dedication](http://choosealicense.com/licenses/unlicense/)在许多国家，默认版权归作者自动拥有，所以[Unlicense](http://unlicense.org/)协议提供了一种通用的模板，此协议表明你放弃版权，将劳动成果无私贡献出来。你将丧失对作品的全部权利，包括在MIT/X11中定义的无担保权利。

- **商业软件可以使用，但不能修改LGPL协议的代码。**


## 初步筛选出来的日志系统
[http://baical.net/p7.html](http://baical.net/p7.html)
[http://log4cpp.sourceforge.net/](http://log4cpp.sourceforge.net/)
[https://github.com/amrayn/easyloggingpp](https://github.com/amrayn/easyloggingpp)
[https://github.com/google/glog](https://github.com/google/glog)
[https://github.com/gabime/spdlog](https://github.com/gabime/spdlog)
首先这些项目的社区较好，对于后期出现问题排查可能会好一些。另外就是用的人还比较多。有自己单独的网站，文档方面也较全，学习起来会好一些。

## 进一步筛选


# 参考
- [使用开源项目的正确姿势，都是血和泪的总结！](https://mp.weixin.qq.com/s/IWE5LBYzsUZL5YL8xP_mKA)

- [如何正确使用开源项目?](https://www.cnblogs.com/tc310/p/11053072.html)

- [各种开源协议说明](https://wenku.baidu.com/view/70df4f7402768e9951e738dc.html)

- [GPL协议，LGPL协议，MPL协议](https://blog.csdn.net/xiaoxiao133/article/details/83049959)

- [如何选择开源许可证？](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

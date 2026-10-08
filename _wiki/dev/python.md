---
group: dev
layout: wiki
title: Python
categories: Python
description: Python 常用模块及资源记录。
keywords: Python
---

## 实用模块

### requests

优雅简单的 HTTP 模块。

```python
import requests

# GET 请求
r = requests.get('https://api.example.com/data')
print(r.json())

# POST 请求
r = requests.post('https://api.example.com/submit', json={'key': 'value'})
print(r.status_code)

# 带参数的请求
r = requests.get('https://api.example.com/search', params={'q': 'keyword', 'page': 1})

# 设置超时和 headers
r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
```

### BeautifulSoup

很好用的 HTML/XML 解析器。

```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(html_content, 'html.parser')

# 查找元素
title = soup.find('title')
links = soup.find_all('a')

# CSS 选择器
items = soup.select('.content > p')
```

### json

JSON 编码解码器。

应用举例：

* 格式化 JSON 文件

  ```sh
  python -m json.tool src.json > dst.json
  ```

  在 Vim 里格式化 JSON：

  ```sh
  :%!python -m json.tool
  ```

* Python 代码处理 JSON

  ```python
  import json

  # 解析 JSON 字符串
  data = json.loads('{"name": "test", "value": 123}')

  # 生成 JSON 字符串（美化输出）
  output = json.dumps(data, indent=2, ensure_ascii=False)
  ```

### base64

方便地进行 base64 编解码的模块。

应用举例：

* 解码 base64

  ```sh
  echo aGVsbG93b3JsZA== | python -m base64 -d
  ```

  则能看到输出

  ```sh
  helloworld
  ```

* Python 代码编解码

  ```python
  import base64

  encoded = base64.b64encode(b'hello world').decode()
  decoded = base64.b64decode(encoded)
  ```

### argparse

命令行参数解析模块。

```python
import argparse

parser = argparse.ArgumentParser(description='程序说明')
parser.add_argument('-f', '--file', help='输入文件')
parser.add_argument('-v', '--verbose', action='store_true', help='详细输出')
args = parser.parse_args()
```

### logging

Python 标准日志模块。

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logging.info('程序启动')
logging.error('发生错误: %s', error)
```

### subprocess

调用外部命令的模块。

```python
import subprocess

# 简单调用
result = subprocess.run(['ls', '-la'], capture_output=True, text=True)
print(result.stdout)

# 管道操作
p1 = subprocess.Popen(['ps', 'aux'], stdout=subprocess.PIPE)
p2 = subprocess.Popen(['grep', 'python'], stdin=p1.stdout, stdout=subprocess.PIPE)
```

## 常用资源

* [Python 官方文档](https://docs.python.org/zh-cn/3/)
* [PEP 8 编码规范](https://peps.python.org/pep-0008/)
* [Requests 文档](https://docs.python-requests.org/)
* [Real Python 教程](https://realpython.com/)

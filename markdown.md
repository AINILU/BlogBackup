# Markdown语法
#### 导语：
> [Markdown](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。
#### 标题
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题  
###### 六级标题
```
给标题添加 `id` 或者 `class`，只要在标题最后添加 `{#id .class1 .class2}`。例如：
```markdown
# 这个标题拥有 1 个 id {#my_id}
# 这个标题有 2 个 classes {.class1 .class2}
```
#### 强调
```markdown
*这会是 斜体 的文字*
_这会是 斜体 的文字_

**这会是 粗体 的文字**
__这会是 粗体 的文字__

_你也 **组合** 这些符号_

~~这个文字将会被横线删除~~
```
#### 列表
##### 无序列表
```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```
##### 有序列表
```markdown
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```
#### 添加图片
```markdown
![Github logo](./imgs/github-logo.png)
```
#### 链接
```markdown
http://github.com  自动生成！
[GitHub](http://github.com)
```
#### 引用
```markdown
正如 Kanye West 所说：

> We're living the future so
> the present is our past.
```
#### 分割线
如下，三个或者更多的
```markdown
---

连字符

***

星号

___

下划线
```
#### 行内代码
```markdown
我觉得你应该在这里使用 `<addr>` 才对。
```
##### 代码块
你可以在你的代码上面和下面添加 ``` 来表示代码块。
##### 语法高亮
你可以给你的代码块添加任何一种语言的语法高亮。

例如，给 ruby 代码添加语法高亮：

```markdown
    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```
```
会得到下面的效果：

```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
```
##### 代码块 class（MPE 扩展的特性）
你可以给你的代码块设置 class。

例如，添加 class1 class2 到一个 代码块：
```markdown
    ```javascript {.class1 .class}
    function add(x, y) {
    return x + y
    }
    ```
```
```javascript {.class1 .class}
    function add(x, y) {
    return x + y
    }
```
##### 代码行数
如果你想要你的代码块显示代码行数，只要添加 line-numbers class 就可以了。

例如：
```markdown
    ```javascript {.line-numbers}
    function add(x, y) {
    return x + y
    }
    ```
```
```javascript {.line-numbers}
    function add(x, y) {
    return x + y
    }
```
#### 任务列表
```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```
#### 表格
```markdown
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```
#### 上标
```markdown
30^th^
```
#### 下标
```markdown
H~2~O
```
#### 脚注
```markdown
Content [^1]
[^1]: Hi! This is a footnote
```
#### 缩略
```markdown
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```
#### 标记
```markdown
==marked==
```
#### 数学
```markdown
$...$ 或者 \(...\) 中的数学表达式将会在行内显示。
$$...$$ 或者 \[...\] 或者 ```math 中的数学表达式将会在块内显示
```
#### 导入
```markdown
仅仅

@import "你的文件"

就可以了

<!-- @import "your_file" --> 的写法也是支持的。
```



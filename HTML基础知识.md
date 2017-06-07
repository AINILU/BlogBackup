>超文本标记语言，标准通用标记语言下的一个应用。
“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。

### doctype

作用：
- 指定html页面使用的标准和版本
- 浏览器根据doctype决定使用哪种渲染模式
 - quirks mode 怪异模式
 - almost standard mode 准标准模式
 - standard mode 标准模式

### 文本
#### 嵌套规则
1. 块元素可以包含内联元素或某些块元素，但内联元素却不能包含块元素，它只能包含其它的内联元素：
```
<div><h1></h1><p></p></div>  #对
<a href=”#”><span></span></a>  #对
<span><div></div></span>  #错
```
2. 块级元素不能放在<p>里面：
```
<p><ol><li></li></ol></p>  #错
<p><div></div></p>  #错
```
3. 有几个特殊的块级元素只能包含内嵌元素，不能再包含块级元素，这几个特殊的标签是：
*h1、h2、h3、h4、h5、h6、p、dt*

4. li 内可以包含 div 标签
5. 块级元素与块级元素并列、内嵌元素与内嵌元素并列：
```
<div><h2></h2><p></p></div>  #对
<div><a href=”#”></a><span></span></div>  #对
<div><h2></h2><span></span></div>  #错
```

#### 网页总体结构
```
body
├── header
│   └── nav
├── main
│   ├── section
│   └── section
├── aside
└── footer
```
#### 代码
pre标签会将html编辑时的文本渲染

#### 强调
- strong: 重要性、严重性和紧急性
- em: 从一句话中突出某个词语
- b: 将词语从视觉上和其他部分区分，比如论文摘要中的关键词
- i: 换一种语调说一句话，比如其他语言翻译，对话旁白

#### 实体字符
`&amp; &nbsp; &lt; &gt; &copy; &yen; &#9775;`<br>
&amp; &nbsp; &lt; &gt; &copy; &yen; &#9775;

### 链接与图片
#### 链接地址

    `http(Scheme)://www.example.com(Host)/post/2016/index.html(Path)?print=1&color=no(Query)#heading(Hash)`

- 省略协议`//chuenwei.com/index.html`
- 省略Host和协议`/index.html`
- 相对路径`./img/1.jpg`
- 绝对路径`/img/1.jpg`

#### 锚点
```
<p id="test"></p>
<a href="#">回到顶部</a>
<a href="#test">回到test</a>
```
#### 图片格式

- jpg
 - 照片
- png
 - 色彩较少时使用
 - png24可以半透明
- gif
 - 无法半透明
 -可以多帧做动画
- webp

### 表格

#### 列组
```
<colgroup>
    <col>
    <col>
</colgroup>
```
### 表单
- get 获取服务器 url 缓存
- post 提交  body
- name表示key
- autofocus
- url编码
 - %20 空格
 - ! %21
 - " %22
 - ' %27
 - $ %24
 - & %26
 - \# %23
 - % %25

**tips:**
1. $0.src可以获取选中元素src属性
2. decodeURICompent('url') #解码url
3. 5.6777tofixed(2) \#5.68
4. math.pow(10,3) \#1000

### HTML补充知识
- accesskey=i (CTRL+ALT+I)
- tabindex=-1
- contenteditable可编辑html文本
- spellcheck拼写检查
- lang/dir
- title
- hidden === display:none
- noscript

#### 扩展
- meta
- data-*
- microdata
- JSON-LD

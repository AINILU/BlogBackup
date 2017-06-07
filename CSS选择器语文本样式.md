### 选择器
- 通配选择器

- id选择器
- 类选择器

- 标签选择器
- 属性选择器

 - `[for~="height"] { color: #f0f;}`
 - `input[disabled] {}`
 - `a[href^="#"] {}`
 - `img[src$=".jpg"] {}`
 - `[class*="icon-"] {}`


- 伪类
 - a:hover {...}
 - a:active {...}

### 选择器组合
- EF
- E F
- E > F
- E, F

### 字体匹配

1. 浏览器先获取一个系统字体列表

2. 对于元素中每一个字符，使用font-family属性匹配字体
3. 如果步骤2没匹配上，选择下一个可选的font-family执行步骤2

4. 字体中没有该字符，继续对下一个可选的font-family执行步骤2
5. 如果没匹配到字体，使用浏览器默认字体

### 通用字体族

- Serif衬线体
 - Georgia、宋体
-Sans-Serif
 - Arial、Helevetica、黑体、微软雅黑
- Cursive手写体
 - 楷体
- Monospace等宽字体
 - Consolas、Courier、中文字体

### font-family书写

- 英文字体在前
- 最后添加通用字体族

### em

- 一般相对于元素的font-size计算
- 用在font-size属相时，相对于父元素的font-size计算

### line-height

- 行盒的高度
- 单位推荐用数字

### font缩写

/* 斜体 粗细 大小/行高 字体族 */
`font: bold 14px/1.7 Helvetica, Sans-Serif;`
### Web Fonts
```
@font-face {
    font-family: 'lobster';
    font-style: normal;
    font-weight: 400;
    src: local('lobster'),
         local('lobster-Regular'),
         url(//.....woff),
         url(//......woff2);    
}
h1 {
    font-family: 'lobster', cursive;
}
```

### white-space

- 空白符处理
- normal/nowrap/pre

### letter-spacing

- 字符间距
- 可继承

### word-spacing

- 单词间距
- 可继承

### word-break

- 单词在中间换行
- normal/break-all/keep-all

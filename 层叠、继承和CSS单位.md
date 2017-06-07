### 简单选择器的优先级

- level 0: *

- level 1: 标签选择器、伪元素
- level 2: 类、伪类、属性

- level 3: id
- level 4: 内联

- level 5: !important

### 渲染时的规则

1. 找出匹配到该属性的所有声明

2. 根据规则，优先级从低到高
 - 浏览器预设
 - 用户设置
 - 网页样式
 - 含有!important的网页样式
 - 含有!important的用户设置样式

3. 同一来源，按特异度来排序

4. 特异度一样，按照书写顺序，后面的优先级较高

### 继承

#### 显示继承

```
* {
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
}
```

### 值

- 关键字：box-sizing: inherit;
- 字符串：content: 'abc';
- url：background: url(/resources/logo.jpg);
- 长度：font-size: 1em;
- 百分数：width: 100%;
- 整数：z-index: 1;
- 浮点数：line-height: 1.5;
- 颜色：color: rgba(255, 255, 255, .4);
- 时间：transition-duration: 0.3s
- 角度：transform: rorateX(deg)

### 长度单位

- 绝对单位
 - px像素
 - in英寸
 - cm厘米
- 相对单位
 - em：相对于该元素的一个font-size
 - rem：相对于html元素的font-size
 - vh: 相对于视口的高度1%
 - vmin：vh和vw中的较小者

### 颜色
- 关键字
- 16进制
- rgb
- rgba
- hsl
- hsla

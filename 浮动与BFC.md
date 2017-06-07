### 常规流
- 除根元素、float、absolute，其他元素都在流内

- 根元素、float、absolute会脱离常规流

- 常规流中的盒子，属于BFC或IFC

### BFC
- 盒子在容器内从上到下一个接一个的摆放

- 两个兄弟盒子间的距离由margin属性决定
- 同一个BFC内垂直margin合并

- 盒子的外边缘挨着容器的左边

### IFC
- 盒子一个接一个水平放置

- 盒子之间的水平margin, border和padding都有效
- 同一行的盒子所在的矩形区域叫行盒

- 当一个盒子放不下时，会分到多个垂直堆叠的行盒里
- 行盒内的水平分布由`text-align`属性决定

- 如一个行块无法分割（单词、inline-block），该元素会被作为一个整体决定分布在哪一个行盒

### Float浮动
- 元素从常规流中脱离，被漂浮在容器左边或右边

- 浮动盒会一直飘到其外边缘挨着的容器边缘或另外的浮动盒
- **浮动元素不会影响其后面的块级盒**

- 但是浮动元素后面的行级盒子会变短以避开浮动元素

### 清除浮动
- 在浮动元素容器里：
```
.clearfix::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}
```

- 在行级盒子包含块里:
```
.clearfix::before {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}
```

- BFC特性
 - BFC的浮动不会影响到BFC外部的元素

 - **BFC的高度会包含其内的浮动元素**
 - **BFC不会和浮动元素重叠**

 - BFC不会和其他元素发生margin重叠
 - BFC可以通过以下方法创建

      - float

      - absolute

      - inline-block
      - overflow非visible的块框

- BFC作用

 - 去除margin重叠

 - 清除浮动
 - 两栏布局

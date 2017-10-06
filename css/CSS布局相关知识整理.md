## 盒模型
- content-box 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding
## 浮动与BFC
### 常规流
- 除根元素、float、absolute，其他元素都在流内
- 根元素、float、absolute会脱离常规流
- 常规流中的盒子，属于BFC或IFC
### 块级盒子
1. 盒子在容器内从上到下一个接一个的摆放
1. 两个兄弟盒子间的距离由margin属性决定
1. 同一个BFC内垂直margin合并
1. 盒子的外边缘挨着容器的左边
### 行级盒子
1. 盒子一个接一个水平放置
1. 盒子之间的水平margin, border和padding都有效
1. 同一行的盒子所在的矩形区域叫行盒
1. 当一个盒子放不下时，会分到多个垂直堆叠的行盒里
1. 行盒内的水平分布由`text-align`属性决定
1. 如一个行块无法分割（单词、inline-block），该元素会被作为一个整体决定分布在哪一个行盒
### 浮动
- 元素从常规流中脱离，被漂浮在容器左边或右边
- 浮动盒会一直飘到其外边缘挨着的容器边缘或另外的浮动盒
- **浮动元素不会影响其后面的块级盒**但是浮动元素后面的行级盒子会变短以避开浮动元素
### 清除浮动
- 在浮动元素容器里：
```css
.clearfix::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}
```
- 在行级盒子包含块里:
```css
.clearfix::before {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}
```
### BFC特性
- BFC的浮动不会影响到BFC外部的元素
- **BFC的高度会包含其内的浮动元素**
- **BFC不会和浮动元素重叠**
- BFC不会和其他元素发生margin重叠
### BFC可以通过以下方法创建
- float
- absolute
- inline-block
- overflow非visible的块框
### BFC作用
- 去除margin重叠
- 清除浮动
- 两栏布局
### margin
### position
### flex
### table
- table可设置width、height、border、padding、margin值
- 宽高默认由内容撑开，如果设置了宽度，宽度默认被里面的td平分，如果给某个td设置宽度，剩下来宽度由其他td平分
- 给table设置的高度只起到min-height作用，内容超过设置高度，table的高度会被撑高
### table-row(tr)
- 给tr设置的高度只起到min-height作用，内容超过设置高度，tr的高度会被撑高
- tr中的td默认高度继承tr高度，若给其中一个td设置高度，其他td也会变高，多列等高布局
- 无法设置宽度，margin值
### table-cell(td)
- **若table不存在，宽高不能为百分比**
- 继承table高度，平分宽度
- **给td设置vertical-align: middle;除了float，absolute所有block，inline元素都会相对于td垂直居中**
- **给td设置text-align: center;除了float，absolute所有inline元素水平居中，block元素不居中但他的内容或子inline元素居中**






#### position

- static，非定位，默认值
- relative，相对定位（相对自身）
- absolute，绝对定位，相对非static祖先元素
- fixed，相对于视口

#### z-index堆叠层次

- 为定位元素指定其在z轴上的上下等级
- 用一个整数表示，数值越大，越靠近用户
- 初始值为auto，可以为负数，0，正数

#### 堆叠上下文的生成

- Root元素
- z-index值不为auto的定位元素
- 设置了某些CSS3属性的元素，比如opacity、transform、animation等

#### 绘制顺序

- 形成该上下文的border和background
- z-index为负值的子堆叠上下文
- 常规流内非浮动块级元素
- 非定位浮动元素
- 非定位行级元素
- z-index为0
- z-index为正数

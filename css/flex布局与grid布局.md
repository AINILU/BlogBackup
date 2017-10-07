### flex布局
#### flex容器属性：
1. `align-content` 属性定义了当作为一个弹性盒子容器的属性时，浏览器如何在容器的侧轴围绕弹性盒子项目分配空间。该属性对单行弹性盒子模型无效。
1. `align-items` 属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐。与align-content属性的区别在于它指定了当前Flex容器的行中的项目的对齐方式，而align-content则指定了行自身的对齐方式。
1. `flex-direction` 属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向(正方向或反方向)
1. `flex-flow` 属性是 flex-direction 和 flex-wrap 的简写。
1. `flex-wrap` 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向。
1. `justify-content` 属性定义了浏览器如何分配顺着父容器主轴的弹性元素之间及其周围的空间。
#### flex项目属性：
1. `order` 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。**初始值为 0**。
1. 属性 `flex` 规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，可以同时设置flex-grow, flex-shrink与flex-basis。
    - 值 auto 相当于将属性设置为 "flex: 1 1 auto"
    - 默认值initial 相当于将属性设置为"flex: 0 1 auto"
    - 值 none 相当于将属性设置为"flex: 0 0 auto"
1. `flex-grow` 属性定义弹性盒子项（flex item）的拉伸因子。**初始值为 0**。负值是不被允许的。
1. `flex-shrink` 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。**初始值为 1**。负值是不被允许的。
1. 属性 `flex-basis` 指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 来改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的宽或者高（取决于主轴的方向）的尺寸大小。**初始值	auto**。
1. 属性 `align-self` 会对齐当前 flex 行中的 flex 元素，并覆盖 align-items （全局设置）的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self（个体设置）。
### grid布局
#### grid容器属性：
1. `grid-template-columns`：定义垂直栏
1. `grid-template-rows`：定义水平行
1. `grid-template-areas`：定义区域
1. `grid-column-gap`：定义垂直栏与垂直栏之间的间距
1. `grid-row-gap`：定义水平行与水平行之间的间距
1. `grid-gap`：上面两个栏与行间距的缩写
1. `justify-items`：item在水平行中的对齐方式
1. `align-items`：item在垂直栏中的对齐方式
1. `justify-content`：整个水平行在grid范围的对齐方式，这里有个好用的space-evenly值，补足了以前flex的space-around和space-between的不足
1. `align-content`：整个垂直栏在grid范围的对齐方式
1. 当定义的行或列数量不够时，item的自动排列方式：
    - `grid-auto-columns`：定义多出的item的自动column的宽度大小
    - `grid-auto-rows`：定义多出的item自动row的高度大小
    - `grid-auto-flow`：定义自动item是按照先水平方向排列还是垂直方向排列
#### grid项目属性：
1. `grid-column-start`：item的起始栏
1. `grid-column-end`：item的结束栏
1. `grid-column`：起始栏和结束栏的简写
1. `grid-row-start`：item的起始行
1. `grid-row-end`：item的结束行
1. `grid-row`：起始行与结束行的简写
1. `grid-area`：item所在区域 
1. `justify-self`：自定义item的水平方向对齐方式
1. `align-self`：自定义item的垂直方向对齐方式
### 参考资料
- https://segmentfault.com/a/1190000002910324
- http://imweb.io/topic/58176922f6361de950b6f552



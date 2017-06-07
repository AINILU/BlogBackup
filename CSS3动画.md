#### transform: transloate() rotate() scale()
transform-origin

#### transition : all 3s ease 1s;

## 配置动画

> 创建动画序列，需要使用**animation**属性或其子属性，该属性允许配置动画时间、时长以及其他动画细节，但该属性不能配置动画的实际表现，动画的实际表现是由 **@keyframes**规则实现。

### animation子属性有：

1. animation-delay
设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。

2. animation-direction
设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。

3. animation-duration
设置动画一个周期的时长。

4. animation-iteration-count
设置动画重复次数， 可以指定infinite无限次重复动画

5. animation-name
指定由@keyframes描述的关键帧名称。

6. animation-play-state
允许暂停和恢复动画。

7. animation-timing-function
设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。

8. animation-fill-mode
指定动画执行前后如何为目标元素应用样式。


## 使用keyframes定义动画序列
> 一旦完成动画的时间设置， 接下来就需要定义动画的表现。通过使用**@keyframes**建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。

因为动画的时间设置是通过CSS样式定义的，关键帧使用percentage来指定动画发生的时间点。0%表示动画的第一时刻，100%表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：from和to。这两个都是可选的，若from/0%或to/100%未指定，则浏览器使用计算值开始或结束动画。

也可包含额外可选的关键帧，描述动画开始和结束之间的状态。

## 使用动画事件
> 利用动画事件可以更好的控制动画和信息。这些事件由 AnimationEvent对象表示，可探测动画何时开始结束和开始新的循环。每个事件包括动画发生的时间和触发事件的动画名称。

## this指向
this的指向，是在函数被调用的时候确定的。也就是执行上下文被创建时确定的。
this的上下文基于函数调用的情况。和函数在哪定义无关，而和函数怎么调用有关。
在函数执行过程中，this一旦被确定，就不可更改了。
## this在具体情况下的分析
### 全局对象中的this
在全局上下文（任何函数以外），this指向全局对象。
```
console.log(this === window); // true
```
### 函数中的this
#### 对象方法、原型方法
在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的this指向该对象。
#### 独立函数调用
如果函数独立调用，那么该函数内部的this，则指向undefined。但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象。
#### 箭头函数
在箭头函数中，this由词法/静态作用域设置（set lexically）。它被设置为包含它的execution context的this，并且不再被调用方式影响（call/apply/bind）。
#### 构造函数
通过new操作符调用构造函数，会经历以下4个阶段。
- 创建一个新的对象
- 将构造函数的this指向这个新对象
- 指向构造函数的代码，为这个对象添加属性，方法等
- 返回新对象

因此，当new操作符调用构造函数时，this其实指向的是这个新创建的对象，最后又将新的对象返回出来，被实例对象接收。因此，我们可以说，这个时候，构造函数的this，指向了新的实例对象。
#### call和apply
JavaScript内部提供了一种机制，让我们可以自行手动设置this的指向。它们就是call与apply。

所有的函数都具有着两个方法。它们除了参数略有不同，其功能完全一样。它们的第一个参数都为this将要指向的对象。

call与applay后面的参数，都是向将要执行的函数传递参数。其中call以一个一个的形式传递，apply以数组的形式传递。
#### bind
ES5引进了Function.prototype.bind。f.bind(someObject)会创建新的函数（函数体和作用域与原函数一致），但this被永久绑定到someObject，不论你怎么调用。
#### DOM事件
this自动设置为触发事件的dom元素。
## 参考链接
- http://www.jianshu.com/p/d647aa6d1ae6
- https://github.com/creeperyang/blog/issues/16
[前端路由的两种实现原理](https://segmentfault.com/a/1190000007238999)

## vue-router
### 安装
```
npm i vue-router -S
```

src/router/index.js

import Vue from 'vue'   // 引入Vue
import Router from 'vue-router'  //引入 vue-router
import Hello from '@/components/Hello'  // 引入HelloComponent
 
Vue.use(Router)  // Vue全局使用Router
 
export default new Router({
  routes: [              // 配置路由，这里是个数组
    {                    // 每一个链接都是一个对象
      path: '/',         // 链接路径
      name: 'Hello',     // 路由名称，
      component: Hello,   // 对应的组件
      children:[
{path:'/',component:xxx},
{path:'xx',component:xxx},
]
    }
  ]
})

<router-link to="/">首页</router-link> // 路由导航
<router-view></router-view> // 组件插槽

子路由
<router-link to="/">首页</router-link> | 
<router-link to="/hi">Hi页面</router-link> |
<router-link to="/hi/hi1">-Hi页面1</router-link> |
<router-link to="/hi/hi2">-Hi页面2</router-link>

<router-view>标签，给子模板提供插入位置。“Hi页面1”   和 “Hi页面2”  都相当于“Hi页面”的子页面，有点想继承关系。我们在“Hi页面”里加入<router-view>标签。

vue-router如何参数传递

两步完成用name传值并显示在模板里：
模板里(src/App.vue)用$router.name的形势接收，比如直接在模板中显示：

<p>{{ $route.name}}</p>
1
<p>{{ $route.name}}</p>

<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>



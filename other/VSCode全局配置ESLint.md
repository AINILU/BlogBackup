## 安装 ESLint 扩展
略 
## 安装 ESLint
如果你仅仅想让 ESLint 成为你项目构建系统的一部分，我们可以在项目根目录进行本地安装：
```bash
$ npm i eslint -S
```
这里我们使用全局安装：
```bash
$ npm i -g eslint
```
安装完毕后，我们使用 `eslint --init` 命令在任何你喜欢的位置进行生成一份文件名为 .eslintrc.js 的配置文件：
```js
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      "tab"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
```
配置文件生成之后，我们接着进行自定义修改
在上文生成的配置文件中可以使用 env 属性来指定要启用的环境，将其设置为 true，以保证在进行代码检测时不会把这些环境预定义的全局变量识别成未定义的变量而报错：
```js
"env": {
  "browser": true,
  "commonjs": true,
  "es6": true,
  "jquery": true
}
```
## 设置语言选项
默认情况下，ESLint 支持 ECMAScript 5 语法
### 对 ECMAScript 其它版本和 JSX 等的支持
ESLint 允许你使用 parserOptions 属性进行指定想要支持的 JavaScript 语言选项
```js
"parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
},
"parser": "babel-eslint",
"plugins": ["react"]
```
因为我们使用全局安装了 ESLint，所以 babel-ealint 和 eslint-plugin-react 插件也必须进行全局安装：
```bash
npm i eslint-plugin-react babel-eslint -g
``` 
### 让 ESLint 支持 Vue 单文件组件
由于 ESLint 默认只支持 js 文件的脚本检测，如果我们需要支持类 html 文件（如 vue）的内联脚本检测，还需要安装 eslint-plugin-html 插件。
eslint-plugin-html 插件也必须进行全局安装：
```bash
npm i eslint-plugin-html -g
```
修改 ESLint 的相关配置
```js
"plugins": ["react", "html"]
```
## 设置 ESLint 扩展
安装并配置完成 ESLint 后，我们继续回到 VSCode 进行扩展设置，依次点击 文件 > 首选项 > 设置 打开 VSCode 配置文件
从左侧系统设置中可以看到，ESLint 扩展默认已经启用，我们现在只需在右侧用户设置中添加配置来指定我们创建的 .eslintrc.js 配置文件路径即可启用自定义规则检测，ESLint 会查找并自动读取它们：
```json
"eslint.options": {
    "configFile": ".eslintrc.js文件的位置",
},
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
]
```
## 使用 eslint-config-airbnb-base 配置规则
1. npm info "eslint-config-airbnb-base@latest" peerDependencies
1. npm install eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.# -g
1. Add "extends": "airbnb-base" to your .eslintrc
## 自定义配置规则
```js
"rules": {
  //官方文档 http://eslint.org/docs/rules/
  //参数：0 关闭，1 警告，2 错误
  // "quotes": [0, "single"],                  //建议使用单引号
  // "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
  "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
  "no-extra-semi": 1, //多余的分号
  "no-extra-parens": 0, //多余的括号
  "no-empty": 1, //空代码块
  //使用前未定义
  "no-use-before-define": [
    0,
    "nofunc"
  ],
  "complexity": [0, 10], //圈复杂度大于*
  //定义数组或对象最后多余的逗号
  "comma-dangle": [
    0,
    "never"
  ],

  // 不允许对全局变量赋值,如 window = 'abc'
  "no-global-assign": ["error", {
    // 定义例外
    // "exceptions": ["Object"]
  }],

  "no-var": 0, //用let或const替代var
  "no-const-assign": 2, //不允许const重新赋值
  "no-class-assign": 2, //不允许对class重新赋值
  "no-debugger": 1, //debugger 调试代码未删除
  "no-console": 0, //console 未删除
  "no-constant-condition": 2, //常量作为条件
  "no-dupe-args": 2, //参数重复
  "no-dupe-keys": 2, //对象属性重复
  "no-duplicate-case": 2, //case重复
  "no-empty-character-class": 2, //正则无法匹配任何值
  "no-invalid-regexp": 2, //无效的正则
  "no-func-assign": 2, //函数被赋值
  "valid-typeof": 1, //无效的类型判断
  "no-unreachable": 2, //不可能执行到的代码
  "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
  "no-sparse-arrays": 1, //数组中多出逗号
  "no-shadow-restricted-names": 2, //关键词与命名冲突
  "no-undef": 1, //变量未定义
  "no-unused-vars": 1, //变量定义后未使用
  "no-cond-assign": 2, //条件语句中禁止赋值操作
  "no-native-reassign": 2, //禁止覆盖原生对象
  "no-mixed-spaces-and-tabs": 0,

  //代码风格优化 --------------------------------------
  "no-irregular-whitespace": 0,
  "no-else-return": 0, //在else代码块中return，else是多余的
  "no-multi-spaces": 0, //不允许多个空格

  //object直接量建议写法 : 后一个空格前面不留空格
  "key-spacing": [
    0,
    {
      "beforeColon": false,
      "afterColon": true
    }
  ],

  "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
  "consistent-return": 1, //函数返回值可能是不同类型
  "accessor-pairs": 1, //object getter/setter方法需要成对出现

  //换行调用对象方法  点操作符应写在行首
  "dot-location": [
    1,
    "property"
  ],
  "no-lone-blocks": 1, //多余的{}嵌套
  "no-labels": 1, //无用的标记
  "no-extend-native": 1, //禁止扩展原生对象
  "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
  "no-loop-func": 1, //禁止在循环体中定义函数
  "no-new-func": 1, //禁止new Function(...) 写法
  "no-self-compare": 1, //不允与自己比较作为条件
  "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
  "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象

  //不允return时有赋值操作
  "no-return-assign": [
    1,
    "always"
  ],

  //不允许重复声明
  "no-redeclare": [
    1,
    {
      "builtinGlobals": true
    }
  ],

  //不执行的表达式
  "no-unused-expressions": [
    0,
    {
      "allowShortCircuit": true,
      "allowTernary": true
    }
  ],
  "no-useless-call": 1, //无意义的函数call或apply
  "no-useless-concat": 1, //无意义的string concat
  "no-void": 1, //禁用void
  "no-with": 1, //禁用with
  "space-infix-ops": 0, //操作符前后空格

  //jsdoc
  "valid-jsdoc": [
    0,
    {
      "requireParamDescription": true,
      "requireReturnDescription": true
    }
  ],

  //标记未写注释
  "no-warning-comments": [
    1,
    {
      "terms": [
        "todo",
        "fixme",
        "any other term"
      ],
      "location": "anywhere"
    }
  ],
  "curly": 0 //if、else、while、for代码块用{}包围
}
```
## 参考文档
- https://segmentfault.com/a/1190000009077086
- https://www.npmjs.com/package/eslint-config-airbnb-base
- http://eslint.cn/docs/user-guide/configuring
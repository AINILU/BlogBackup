## demo-1
普通写法

<script src='lodash.js'></script>
<script src='app/index.js'></script>

引入顺序不能改变

一起在index.html中显示引入

webpack写法

index.js

\+ import _ from 'lodash';

\- script 1
\- script 2

index.html

\+ script dist/bundle.js

./node_modules/.bin/webpack/webpack app/index.js dist/bundle.js

## demo-2

webpack.config.js
```
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

./node_modules/.bin/webpack --config webpack.config.js

```
{
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
}
```

npm run build === ./node_modules/.bin/webpack --config webpack.config.js


## entry

1.
```
entry: 'path' === entry: {
    main: 'path'
}
```

2.
```
entry: ['path1', 'path2', 'path3'] ===entry: {
    main: 'path1', 'path2', 'path3'
}
```

3.
```
entry: {
    app: '',
    vendors: ''
}
```

常见场景
分离 应用程序(app) 和 公共库(vendor) 入口;
多个页面应用程序.

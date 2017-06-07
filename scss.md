# scss语法总结

## 命令行编译

```
sass --watch input.scss:output.css   #单文件
sass --watch app/sass:public/stylesheets   #多文件
--watch  #自动编译
```

## 输出方式

- 嵌套输出方式nested

  `sass --watch test.scss:test.css --style nested`

编译后：

```
h1 {
    font-size :14px;
    color: rgb(35, 71, 75); }
```

- 展开输出方式 expanded（默认样式）

  `sass --watch test.scss:test.css --style expanded`

编译后：

```
h1 {
    font-size :14px;
    color: rgb(35, 71, 75);
}
```

- 紧凑输出方式 compact

  `sass --watch test.scss:test.css --style compact`

编译后：

```
h1 { font-size :14px; color: rgb(35, 71, 75); }
```

- 压缩输出方式 compressed

  `sass --watch test.scss:test.css --style compressed`

编译后：

```
h1{font-size:14px;color:rgb(35,71,75);}
```

## 导入

- css文件`@import "c.css";` 编译后：`@import "c.css";`

- scss文件 `@import "b.scss"; @import "c";`编译后：合并到同一css文件

## 基础用法

```
/*
scss guide
 */
//导入
@import "c";
@import "b.scss";
//变量
$p-width: 100px;
$color: #f0f;
//默认值

$p-width: 200px!default;
$p-left: left;

//list变量
$px1: 10px 20px 30px 40px;
$px2: 10px 20px, 20px 30px;
//map变量
//@each函数
$headings: (h1:2em,h2:1em,h3:3em);

@each $header, $size in $headings {
    #{$header} {
        font-size: $size;
    }
}


//嵌套
p {
    width: $p-width;
    span {
        color: #fff;
    }
    //属性嵌套
    border: {
        left: $p-width;
    }
    //伪类嵌套
    a {
        &:hover {
            color: #fff;
        }
    }
    //变量在class和属性值用法
    margin-#{$p-left}: $p-width;
    border: $px1;

}
//跳出嵌套
.parent1 {
    @at-root .child1 {
        $color: #000 !global;
        color: $color;
    }
}
.parent2 {
    @at-root .child2 & {
        color: $color;
    }
}
//list变量
$linkColor: #08c #333 !default;
a{
  color:nth($linkColor,1);

  &:hover{
    color:nth($linkColor,2);
  }
}
//@mixin混合
//
//
@mixin xiaoming {
    margin-left: 0;
    margin-right: 20px;
}
.demo {
    @include xiaoming;
}
//参数
@mixin hot($border:1px dashed #ccc, $padding:10px){
    border-bottom: $border;
    padding-top: $padding;
    padding-bottom: $padding;
}
.img li {
    @include hot(1px solid #ccc);

}
.img-l li {
    @include hot($padding: 15px);
}
//多个参数值
@mixin box($shadow...) {
    box-shadow: $shadow;
}
.box {
    @include box(1px 2px 2px rgba(0,0,0,.5),1px 2px 2px rgba(0,0,2,.5),1px 2px 2px rgba(0,0,1,.5));
}
//@content
@mixin max-screen($res) {
    @media only screen and (max-width: $res){
        @content;
    }
}
@include max-screen(480px){
    border-bottom: 10px;
};

//@extend继承
h1 {
    border: 1px solid #fff;
}
.speaker {
    @extend h1;
    width: 100px;
}
//%占位
%h2 {
    border-top: 10px;
    border-bottom: 20px;
}
%h3 {
    margin-left: 20px;
    max-width: 100px;
}
.form {
    @extend %h2;
}

//color函数
//rem计算函数
$baseFontsize: 10px!default;
$gray: #ccc!default;
@function pxt($px) {
    @return $px / $baseFontsize * 1rem;
}
body {
    font-size: $baseFontsize;
    color: lighten($gray, 10%);
}
.test {
    font-size: pxt(16px);
    color: darken($gray, 20%);
}
//@if函数

//@for函数
@for $i from 1 through 3 {
    .item-#{$i} {
        width: 2em * $i;
    }
}
```

编译后：

    /*
    scss guide
     */

    h1, .speaker {
        font-size: 2em;
    }

    h2 {
        font-size: 1em;
    }

    h3 {
        font-size: 3em;
    }

    p {
        width: 100px;
        border-left: 100px;
        margin-left: 100px;
        border: 10px 20px 30px 40px;
    }

    p span {
        color: #fff;
    }

    p a:hover {
        color: #fff;
    }

    .child1 {
        color: #000;
    }

    .child2 .parent2 {
        color: #000;
    }

    a {
        color: #08c;
    }

    a:hover {
        color: #333;
    }

    .demo {
        margin-left: 0;
        margin-right: 20px;
    }

    .img li {
        border-bottom: 1px solid #ccc;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .img-l li {
        border-bottom: 1px dashed #ccc;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .box {
        box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5), 1px 2px 2px rgba(0, 0, 2, 0.5), 1px 2px 2px rgba(0, 0, 1, 0.5);
    }

    @media only screen and (max-width: 480px) {
        border-bottom: 10px;
    }

    h1, .speaker {
        border: 1px solid #fff;
    }

    .speaker {
        width: 100px;
    }

    .form {
        border-top: 10px;
        border-bottom: 20px;
    }

    body {
        font-size: 10px;
        color: #e6e6e6;
    }

    .test {
        font-size: 1.6rem;
        color: #999999;
    }

    .item-1 {
        width: 2em;
    }

    .item-2 {
        width: 4em;
    }

    .item-3 {
        width: 6em;
    }

> 了解各个标签的默认样式，有助于更好地理解CSS，也有助于平时写代码，也更容易理解normalize.css，也有利于精简代码。

```
/*根元素*/
head {
    display: none;
}
html {
    display: block;
}
body {
    display: block;
    margin: 8px;
    line-height: 1.3125;
}

/*列表*/
ul,
ol {
    padding-left: 40px;
    margin-top: 1em;
    margin-bottom: 1em;
    display: block;
}

li {
    display: list-item;
}

dl {
    margin-top: 1em;
    margin-bottom: 1em;
    display: block;
}

dt {
    display: block;
}

dd {
    margin-left: 40px;
    display: block;
}
/*标题*/
h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
h4 {
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
h5 {
    display: block;
    font-size: 0.83em;
    -webkit-margin-before: 1.67em;
    -webkit-margin-after: 1.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}
h6 {
    if (0.67em>12px) {
    display: block;
    font-size: 0.67em;
    -webkit-margin-before: 2.33em;
    -webkit-margin-after: 2.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
    } else {
        display: block;
        font-size: 12px;
        -webkit-margin-before: 2.33em;
        -webkit-margin-after: 2.33em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold
    }
}

/*表格*/
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}
caption {
    display: table-caption;
    text-align: -webkit-center;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
th {
    font-weight: bold;
    text-align: -internal-center;
}

td, th {
    display: table-cell;
    vertical-align: inherit;
}

/*块级元素*/
html,
body,
header,
main,
footer,
h1~16,
hgroup,
nav,
section,
articl,
aside,
p,
address,
blockquote,
div,
fieldset,
legend,
form,
figure,
figcaption,
menu,
pre,
plaintext,
listing,
xmp,
summary {
    display: block;
}


/*行内元素*/
strong,
span,
audio,
abbr,
b,
code,
cite,
del,
dfn,
kbd,
ins,
map,
math,
output,
q {
    display: inline;
}

/*行内块元素*/
input,
textarea,
select,
button,
meter,
progress,
img {
    display: inline-block;    
}

```

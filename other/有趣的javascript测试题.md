```
[1 < 2 < 3, 3 < 2 < 1]
```
考点：类型转换

思路：[true < 3, false < 1] => [1 < 3, 0 < 1] => [true, true]

答案：[true, true]

```
// the most classic wtf
2 == [[[2]]]
```
考点：类型转换

思路：2.toString() === '2', [[[2]]].toString() === '2'

答案：true

```
3.toString()
3..toString()
3...toString()
```
考点：3.x

思路：3.x is a valid ‎语法‎ to define "3" with a ‎尾数‎ of x, toString is not a ‎有效‎ number, but the empty string is.

答案：'error', '3', 'error'

```
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);
```
考点：局部变量, 全局变量, 连等

思路：y 不使用 var 声明 表示全局变量

答案：1, error

```
var a = /123/,
    b = /123/;
a == b
a === b
```
考点：正则表达式

思路：字面量相当于new RegExp，无法比较

答案：false, false

```
var a = [1, 2, 3],
    b = [1, 2, 3],
    c = [1, 2, 4]
a ==  b
a === b
a >   c
a <   c
```
考点：数组比较

思路：数组无法使用 == === 但可以使用 >, <

答案：false, false, false, true

```
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]
```
考点：原型链

思路：Functions have a prototype property but other objects don't so a.prototype is undefined.
Every Object instead has an internal property accessible via Object.getPrototypeOf

答案：[false, true]

```
function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b
```
考点：原型链

思路：f.prototype is the object that will become the parent of any objects created with new f while Object.getPrototypeOf returns the parent in the ‎继承‎ ‎层次结构‎.

答案：false

```
function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]
```
考点：函数名

思路：函数名只读

答案：[oldName, foo.name]

```
"1 2 3".replace(/\d/g, parseInt)
```
考点：parseInt

思路：parseInt(1,0), parseInt(2,2), parseInt(3,4)

答案："1 NaN 3"

```
function f() {}
var parent = Object.getPrototypeOf(f);
f.name // ?
parent.name // ?
typeof eval(f.name) // ?
typeof eval(parent.name) //  ?
```
考点：原型链 eval

思路：The function prototype object is defined somewhere, has a name, can be invoked, but it's not in the current scope.

答案：'f', 'Empty', 'function', error

```
var lowerCaseOnly =  /^[a-z]+$/;
[lowerCaseOnly.test(null), lowerCaseOnly.test()]
```
考点：类型转换

思路：the argument is converted to a string with the abstract ToString operation, so it is "null" and "undefined"

答案：[true, true]

```
[,,,].join(", ")
```
考点：join

思路：join特性

答案：', ,'

```
var a = {class: "Animal", name: 'Fido'};
a.class
```
考点：保留字

思路：标识符不可以为保留字

答案：other

```
var a = new Date("epoch")
```
考点：Date对象

思路：You get "Invalid Date", which is an ‎当前‎ Date object (a instanceof Date is true). But invalid. This is because the time is ‎‎Number, which‎在这种情况下‎it's NaN.

答案：Invalid Date

```
var a = Function.length,
    b = new Function().length
a === b
```
考点：Function

思路：It's false. Function.length is defined to be 1. On the other hand, the length property of the Function prototype object is defined to be 0.

答案：false

```
var a = Date(0);
var b = new Date(0);
var c = new Date();
[a === b, b === c, a === c]
```
考点：Date

思路：When Date is invoked as a constructor it returns an object relative to the epoch (Jan 01 1970). When the argument is missing it returns the current date. When it is invoked as a function, it returns a String representation of the current time.

答案：

```
var min = Math.min(), max = Math.max()
min < max
```
考点：Math.min, Math.max

思路：Math.min returns +Infinity when supplied an empty argument list. Likewise, Math.max returns -Infinity.

答案：

```
function captureOne(re, str) {
var match = re.exec(str);
return match && match[1];
}
var numRe  = /num=(\d+)/ig,
wordRe = /word=(\w+)/i,
a1 = captureOne(numRe,  "num=1"),
a2 = captureOne(wordRe, "word=1"),
a3 = captureOne(numRe,  "NUM=2"),
a4 = captureOne(wordRe,  "WORD=2");
[a1 === a2, a3 === a4]

```
考点：正则

思路：Regular expressions in JavaScript if defined using the /g flag will carry a state across matches, even if they are actually used on different strings (the lastIndex property). This means a3 will be null as the regular expression was applied starting from the index of the last matched string, even if it was a different one.

答案：true, false

```
var a = new Date("2014-03-19"),
    b = new Date(2014, 03, 19);
[a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]
```
考点：Date

思路：JavaScript inherits 40 years old design from C: days are 1-indexed in C's struct tm, but months are 0 indexed. In addition to that, getDay returns the 0-indexed day of the week, to get the 1-indexed day of the month you have to use getDate, which doesn't return a Date object.

答案：false, false

```
if ('http://giftwrapped.com/picture.jpg'.match('.gif')) {
  'a gif file'
} else {
  'not a gif file'
}
```
考点：正则

思路：String.prototype.match silently converts the string into a regular expression, without escaping it, thus the '.' becomes a metacharacter matching '/'.

答案：'a gif file'

```
function foo(a) {
    var a;
    return a;
}
function bar(a) {
    var a = 'bye';
    return a;
}
[foo('hello'), bar('hello')]

```
考点：执行上下文

思路：参数比声明先执行，如果变量声明undefined会跳过

答案：['hello', 'bye']
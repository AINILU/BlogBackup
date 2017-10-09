// 字符串特性
var myName = 'chu en wei'
var getAge = function () :number{
  return 15
}
console.log(`i am ${myName}`)
console.log(`i am ${getAge()}`)

// 自动拆分字符串传参到函数中
function test(template, name, age) {
  console.log(template)
  console.log(name)
  console.log(age)
}

test`hello my name is ${myName} and i am ${getAge()}`

// 参数类型
var myname = 'xiaoming' // string
var num = 1 //number
var str:any = 'zhang san' //any
str = 1
var man = true //boolean
function o (num:number) :void{
  // ....
} //void
// 自定义类型
class Person {
  constructor() {
  }
  name:string
  age:number
}

var zhang = new Person()
zhang.name = 'san'
zhang.age = 24

// 参数默认值声明在最后面，可选参数不传输出undefined，可选参数也不能在最前面
function test2(a:string, b?:string, c = 'jojo') {
  console.log(a, b, c)
}
test2('xxx', 'yyy', 'zzz')
test2('xxx', 'yyy')
test2('xxx')

// 析构表达式
function getStock() {
  return {
    code: 'IBM',
    price: {
      price1: 2000,
      price2: 3000
    }
  }
}

var {code: alias, price: {price1}} = getStock()
console.log(alias, price1)

// 数组
var arr = [1, 2, 3]
var [num1, ...args] = arr
console.log(num1, args)

// 循环
// for in key 
// Object.keys()
// for of val
// foreach val， break不支持，属性值不会循环

//类
class Student {
  // new时调用一次constructor
  // 给构造函数加参数new调用时必须传参
  // constructor(name) {
  //   this.name = name
  // }
  // name 等同于下面一行
  constructor (public name) {   
  }
  eat() {
  }
}
 
// 继承
class Xiaoming extends Student{
  constructor (name, code) {
    super(name)
    this.code = code;
  }
  code;
  work() {

  }
}








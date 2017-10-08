// 对象字面量
var clock1 = {
  hour: 23,
  minute: 23,
  second: 23,
  showTime: function () {
    console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
  }
}
clock1.showTime()

// Object构造函数
var clock2 = new Object()
clock2.hour = 22
clock2.minute = 22
clock2.second = 22
clock2.showTime = function () {
  console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
}
clock2.showTime()

// 工厂模式
function ClockFactory(hour, minute, second) {
  // 声明一个中间对象，该对象是工厂的模子
  var obj = new Object()
  obj.hour = hour
  obj.minute = minute
  obj.second = second
  obj.showTime = function () {
    console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
  }
  return obj
}

var clock3 = new ClockFactory(21, 21, 21)
var clock4 = new ClockFactory(20, 20, 20)
clock3.showTime()
clock4.showTime()

// 构造函数
function ClockFunc(hour, minute, second) {
  this.hour = hour
  this.minute = minute
  this.second = second
  this.showTime = function () {
    console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
  }
}

var clock5 = new ClockFunc(19, 19, 19)
var clock6 = new ClockFunc(18, 18, 18)
clock5.showTime()
clock6.showTime()

// 原型模式
function ClockProto() {
}
ClockProto.prototype.hour = 17
ClockProto.prototype.minute = 17
ClockProto.prototype.second = 17
ClockProto.prototype.showTime = function () {
  console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
}
var clock7 = new ClockProto()
clock7.showTime()

// 构造函数 + 原型模式
function ClockFuncProto(hour, minute, second) {
  this.hour = hour
  this.minute = minute
  this.second = second
}
ClockFuncProto.prototype.showTime = function () {
  console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`)
}
var clock8 = new ClockFuncProto(16, 16, 16)
clock8.showTime()

// es6
class ClockEs6 {
  constructor(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  showTime() {
    console.log(`当前时间为：${this.hour}:${this.minute}:${this.second}`);
  }
}

var clock9 = new ClockEs6(15, 15, 15)
clock9.showTime()









/**
 * 创建对象
 */
// 对象字面量
var person = {
  name: 'Tom',
  age: 18,
  getName: function() {},
  parent: {}
}

// new创建
var student = new Object()
student.name = "TOM";
student.getName = function() {
    return this.name;
}

// 工厂模式(封装相同的一类对象)
function factory(name, age) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.getName = function () {
    return this.name
  }
  return obj
}

// 创建实例
var tom = factory('tom', 12)
var jake = factory('jake', 22)

// 类型无法判断
// 属性，方法都是私有的



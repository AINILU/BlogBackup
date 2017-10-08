function Parent(name) {
	this.name = name
}
Parent.prototype.sayName = function () {
	console.log('parent name:', this.name)
}

function Child(name) {
	this.name = name
}

Child.prototype = new Parent('parent') // 赋值
// console.log(Child.prototype.__proto__ === Parent.prototype)
// console.log(Child.prototype.constructor === Parent)
Child.prototype.constructor = Child

Child.prototype.sayName = function () {
	console.log('child name:', this.name)
}

var child = new Child('child')
child.sayName()

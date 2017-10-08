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
// console.log(Child.prototype.name)
// console.log(Child.prototype.__proto__ === Parent.prototype)
// console.log(Child.prototype.constructor === Parent)
Child.prototype.constructor = Child

// Child.prototype.sayName 必须写在 Child.prototype = new Parent('father'); 之后，不然就会被覆盖掉。
Child.prototype.sayName = function () {
	console.log('child name:', this.name)
}

var child = new Child('child')
child.sayName()

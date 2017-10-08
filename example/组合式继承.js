function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log('parent name:', this.name)
}

function Child(name, parentName) {
  Parent.call(this, parentName)
  this.name = name
}

Child.prototype = new Parent()
Child.prototype.construtor = Child

Child.prototype.sayName = function () {
  console.log('child name:', this.name)
}

var child = new Child('son')
child.sayName()
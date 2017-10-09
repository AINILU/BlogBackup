function Person(name) {
  this.name =name
}
Person.prototype.sayName = function () {
  console.log(`person name: ${this.name}`)
}

function Child(name, myname) {
  Person.call(this, myname)
  this.name = name
}

Child.prototype = Object.create(Person.prototype)
Child.prototype.constructor = Child
Child.prototype.sayName = function () {
  console.log(`child name: ${this.name}`)
}

var child = new Child('chu en wei')

child.sayName()

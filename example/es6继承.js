class Parent {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(`parent name: ${this.name}`)
  }
}

class Child extends Parent {
  constructor (name) {
    super(name)
  }
  sayName() {
    console.log(`child name: ${this.name}`)    
  }
}

var child = new Child('chu en wei')
child.sayName()
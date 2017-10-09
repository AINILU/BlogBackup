function* doSthring() {
  console.log('start')
  yield
  console.log('finish')
}

var func = doSthring()
func.next()
func.next()

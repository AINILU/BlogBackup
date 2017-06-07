function observe (data) {
  if(!data || typeof data !== 'object'){
    return
  }

  Object.keys(data).forEach(key => {
    observerProperty(data, key, data[key])
  })
}

function observerProperty(obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (val === newVal || val !== val && newVal !== newVal){
        return
      }
      console.log(`数据更新啦: ${val} => ${newVal}`)
      val = newVal
    }

  })
}

var data = {
  a: 'hello'
}

observe(data)

data.a = 'hello world'

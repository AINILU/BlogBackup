- 取整同时转换成数值型
```
console.log('10.234567' | 0) // 10
console.log('10.234567' ^ 0) // 10
console.log(~~'10.234567') // 10
console.log((-2.9 | 0) === Math.ceil(-2.9)) // true
console.log((2.3 | 0) === Math.floor(2.3)) // true
```

- 位运算符判断元素是否在数组(类数组)中
```
console.log(~-1 === 0) // true
console.log(!!~'abc'.indexOf('d')) // false
if (~'abc'.indexOf('b')) {
  // do...
}

// 等价于

if ('abc'.indexOf('b') !== -1) {
  // do...
}
```

- 数字补零
```
const format = (num, len) => {
  return Array(len + 1).join('0') + num
}
console.log(format(12,3)) // '00012'
```

- 重复指定次数的内容
```
const _repeat = (content, times) => {
  return Array(times + 1).join(content)
}
console.log(_repeat('hello', 3)) // 'hellohellohello'
```

- 获得10位长度随机字符串
```
console.log(Math.random().toString(36).substr(2,10)) // d85u1e4av3
```

- 快速打印一个五分制的评分情况
```
function getRating(rating) {
    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
}

console.log(getRating(0)) // ☆☆☆☆☆

```

- 交换值
```
let a = 1,
    b = 2
a = [b, b = a][0]
console.log(a, b) // 2 1
```

- 取出数组最大值最小值
```
console.log(Math.max.apply(null, [1,2,3,4])) // 4
console.log(Math.min.apply(null, [1,2,3,4])) // 1
```

- 验证是否是数字
```
function _isNum(num) {
  if (typeof num === 'number') {
    return !isNaN(num) && isFinite(num)
  } else return false
}
console.log(_isNum(NaN)) // false
console.log(_isNum(Infinity)) // false
console.log(_isNum(12.1)) // true
console.log(_isNum('12.1')) // false
```

- 字符串去空格
```
function _trim(str) {
  return str.replace(/^\s+|\s+$/, '')
}
console.log(_trim('   hello world    ')) // 'hello world'
```

- 打乱数组的顺序
```
console.log([1,2,6,4,2].sort(() => Math.random() - 0.5)) // [6,2,1,2,4]
```

- 生成元素为 min ~ max 之间的随机数的长度为 len 的数组
```
function _arr(min, max, len) {
    let _arr = []
    for (let i = 0; i < len; i++) {
      _arr[i] = Math.floor(Math.random() * ( max - min + 1 )) + min
    }
    return _arr
}

console.log(_arr(3,9,3)) // [3,5,6]
```

- 生成从0 到 指定值-1 的数字数组
```
console.log([...Array(9).keys()]) // [0,1,2,3,4,5,6,7,8]

```

- 从数组中随机获取成员
```
console.log([1,2,3,4,5,6,7][Math.floor(Math.random() * 7)]) // 4
```

##### 冒泡排序
```
const bubbleSort = arr => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        arr[j] = [arr[j+1], arr[j+1]=arr[j]][0]
      }
    }
  }
  return arr
}

console.log(bubbleSort([1,4,2,3,6,7,8])) // [1,2,3,4,5,6,7,8]
```

##### 快速排序
```
const quickSort = arr => {
  if (arr.length <= 1) return arr
  let idx = Math.floor(arr.length / 2),
      mid = arr.splice(idx, 1)[0],
      left = [],
      right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else right.push(arr[i])
  }
  return quickSort(left).concat([mid],quickSort(right))
}

console.log(quickSort([1,4,2,3,6,7,8])) // [1,2,3,4,5,6,7,8]
```

##### 二分查找
```
const binarySearch = (arr, key) => {
  if (arr.includes(key)) {
    let low = 0,
        high = arr.length - 1
    arr.sort((a,b) => a - b)
    while (low <= high) {
      let mid = Math.floor((low + high) / 2)
      if (key === arr[mid]) return mid
      else if (key < arr[mid]) high = mid -1
      else low = mid + 1
    }
  } else return -1
}

console.log(binarySearch([1,4,2,3,6,7,8], 3)) // 2
```

##### 字符串逆序
```
const reverseStr = str => {
  return str && reverseStr(str.substr(1)) + str[0]
}

console.log('hello world') // 'dlrow olleh'
```
```
const reverseStr = str => {
  return Array.from(str).reduceRight((a, b) => a + b)
}

console.log('hello world') // 'dlrow olleh'
```
```
const reverseStr = str => {
  return str.split('').reverse().join('')
}

console.log('hello world') // 'dlrow olleh'
```

##### 数组去重
```
const rmRepeat = arr => {
  let result = []
  for (var i = 0; i < arr.length; i++) {
    if (!~result.indexOf(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(rmRepeat([1,2,2,3,4,2,4,5]))  // [1,2,3,4,5]
```
```
const rmRepeat = arr => {
  return Array.from(new Set(arr))
}

console.log(rmRepeat([1,2,2,3,4,2,4,5]))  // [1,2,3,4,5]
```

##### 判断是否是回文
```
const palindrome = str => {
  str.replace(/(\W_)+/, '').toLowerCase()
  if (str === str.split('').reverse().join('')) return true
  else return false
}

console.log(palindrome('Hell oolleh')) // false
console.log(palindrome('Helloolleh')) // true

```

##### 函数科里化处理参数
```
function add() {
  var _args = [...arguments];
  var adder = function() {
    var _adder = function() {
        [].push.apply(_args, [...arguments]);
        return _adder;
    };
    _adder.toString = function() {
        return _args.reduce(function(a, b) {
            return a + b;
        });
    }
    return _adder;
  }
  return adder.apply(null, [].slice.call(arguments));
}
    console.log(add(1, 2, 3, 4, 5)); // 15
    console.log(add(1, 2, 3, 4)(5)); // 15
    console.log(add(1)(2)(3)(4)(5)); // 15
```
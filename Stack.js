// es5
var Stack = function() {
  var items = []

  // 在栈顶加入元素
  this.push = function(element) {
    items.push(element)
  }

  // 在栈顶移除元素
  this.pop = function() {
    return items.pop()
  }

  // 检测栈顶
  this.peek = function() {
    return items[items.length - 1]
  }

  // 检查栈是否为空
  this.isEmpty = function() {
    return items.length === 0
  }

  // 清除栈
  this.clear = function() {
    items = []
  }

  // 获取栈的大小
  this.size = function() {
    return items.length
  }

  this.getItems = function() {
    return items
  }
}

// 10进制转2进行
var divBy2 = function(number) {
  var stack = new Stack()
  var yushu

  while(number > 0) {
    yushu = number % 2
    stack.push(yushu)
    number = Math.floor(number / 2)
  }

  var string2 = ''
  while(!stack.isEmpty()) {
    string2 += stack.pop()
  }

  return string2
}

console.log(divBy2(10))


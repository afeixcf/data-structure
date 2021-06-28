var Stack = function(arr) {
  var items = arr || []

  this.push = function(item) {
    items.push(item)
  }
  this.pop = function () {
    return items.pop()
  }
  this.peek = function () {
    return items[items.length - 1]
  }
  this.size = function () {
    return items.length
  }
  this.isEmpty = function () {
    return items.length === 0
  }
  this.clear = function () {
    items = []
  }
  this.getItems = function() {
    return items
  }
}

function divBy2(number) {
  if(number === 0) return 0
  var stack = new Stack()
  var yushu;

  while(number > 0) {
    stack.push(number % 2)
    number = Math.floor(number / 2)
  }

  var string2 = ''
  while(!stack.isEmpty()) {
    string2 += stack.pop()
  }
  return string2
}


function isValid(s) {
  var len = s.length
  if (len % 2 !== 0) return false

  const left_mapping = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const right_mapping = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const right = left_mapping[letter]
    const left = right_mapping[letter]
   
    if (right) {
      stack.push(letter)
    } else if (left && left === stack.peek()) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.size() === 0
}

console.log(isValid('[{}()[{}{}({}[{}{}()])]](){}[]{}[]()'))
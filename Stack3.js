class Stack{
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1] || null
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

function divBy2(number) {
  if (number === 0) return number
  const stack = new Stack()
  
  while(number > 0){
    stack.push(number % 2)
    number = Math.floor(number / 2)
  }

  let string2 = ''
  while(!stack.isEmpty()) {
    string2 += stack.pop()
  }

  return string2
}

function isValid(str) {
  const left_mapping = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
    '《': '》',
  }
  const right_mapping = {}

  Object.keys(left_mapping).forEach((key) => {
    right_mapping[left_mapping[key]] = key
  })

  const stack = new Stack()
  
  for (let i = 0; i < str.length; i++) {
    const n = str[i];
    const right = right_mapping[n] ? n : null
    const left = left_mapping[n] ? n : null

    if (left) {
      stack.push(left)
    } else if (right && stack.peek() === right_mapping[right]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.isEmpty()
}

console.log(isValid('{}[[]]()<>《》-+'))
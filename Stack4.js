class Stack{
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.item.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0
  }
}

function binaryTranslator(number) {
  let remain = 0
  let result = ''
  const stack = []

  while(number > 0) {
    remain = number % 2
    number = Math.floor(number / 2)
    stack.push(remain)
  }

  while(stack.length) {
    result +=stack.pop()
  }
  return result
}

function isValid(str) {
  const stack = []
  const left_mapping = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const right_mapping = {}

  Object.keys(left_mapping).forEach(left => {
    right_mapping[left_mapping[left]] = left
  })

  for (let i = 0; i < str.length; i++) {
    const n = str[i]
    if (left_mapping[n]) {
      stack.push(n)
    } else if(right_mapping[n]) {
      if (right_mapping[n] === stack[stack.length -1]){
        stack.pop()
      }
    } else {
      return false
    }
  }

  return stack.length === 0
}

console.log(isValid('{}({}){}[]'))
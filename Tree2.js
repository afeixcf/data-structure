function Tree() {
  let root = null
  function Node(value) {
    this.left = null
    this.right = null
    this.value = value
  }

  const insertNode = function(node, newNode) {
    const value = node.value
    const newValue = newNode.value

    if (newValue < value) {
      if (node.left) insertNode(node.left, newNode) 
      else node.left = newNode
    } else if (newValue > value){
      if (node.right) insertNode(node.right, newNode)
      else node.right = newNode
    }
  }

  this.insert = function(value) {
    const newNode = new Node(value)

    if (root == null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  const min = function(node) {
    if (node.left) return min(node.left)
    else return node.value
  }
  this.min = function() {
    if (!root) return null
    
    return min(root)
  }

  const max = function (node) {
    if (node.right) return max(node.right)
    else return node.value
  }
  this.max = function () {
    if (!root) return null

    return max(root)
  }

  const traverse = function(node, callback) {
    if (!node) return null
    traverse(node.left, callback)
    callback(node.value)
    traverse(node.right, callback)
  }

  this.traverse = function(callback) {
    traverse(root, callback)
  }

  this.getRoot = function() {
    return root
  }

  const findMinNode = function(node) {
    if (node == null) return node

    while (node.left) {
      node = node.left
    }

    return node
  }

  const removeNode = function(node, value) {
    if (node == null) return null

    if (value < node.value) {
      node.left = removeNode(node.left, value)
    } else if (value > node.value) {
      node.right = removeNode(node.right, value)
    } else {
      if (node.left == null && node.right == null) {
        node = null
      } else if (node.left && node.right == null) {
        node = node.left
      } else if (node.left == null && node.right) {
        node = node.right
      } else {
        const tempNode = findMinNode(node.right)
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
      }
    }

    return node
  }

  this.remove = function(value) {
    root = removeNode(root, value)
  }
}

const tree = new Tree()

tree.insert(3)
tree.insert(2)
tree.insert(5)
tree.insert(4)
tree.insert(1)
tree.insert(11)
tree.insert(7)
tree.insert(6)

tree.remove(5)

console.log(tree.getRoot())

// tree.traverse(console.log)


  //       3
  //   2       5
  // 1     4      11
  //             7
  //           6

// 后序遍历  1 2 4 6 7 11 5 3
// 3 => 3.left => 2 => 2.left => 1 => 1.left => null
//                                 => 1.right => null
//                                 => console.log(1)
//                  => 2.right => null
//                  => console.log(2)
//   => 3.right => 5 => 5.left => 4 => 4.left => null
//                                  => 4.right => null
//                                  => console.log(4)
//                   => 5.right => 11 => 11.left => 7 => 7.left => 6 => 6.left => null
//                                                                   => 6.right => null
//                                                                   => console.log(6)
//                                                    => 7.right => null
//                                                    => console.log(7)
//                                    => 11.right => null
//                                    => console.log(11)
//                   => console.log(5)
//   => console.log(3)
                                                                  

                                  

// 先序遍历 3 2 1 5 4 11 7 6
// 3 => console.log(3) => 3.left => 2 => console.log(2) => 2.left => 1 => console.log(1) => 1.left => null
//                                                                                          1.right => null
//                                                      => 2.right => null
//                     => 3.right => 5 => console.log(5) => 5.left => 4 => console.log(4) => 4.left => null
//                                                                                        => 4.right => null 
//                                                       => 5.right => 11 => console.log(11) => 11.left => 7 => console.log(7) => 7.left = 6 => console.log(6) => 6.left => null
//                                                                                                                                                             => 6.right => null
//                                                                                                                             => 7.right = null
//                                                                                           => 11.right => null

// 中序遍历 1 2 3 4 5 6 7 11 （是有序的）
// 3 => 3.left => 2 => 2.left => 1 => 1.left => null
//                                 => console.log(1)
//                                 => 1.right => null
//                  => console.log(2)
//                  => 2.right => null
//   => console.log(3)
//   => 3.right => 5 => 5.left => 4 => 4.left => null
//                                  => console.log(4)
//                                  => 4.right => null
//                   => console.log(5)
//                   => 5.right => 11 => 11.left => 7 => 7.left => 6 => 6.left => null
//                                                                   => console.log(6)
//                                                                   => 6.right => null
//                                                    => console.log(7)
//                                                    => 7.right => null
//                                    => console.log(11)
//                                    => 11.right => null
                  

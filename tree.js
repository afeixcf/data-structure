/**
 * 二叉搜索树又称二叉排序树
 * 1.最多两个子节点
 * 2.left < self < right
 * 
 * method：
 * insert   添加节点
 * remore   删除节点
 * search   查找节点
 * traverse 遍历节点
 * */

function Tree() {
  var Node = function (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  var root = null

  var insertNode = function(node, newNode) {
    var newValue = newNode.value
    var value = node.value

    if (newValue > value) {
      if (!node.right) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    } else if (newValue < value){
      if (!node.left) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    }
  }
   
  this.insert = function(value) {
    var newNode = new Node(value)
    
    if (root === null) {
      // 1.树未空， 直接插入， 设为root
      root = newNode
    } else {
      // 2.树不为空, 不断对比
      insertNode(root, newNode)
    }
  }

  this.serach = function(value) {

  }

  function traverse (node, callback) {
    if (node == null) return
    callback(node.value) // 先序遍历 8 2 3 9
    traverse(node.left, callback)
    // callback(node.value) // 中序遍历 2 3 8 9
    traverse(node.right, callback)
    // callback(node.value) // 后序遍历 3 2 9 8
  }
  this.traverse = function(callback) {
    traverse(root, callback)
  }

  function findMinNode(node) {
    if (node == null) return null

    while(node.left) {
      node = node.left
    }

    return node
  }

  function findMaxNode(node) {
    if (node == null) return null

    while(node.right) {
      node = node.right
    }

    return node
  }

  function removeNode(node, value) {
    if (node == null) return null

    if (value > node.value) {
      // 继续向右查找
      node.right = removeNode(node.right, value)
    } else if (value < node.value) {
      // 继续向左查找
      node.left = removeNode(node.left, value)
    } else {
      // 执行删除
      if (node.left == null && node.right == null) {
        // 叶节点
        node = null
      } else if (node.left == null && node.right) {
        // 仅有右子节点
        node = node.right
      } else if (node.left && node.right == null) {
        // 仅有左子节点
        node = node.left
      } else {
        // 有两个子节点 查询右侧子树最小节点
        // var aux = findMinNode(node.right)
        var aux = findMinNode(node.right)
        node.value = aux.value
        node.right = removeNode(node.right, aux.value)
      }
    }

    return node
  }

 
  // 替换右侧子树的最小节点
  this.remove = function(value) {
    root = removeNode(root, value)
  }

  this.remove2 = function(removeValue) {
    var tree = new Tree()
    this.traverse((value) => {
      if (value !== removeValue) {
        tree.insert(value)
      }
    })
    root = tree.getRoot()
  }

  function min(node) {
    if (!node) return null

    while(node.left) {
      node = node.left
    }

    return node.value
  }
  this.min = function() {
    return min(root)
  }

  function max(node) {
    if (!node) return null

    while(node.right) {
      node = node.right
    }

    return node.value
  }
  this.max = function() {
    return max(root)
  }

  this.getRoot = function() {
    return root
  }
}

var t = new Tree()

t.insert(11)
t.insert(8)
t.insert(4)
t.insert(9)
t.insert(3)
t.insert(5)
t.insert(10)

t.remove2(8)

console.log(t.getRoot())


          //       11
          //     8 
          //   4   9
          // 3   5   10

// t.traverse(function(value) {
//   console.log('value - ', value)
// })

// console.log(t.min())
// console.log(t.max())

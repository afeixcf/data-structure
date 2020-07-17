function BinarySearchTree() {
  this.root = null;
}
function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (key) {
  // 1.新建节点
  var newNode = new Node(key);
  // 2.判断是否存在根节点
  if (!this.root) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
    if (!node.left) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
};

BinarySearchTree.prototype.preOrderTraversal = function (handler) {
  this.preOrderTraversalNode(this.root, handler);
};

BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
  if (node) {
    //处理经过的节点
    handler(node.key);

    this.preOrderTraversalNode(node.left, handler);
    this.preOrderTraversalNode(node.right, handler);
  }
};

BinarySearchTree.prototype.midOrderTraversal = function (handler) {
  this.midOrderTraversalNode(this.root, handler);
};

BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
  if (node) {
    this.midOrderTraversalNode(node.left, handler);
    handler(node.key);
    this.midOrderTraversalNode(node.right, handler);
  }
};

BinarySearchTree.prototype.postOrderTraversal = function (handler) {
  this.postOrderTraversalNode(this.root, handler);
};

BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
  if (node) {
    this.postOrderTraversalNode(node.left, handler);
    this.postOrderTraversalNode(node.right, handler);
    handler(node.key);
  }
};

BinarySearchTree.prototype.max = function () {
  var node = this.root;
  var key;
  while (node) {
    key = node.key;
    node = node.right;
  }
  return key;
};
BinarySearchTree.prototype.min = function () {
  var node = this.root;
  var key;
  while (node) {
    key = node.key;
    node = node.left;
  }
  return key;
};

BinarySearchTree.prototype.search = function (key) {
  var node = this.root;

  var searchNode = function (key, node) {
    if (!node) return false;
    if (key < node.key) {
      return searchNode(key, node.left);
    } else if (key > node.key) {
      return searchNode(key, node.right);
    } else {
      return true;
    }
  };
  return searchNode(key, node);
  //   while (node) {
  //     if (node.key > key) {
  //       node = node.left;
  //     } else if (node.key < key) {
  //       node = node.right;
  //     } else {
  //       return true;
  //     }
  //   }
};

var bst = new BinarySearchTree();
bst.insert(16);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

var resultString = "";
bst.preOrderTraversal(function (key) {
  resultString += key + " ";
});
console.log(resultString);

resultString = "";
bst.midOrderTraversal(function (key) {
  resultString += key + " ";
});
console.log(resultString);

resultString = "";
bst.postOrderTraversal(function (key) {
  resultString += key + " ";
});
console.log(resultString);

console.log(bst.max());
console.log(bst.min());
console.log(bst.search(23));
console.log(bst.search(8));

export { BST }

function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function show() {
  return this.data
}

function BST() {
  this.root = null
  this.insert = insert
  this.inOrder = inOrder
  this.preOrder = preOrder
  this.posOrder = posOrder
  this.find = find
  this.remove = remove
}

function insert(data) {
  var n = new Node(data, null, null)
  if (this.root == null) {
    this.root = n
  }
  else {
    var current = this.root
    var parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = n
          break
        }
      }
      else {
        current = current.right
        if (current == null) {
          parent.right = n
          break
        }
      }
    }
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left)
    console.log(node.show() + "")
    inOrder(node.right)
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show() + "")
    preOrder(node.left)
    preOrder(node.right)
  }
}

function posOrder(node) {
  if (!(node == null)) {
    posOrder(node.left)
    posOrder(node.right)
    console.log(node.show() + "")
  }
}

function find(data) {
  var current = this.root
  while (current.data != data) {
    if (data < current.data) {
      current = current.left
    }
    else {
      current = current.right
    }
    if (current == null) {
      console.log("\n" + data + " no se encontró" + "\n")
      return null
    }
  }
  console.log("\n" + data + " encontrado" + "\n")
  return current
}

function remove(data) {
  var root = removeNode(this.root, data)
}

function removeNode(node, data) {
  if (node == null) {
    console.log("\n" + data + " no se eliminó" + "\n")
    return null
  }
  if (data == node.data) {

    if (node.left == null && node.right == null) {
      return null
    }

    if (node.left == null) {
      return node.right
    }

    if (node.right == null) {
      return node.left
    }

    var tempNode = getMin(node.right)
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)
    return node
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data)
    return node
  }
  else {
    node.right = removeNode(node.right, data)
    return node
  }
}

function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}
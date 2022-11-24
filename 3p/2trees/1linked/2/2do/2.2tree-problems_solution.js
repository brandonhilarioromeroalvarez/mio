function inorder(n){
  if (n!==null){
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}

function posorder(n){
  if (n!==null){
    posorder(n.l)
    posorder(n.r)
    console.log(n.d)
  }
}

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}


let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node("*")
let q1 = new Node(-2)
let q2 = new Node(7)

p.l = o1
p.r = o2

o2.l = q1
o2.r = q2

inorder(p)
posorder(p)

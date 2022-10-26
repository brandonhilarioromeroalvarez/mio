function contains(k){
  let c = this.head;
  while(c){
    if(c.key === k){
      return true
    }
    c = c.next
  }
  return false
}

function getTail(){
  if(this.size === 0){
    return null;
  }
  return this.tail;
}

function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append  
    this.traverse = traverse
    this.contains = contains
}

function getHead(){return this.head}

function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

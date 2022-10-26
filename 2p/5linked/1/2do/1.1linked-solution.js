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

function Linked(num) {
    this.head = num
    this.tail = num
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append  
    this.traverse = traverse
    this.contains = contains
}

function getHead(){return this.head}

function prepend(num){
    num.next = this.head
    this.head=num
    this.size++
}

function append(num){
    num.next = null
    this.tail.next=num
    this.tail=num
    this.size++
}

function traverse(){
    let t=this.head
    while(t){
	console.log(t.data)
	t=t.next
    }
    console.log('\n')
}

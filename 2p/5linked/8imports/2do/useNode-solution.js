function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1

    this.getHead = getHead
    this.getTail = getTail
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.contains = contains

    this.insertBefore = insertBefore
    this.insertAfter = insertAfter
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
    let t=this.head
    while(t){
	console.log(t.data)
	t=t.next
    }
    console.log('\n')
}

//
// exercise
//

function contains(k){
  let t = this.head;
  while(t){
    if(t.key === k){
      return true
    }
    t = t.next
  }
  return false
}

function getTail(){
  if(this.size === 0){
    return null;
  }
  return this.tail;
}
function insertAfter(nN, k) {
  let ia = this.head
  while (ia) {
    if (ia.key === k) {
      nN.next = ia.next;
      ia.next = nN
      this.size++
      return true
    }
    ia = ia.next
  }
  return false
}


function insertBefore(nN, k) {  
  let ib = this.head
  while (ib) {
    if (ib.next.key === k) { 
      nN.next = ib.next  
      ib.next = nN
      this.size++
      return true  
    }
    ib = ib.next 
  }
  return false   
}
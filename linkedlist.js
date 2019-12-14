
function Node(data){
    this.data=data;
    this.previous=null;
    this.next=null;
}
function List(content) {
    this.content=content;
    this.head = null;
    this.tail=null;
	this.length = 0;
}

List.prototype.isEmpty=function () {
		
	if (this.length == 0) return true;
	else return false;
}
List.prototype.addFront=function (value) {
       let newNode=new Node(value);
    let head=this.head;
    if(head == null){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
        this.head.previous=newNode;
        newNode.next=this.head;
        this.head=newNode;
    }
    this.length++;
    return this;
}
List.prototype.addTail=function (value) {
    let newNode = new Node(value);
	let tail=this.tail;
    if (tail == null) {
       this.head = newNode;
       this.tail = newNode;
    } else {
		this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
       
    }
    this.length++;
    return this;
}
List.prototype.addElement = function (value) {
    let newNode=this.head;
    let account=0;
    while (newNode != null){
        if(this.content(value,newNode.data)>0) {
            newNode = newNode.next;
            account++;
        }
        else
            break;
    }
    if(this.length==0||account==0) 
	{
        return this.addFront(value);
	}
    if(newNode == null) {
        return this.addTail(value);
	}
    let new_node=new Node(value);
    new_node.previous=newNode.previous;
    new_node.next=newNode;
    newNode.previous.next=new_node;
    newNode.previous=new_node;
    this.length++;
    return this;
}



List.prototype.size=function () {
    return this.length;
}

List.prototype.search=function (index) {
    let node=this.head;
    let length=this.length;
    if(index>=length)
        throw new Error('Invalid index');
    else{
        let account=0;
        while (account<index){
            node=node.next;
            account++;
        }
        return node.data;
    }
}



class Queue{
    a=[];
    constructor(maxsize){
        this.maxsize=maxsize;
    }
    enQueue(data){
        if(!this.isFull()){
            this.a[this.a.length]=data;
        }
        else{
            console.log("Queue is full");
        }
    }
    deQueue(){
        var data;
        if(!this.isEmpty()){
            data=this.a.shift();
        }
        else{
            console.log("Queue is empty");
        }
        return data;
    }
    front(){
        return this.a[0]
    }
    queueSize(){
        return this.a.length;
    }
    isEmpty(){
        return this.a.length === 0;
    }
    isFull(){
        return this.a.length>=this.maxSize;
    }
}

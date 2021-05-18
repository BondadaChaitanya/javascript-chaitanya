class Stack{
    a=Array();
    constructor(maxSize){
        this.maxSize=maxSize;
    }
    push(data){
        if(!this.isFull()){
            this.a[this.a.length]=data;
        }
        else{
            return;
        }
    }
    pop(){
        var data;
        if(!this.isEmpty()){
            data=this.a[this.a.length-1];
            //todo
            this.a.splice(this.a.length-1);
        }   
        else{
            return;
        }
        return data;
    }
    top(){
        return this.a[this.a.length-1];
    }
    size(){
        return this.a.length;
    }
    isEmpty(){
        return this.a.length === 0;
        //a.length-1 === -1;
    }
    isFull(){
        return this.a.length>=this.maxSize;
    }
}
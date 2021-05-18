class Dog{
    constructor(name,type,age){
        this.name=name;
        this.type=type;
        this.age=age;
    }
    run(){
        if(this.age>10)
            console.log("can run slow");
        else
            console.log("can run fast");
    }
    setType(type){
        this.type=type;
    }
    display(){
        console.log(this.name + " is a " +this.type);
    }
    setAge(date){
        this.age=2021-date;
    }
}
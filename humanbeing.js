class Humanbeing{
    constructor(name,designation,age){
    this.name= name;
    this.designation= designation;
    this.age = age;
    }
drive(){
    if(this.age>18)
        console.log("he can drive");
    else
        console.log("he cant drive");}
        
}
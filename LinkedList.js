
class List{
    constructor(data, node){
        this.data=data;
        this.node= node;
    }
}
var linkedList4 =new List("asdfasd",null);
var linkedList3 = new List("asdaf",linkedList4)
var linkedList2 =new List("asda",linkedList3)
var linkedList1 = new List("adsafs",linkedList2);
var ll2= new List("asdfsdfsdfsdfsd",null)
var ll1 = new List("asdfas", ll2);


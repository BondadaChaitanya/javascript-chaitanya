var char = ["a","b","d","e","s","t","u","w","z"];
var key = "w"
var n = char.length;
var l=0, r=n,flag=false;
var i=Math.floor((char.length)/2);
while (i >= l && i < r) {
    if(char[i] > key){
        i = Math.floor(i/2);
        r=i+1;
    }
    else if(char[i] < key){
        l=i;
        i = Math.floor((char.length + i)/2);
    }
    else if(char[i] == key){
        console.log(i);
        flag=true;
        break;
    }
}

if(!flag){
    console.log("key not found");
}
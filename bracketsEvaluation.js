var stack= new Stack(2000);
var string ="function(){alert(();}"
try{
for(var i=0;i<string.length;i++){
    console.log(string.charAt(i));
    if(string.charAt(i)==="("){
        stack.push(string.charAt(i));
    }
    
   else if(string.charAt(i)==="{"){
        stack.push(string.charAt(i));
    }
    
    else if(string.charAt(i)==="["){
        stack.push(string.charAt(i));
    }
    else if(string.charAt(i) === ")"){
        var data = stack.pop();
        if(!(data === "(")){
            throw "error in defintion";
        }
    }
    else if(string.charAt(i) === "}"){
        var data = stack.pop();
        if(!(data === "{")){
            throw "error in defintion";
        }
    }
    else if(string.charAt(i) === "]"){
        var data = stack.pop();
        if(!(data === "[")){
            throw "error in defintion";
        }
    }
}
if(!stack.isEmpty()){
    throw "error in defintion";
}
}catch (err){
    console.log(err);
}
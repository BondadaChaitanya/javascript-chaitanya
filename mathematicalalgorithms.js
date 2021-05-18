//coverting a number to decimal to binary
function decimaltobinary() {
    var divident = 4784;
    var divisor = 2;
    var stack = new Stack(20);
    while (divident != 1) {
        divident = Math.floor(divident / divisor);
        stack.push(divident % divisor);
    }
    stack.push(divident);
    var output ="";
    var n = stack.size();
    for(var i=0;i<n;i++){
        output+=stack.pop()
    }
    return output;
}

console.log(decimaltobinary());
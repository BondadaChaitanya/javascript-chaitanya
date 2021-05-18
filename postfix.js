class Postfix {
    constructor(){

    }
    printPostfixExp() {
        var stack = new Stack(20);
        var string = document.getElementById("input").value;
        var output = "";
        //ab+c++ab-a/
        //To-Do:constant
        var operator = ["+", "-", "*", "/", "%"];
        var rightParenthesis = "(";
        var leftParenthesis = ")";
        function check(character, operators) {
            for (var i = 0; i < operators.length; i++) {
                if (character === operators[i])
                    return true;
            }
            return false;
        }
        //To-Do:operator.includes()
        for (var i = 0; i < string.length; i++) {
            if (!(check(string.charAt(i), operator) || string.charAt(i) == rightParenthesis || string.charAt(i) == leftParenthesis)) {
                output += string.charAt(i);
            }
            else if (string.charAt(i) === rightParenthesis) {
                if (!stack.isEmpty()) {
                    output += stack.pop();
                }
                stack.push(string.charAt(i));
            }

            else {
                if (string.charAt(i) === leftParenthesis) {
                    var token=stack.pop();
                    while(token != rightParenthesis){
                        output += token;
                        if(!stack.isEmpty){
                           token= stack.pop();
                        }else{
                            break;
                        }
                    }
                    stack.pop();
                }
                else {
                    if (stack.top() != rightParenthesis){
                        var value;
                        if ((value = stack.pop()) !== undefined) {
                            output += value;
                        }
                    }
                    stack.push(string.charAt(i));
                }
            }
        }
        while (!stack.isEmpty()) {
            output += stack.pop();
        }
        document.getElementsByTagName("p")[0].innerHTML = output;
    }
}
/*

check (1,[2,3]);
check(character (1),operators([2,3])){



}



*/
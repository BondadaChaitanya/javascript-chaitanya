function evalPostFix() {
    var string = document.getElementById("input").value;
    var stack = new Stack(10);
    var operator = ["+", "-", "*", "/", "%"];
    function check(character, operators) {
        for (var i = 0; i < operators.length; i++) {
            if (character === operators[i])
                return true;
        }
        return false;
    }
    for (var i = 0; i < string.length; i++) {
        if (!check(string.charAt(i), operator)) {
            stack.push(string.charAt(i));
        }
        else {
            var a, b;
            a = stack.pop();
            b = stack.pop();
            c = b + string.charAt(i) + a;
            stack.push(eval(c));
        }
    }
    console.log(stack.top());
    if (stack.size() > 1)
        document.getElementById("output").innerHTML = "not a valid expression"
    else
        document.getElementById("output").innerHTML = stack.top();
}

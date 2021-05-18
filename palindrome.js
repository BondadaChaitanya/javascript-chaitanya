//reverse a string
var number = 123321;
var n=number;
var output = 0;
while (number > 0) {
    remainder = number % 10;
    number = Math.floor(number / 10);
    output = output * 10 + remainder
}
if (output === n) {
    console.log("given number is palindrome");
}
else {
    console.log("given number is not palindrome")
}
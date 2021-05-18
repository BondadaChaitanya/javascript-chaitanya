var number = 153;
var final = number;
var power = number.toString().length;
while (number > 0) {
    remainder = number % 10;
    number = Math.floor(number / 10);
    remainder += Math.pow(remainder, power);
}
if (remainder === final) {
    console.log("given number is armstrong number");

}
else {
    console.log("not a armstrong number");
}
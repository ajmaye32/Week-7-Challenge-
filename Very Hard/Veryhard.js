var num1= Number (prompt("type first number"));
var operator= prompt("+, _ * /");
var num2= Number (prompt("type you second number")); 


 function add(num1,num2){
    return num1 + num2
}
var result = add(num1,num2);

function sub(num1,num2) {
    const result = (num1 - num2);
    return num1 - num2
}
var subway = sub(num1,num2);
console.log(subway)

function multiply(num1,num2){
    const result = (num1 * num2);
   return result 
}
   var result = multiply(num1,num2);
   
function divide(num1, num2) {
var results = (num1 / num2)
return results
}

var results = divide(num1,num2);


if(operator === "+"){
    console.log(`${num1} + ${num2} = ${(add(num1,num2))}`);
}else if(operator === "-") {
    console.log(`${num1} - ${num2} = ${(subtract(num1,num2))}`);
}else if(operator === "*") {
    console.log(`${num1} * ${num2} = ${(multiply(num1,num2))}`);
}else{
    console.log(`${num1} / ${num2} = ${(divide(num1,num2))}`);
}
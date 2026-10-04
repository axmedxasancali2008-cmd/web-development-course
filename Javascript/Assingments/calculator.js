let number1=Number(prompt("Enter the first number"))
let number2=Number(prompt("Enter the second number"))
let operator=prompt("Choose arithmetic operation \n 1.Addition \n 2.Substraction \n 3.multiplication \n 4.Division")

if (operator==1) {
  let result=(number1+number2)
  console.log(number1+ "+" + number2 + "=" + result)
} else if(operator==2) {
  let result=(number1-number2)
  console.log(number1+ "-" + number2 + "=" + result)
} else if(operator==3) {
  let result=(number1*number2)
  console.log(number1+ "x" + number2 + "=" + result)
} else if(operator==4) {
  let result=(number1/number2)
  console.log(number1+ "/" + number2 + "=" + result)
}

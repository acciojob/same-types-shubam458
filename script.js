function isSameType(value1, value2) {
  //your js code here
	
   let num1 = Number(value1);
  let num2 = Number(value2);

  // If the values are not numbers, use the original values
  if (isNaN(num1)) {
    num1 = value1;
  }
  if (isNaN(num2)) {
    num2 = value2;
  }

  // Compare the types of the possibly converted values
  if (typeof num1 === typeof num2) {
    return true;
  } else {
    return false;
  }
}
		

	


do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

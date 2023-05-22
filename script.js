function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0'; // Special case for decimal number 0
  }
	let temp = 1;
  let binary = 0;
	let bi = 0;
  while (decimal > 0) {
	  binary = (decimal % 2) ;
	  bi = bi + (binary*temp);
      decimal = parseInt(decimal / 2);
	  temp = temp*10;
  }

  return bi;
}
console.log(decimalToBinary(7))
// Example us

console.log(`Decimal: ${decimalNumber}`);
console.log(`Binary: ${binaryNumber}`);

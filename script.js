function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0'; // Special case for decimal number 0
  }

  let binary = '';

  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}
console.log(decimalToBinary(7));

console.log(`Decimal: ${decimalNumber}`);
console.log(`Binary: ${binaryNumber}`);

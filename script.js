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

// Example usage
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);

console.log(`Decimal: ${decimalNumber}`);
console.log(`Binary: ${binaryNumber}`);

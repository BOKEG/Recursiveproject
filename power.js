function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
      return 1;
    }
    // Recursive case: multiply the base by the result of the power function with exponent decremented by 1
    return base * power(base, exponent - 1);
  }
  
  // Example usage:
  console.log(power(3, 5)); 
  console.log(power(6, 4)); 
  console.log(power(18,0)); 
  
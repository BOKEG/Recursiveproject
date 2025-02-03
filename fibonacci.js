function fibonacci(n) {
    // Base case: if n is 0, return 0
    if (n === 0) {
        return 0;
    }
    // Base case: if n is 1, return 1
    if (n === 1) {
        return 1;
    }
    // Recursive case: return the sum of the two preceding numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(4));  
console.log(fibonacci(9)); 
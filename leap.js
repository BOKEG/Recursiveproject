function isLeapYear(year) {
    switch (true) {
        case (year % 400 === 0):
            return true;
        case (year % 100 === 0):
            return false;
        case (year % 4 === 0):
            return true;
        default:
            return false;
    }
}

// Example usage:
console.log(isLeapYear(2027)); 
console.log(isLeapYear(1801)); 
console.log(isLeapYear(2004)); 

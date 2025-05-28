// Declare a double (floating-point number)
let doubleVal = 12.78;

// Cast double to int using parseInt() (truncates decimal part)
let intFromDouble = parseInt(doubleVal);

// Display result
console.log("Original double value:", doubleVal);
console.log("After casting to int:", intFromDouble);

// Declare an integer
let intVal = 7;

// Cast int to double (actually just treat it as a number with decimals)
let doubleFromInt = Number(intVal); // Or simply: let doubleFromInt = intVal;

// Display result
console.log("Original int value:", intVal);
console.log("After casting to double:", doubleFromInt.toFixed(2));

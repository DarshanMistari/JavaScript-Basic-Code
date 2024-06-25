//Array Method in Javascript

let city = ["Shahada","Nandurbar","Dhule"];

console.log("Orignal Array :",city);

// Push Method insert Last Elements
console.log("push Method :",city.push("Pune"));

console.log(city.push("Nashik"));
console.log(city);

//pop Method Remove Last Element
console.log("\npop Method :",city.pop());

console.log(city.pop());
console.log(city);

// toString Method 
console.log("\ntoString Method :",city.toString());
console.log(city);


//shift Method in insert first Element
console.log("\nElement insert first :",city.unshift("Mumbai"));
console.log(city);

// unShift Method in Element Delete First
console.log("\nunShift Method delete first :",city.shift());
console.log(city);

// slice Method return piece of array 
console.log("Slice Method Return Piece of array ",city.slice(1,3));
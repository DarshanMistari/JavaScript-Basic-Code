
const employee = {
    cal_Tax (){
        console.log("Calculate 10% tax.");
    },
};

const karanArgun = {
    salary : 50000,
};

karanArgun.__proto__ = employee;

console.log("employee :",employee)
console.log("employee prototype :",employee.cal_Tax());


console.log("\n\nPrototype :",karanArgun);
console.log("Prototype :",karanArgun.cal_Tax());

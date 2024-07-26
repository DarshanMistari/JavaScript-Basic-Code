console.log("We are learn Asynchoronos Program");
console.log("They can not be run Sequencly program.");

setTimeout(() => {
    console.log("this is a run 4s  after")
}, 4000);

console.log("hello");
console.log("dont wait the program");
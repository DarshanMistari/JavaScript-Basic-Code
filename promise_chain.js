function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("SuccessFully");
        }, 3000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("SuccessFully");
        }, 3000);
    });
}

console.log("fetching data1.....");
asyncFunc1().then(() =>{
    console.log("fetching data2.....");
    asyncFunc2().then(() => {});
});
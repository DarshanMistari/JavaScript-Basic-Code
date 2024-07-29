const getPromise = () =>{
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve(SuccessFully);
        reject("Some error");
    });
};

let promise = getPromise();
promise.then( ()=>{
    console.log("Promises Fulfilled");
});

promise.catch(()=>{
    console.log("rejected");
});

console.log(promise);
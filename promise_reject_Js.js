 let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");

    reject("some error are occurred");

 });

 console.log(promise);
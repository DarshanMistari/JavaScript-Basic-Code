function sum(a ,b){
    console.log("Addition :",a + b);
}

function calculator(a , b, sumCallback){
    sumCallback(a,b);
}

calculator(5,4,sum);
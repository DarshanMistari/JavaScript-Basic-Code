class car{

    start(){
        console.log("Car is start.")
    }

    stop(){
        console.log("Car is stop.")
    }

    price(car_price){
        console.log("Car Price is :",car_price);
    }

    setbrand(brand){
        console.log("Car Brand :",brand);
    }
}

let toyota = new car();

toyota.price(9000);
toyota.setbrand("Toyotacar");
toyota.start();
toyota.stop();

class car{

    constructor(color){
        console.log("Creating the new Objects.");
        console.log("Car color :",color);
    }

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

let toyota = new car("Balack");
toyota.price(9000);
toyota.setbrand("Toyotacar");
toyota.start();
toyota.stop();

class Laptop{
    dell_Latitude(){
        console.log("Dell latitude 7400.");
        console.log("Configaration: 16gb-ram, 512gb-ssd");
        console.log("Graphics card: inte hd 8gb");
    }

    hp_elitebook(){
        console.log("\n\nHp Elitebook");
        console.log("Configaration: 8gb-ram, 512gb-hhd");
        console.log("Graphics card: nvd 2gb");
    }
}

class Laptop_Company extends Laptop{

    dell_Latitude_Service(){
        console.log("\n\nDell Latitude Services warranty 1 year");
        console.log("Laptop is not Change only Repair.");
        console.log("Solve the Any Problem.");
    }

    hp_elitebook_Service(){
        console.log("\n\nHp Elitebook Services warranty 6 Months");
        console.log("Solve the Laptop Problem");
    }   
}

let Darshan_Laptop_Company = new  Laptop_Company();
Darshan_Laptop_Company.dell_Latitude();
Darshan_Laptop_Company.dell_Latitude_Service();
Darshan_Laptop_Company.hp_elitebook();
Darshan_Laptop_Company.hp_elitebook_Service();
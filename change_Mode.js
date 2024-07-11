let button = document.querySelector(".btn");
let body = document.querySelector("body");

let currentmode = "light";

button.addEventListener("click",()=>{
    if(currentmode == "light")
    {
        currentmode = "dark";
         document.querySelector("body").style.backgroundColor = "black";
         document.querySelector("h1").style.color = "white";
    }
    else
    {
        currentmode = "light";
         document.querySelector("body").style.backgroundColor = "white";
         document.querySelector("h1").style.color = "black";

    }
    console.log(currentmode);
});



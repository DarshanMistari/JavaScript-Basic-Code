function getdata(dataId,getNextData){
    setTimeout(() => {
        console.log("Data :",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getdata(1, () => {
    console.log("getting data2.....");
    getdata(2,() => {
        console.log("getting data3.....");
        getdata(3, ()=>{
            console.log("getting data4.....");
            getdata(4);
        });
    });
});
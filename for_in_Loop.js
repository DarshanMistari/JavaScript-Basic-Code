// For in Loop are used Objects

let Student = {
    name : "Darshan",
    age : 20,
    gread : 'A',
    result : "pass"
};

for(let key in Student)
    {
        console.log("Key :",key ,"\t Value :",Student[key]);
    }
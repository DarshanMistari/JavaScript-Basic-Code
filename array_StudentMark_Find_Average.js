/* For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.*/

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0 ;

for(let i  of marks)
{
    sum = sum + i;
}

console.log("Sum of Marks :",sum)

let avg = sum / marks.length;

console.log("\nAverage of marks of the class :",avg)

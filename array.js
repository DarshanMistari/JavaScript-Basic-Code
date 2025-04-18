let array = [34,56,34,67,34,23];

//Array Element Access
console.log(array[1]);
console.log(array[2]);

console.log("\n");

//Access All Element in Array
for(let i of array)
{
   console.log(i);
}     

console.log("\n");

//Access Array with Index
for(let i=0; i<array.length; i++)
    {
        console.log("Array with Index :",i,":",array[i]);
    }
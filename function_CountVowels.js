/*Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

function countVowels( name ){
    let count = 0;
    
    for(const char of count){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            count ++;
        }
    }

    return count;
}

// let countvowels = countVowels("Hello Every one I am Darshan Mistari")

// console.log("Hello Every one I am Darshan Mistari.");

// console.log("Count the Total Vowel in Sentence :",countvowels);
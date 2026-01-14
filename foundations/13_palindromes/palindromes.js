const palindromes = function (inputString) {
    const cleanString = stringCleaner(inputString.toLowerCase());
    let reverseString = "";
    for(let i = cleanString.length-1; i >= 0; i--){
        reverseString += cleanString[i];
    }
    if(reverseString === cleanString){
        return true;
    }
    return false; 
};

const stringCleaner = function(inputString){
    let returnString = inputString;
    const cleaner = ` ().!,:;`
    for(let i = 0; i < cleaner.length; i++){
        returnString = returnString.replaceAll(cleaner[i], "");
    }
    return returnString;
}


//COMPLETE 


// Do not edit below this line
module.exports = palindromes;

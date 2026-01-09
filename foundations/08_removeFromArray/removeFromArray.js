const removeFromArray = function(arr, ...param) {
    for(const rem of param){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === rem){
                arr.splice(i, 1);
                i--;
            }
        }   
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;

// COMPLETE

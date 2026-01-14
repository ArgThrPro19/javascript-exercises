const fibonacci = function(num) {
    num = +num;
    if(num < 0 )
        return "OOPS";
    if(num === 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    if(num === 2)
        return 1;
    
    return fibonacci(num-1) + fibonacci(num - 2);
};

//COMPLETE


// Do not edit below this line
module.exports = fibonacci;

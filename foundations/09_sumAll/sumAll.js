const sumAll = function(a,b) {
    if(!(Number.isInteger(a) && Number.isInteger(b))|| (a < 0 || b < 0)){
        return `ERROR`;
    }
    let down, up;
    down = (a >= b) ? b : a;
    up = (a >= b) ? a : b;
    let sum = 0;
    for(let i = down; i <= up; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;


// Complete
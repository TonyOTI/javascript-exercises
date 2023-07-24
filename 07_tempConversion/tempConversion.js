const convertToCelsius = function(num) {
    let newNum = (num - 32) * (5/9);
    return +newNum.toFixed(1);
};

const convertToFahrenheit = function(num) {
    let newNum = (num * (9/5)) + 32;
    return +newNum.toFixed(1);
};


// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};

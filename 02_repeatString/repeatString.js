const repeatString = function(string, int) {
    if (int < 0) {
        return "ERROR";
    }
    let arr = []
    for (let i = 0; i < int; i++) {
        arr.push(string);
    }
    return arr.join("");
};

console.log(repeatString("hey", -5));

// Do not edit below this line
module.exports = repeatString;

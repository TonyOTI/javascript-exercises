const repeatString = function(string, int) {
    let arr = []
    for (let i = 0; i < int; i++) {
        arr.push(string);
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function(start, end) {
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }
    else if (start < end) {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    else if (start > end) {
        let sum = 0;
        for (let i = start; i >= end; i--) {
            sum += i;
        }
        return sum;
    }
    else if (start === end) {
        sum = start + end;
        return sum;
    }
};


console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;

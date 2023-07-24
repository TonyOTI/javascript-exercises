const removeFromArray = function(array, ...arg) {
    let filteredArray = array.filter(filter)
    function filter(element) {
        return !arg.includes(element);
    }
    return filteredArray;
};



console.log(removeFromArray([1, 2, 3, 4], 3, 2));


// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function(string) {
    let arr = [];
    for ( let i = 0; i < string.length; i++) {
        arr.push(string[i])
    }

    const reversed = arr.reverse();
    reversed_string = reversed.join("")

    return reversed_string
};

reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;

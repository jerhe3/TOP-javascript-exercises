const reverseString = function (string) {
    let len = string.length
    let res = ''

    for (i = len - 1; i >= 0; i--) {
        res += string[i]
    }

    return res
};

// Do not edit below this line
module.exports = reverseString;

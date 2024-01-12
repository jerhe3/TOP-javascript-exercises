const repeatString = function (string, n) {
    let res = ''

    if (n < 0) return "ERROR"

    for (i = 0; i < n; i++) {
        res += string
    }

    return res
};

// Do not edit below this line
module.exports = repeatString;

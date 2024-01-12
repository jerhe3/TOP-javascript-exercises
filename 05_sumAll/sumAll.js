const isNumber = function (args) {
    return typeof args === 'number'
};

const sumAll = function (x, y) {
    let sum = 0;

    if (!isNumber(x) || !isNumber(y)) {
        return 'ERROR'

    }

    if (x < 0 || y < 0) return 'ERROR'

    start = Math.min(x, y)
    end = Math.max(x, y)


    for (i = start; i <= end; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;

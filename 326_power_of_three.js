/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    while (n % 3 == 0) {
        n /= 3;
    }
    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
};
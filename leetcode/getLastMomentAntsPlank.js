/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    return Math.max(Math.max(...left) ?? 0, n - (Math.min(...right) ?? n));
};

console.log(getLastMoment(4, [4, 3], [0, 1]));
console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7]));

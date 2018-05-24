"use strict";
var nth = 49;
var set = 6;
//Using the formulae P=n!/(n-k)!
var NumberOfArrangements = function (n, k) {
    var numberOfPossibleWays = Factorial(n) / Factorial(n - k);
    return numberOfPossibleWays;
};
var Factorial = function (num) {
    if (num == 0)
        return 1;
    return num * Factorial(num - 1);
};
console.log(NumberOfArrangements(nth, set));

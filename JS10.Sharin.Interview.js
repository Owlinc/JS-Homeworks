/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */

const solutionFn = (num) => {
    while (num >= 10) {
        num = String(num)
            .split('')
            .map(Number)
            .reduce((product, digit) => product * digit, 1);
    }
    return num;
};

console.log(solutionFn(4));     // 4
console.log(solutionFn(42));    // 8
console.log(solutionFn(999));   // 2
console.log(solutionFn(1342));  // 8: 1 * 3 * 4 * 2 = 24, 2 * 4 = 8
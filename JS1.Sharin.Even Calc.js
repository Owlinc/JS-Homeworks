/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */

const solutionFn = (numbers) => {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
};

// Пример использования
const numbers = [1, 2, 3, 4, 5, 6];
const result = solutionFn(numbers);
console.log(result); // 12
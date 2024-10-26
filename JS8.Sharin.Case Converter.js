/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */

const solutionFn = (snakeCaseString) => {
    return snakeCaseString
        .split('_')
        .map((word, index) =>
            index === 0 
                ? word 
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
};

// Пример использования
const snakeData = 'data_in_snake_case';
const result = solutionFn(snakeData);
console.log(result)

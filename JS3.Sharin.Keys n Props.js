/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */

/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */

const solutionFn = (obj) => {
    const typeCounts = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];

            if (typeCounts[type]) {
                typeCounts[type]++;
            } else {
                typeCounts[type] = 1;
            }
        }
    }

    return typeCounts;
};

// Пример использования
const initialObject = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObject = solutionFn(initialObject);

console.log(resultObject);
/**
 * {
 *   string: 1,
 *   number: 2,
 *   object: 2
 * } 
 */
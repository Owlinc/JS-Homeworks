/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */

const filter = (array, filterFn, inplace = false) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filterFn(element, i, array)) {
            result.push(element); // Добавляем элемент в новый массив

            // Если inplace истинно, удаляем элемент из исходного массива
            if (inplace) {
                array.splice(i, 1);
                i--; // Уменьшаем индекс, чтобы учесть удаление
            }
        }
    }

    return result; // Возвращаем отфильтрованный массив
};

// Пример использования
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]
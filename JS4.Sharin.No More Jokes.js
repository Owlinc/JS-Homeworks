/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */

const sum = (leftOperand, rightOperand) => {
    // Проверяем, является ли левый операнд числом
    if (typeof leftOperand !== 'number') {
        if (typeof rightOperand !== 'number') {
            throw new Error("Operands are not numbers");
        }
        throw new Error("The left operand is not number");
    }

    // Проверяем, является ли правый операнд числом
    if (typeof rightOperand !== 'number') {
        throw new Error("The right operand is not number");
    }

    // Если оба операнда числовые, возвращаем их сумму
    return leftOperand + rightOperand;
};

// Пример использования
console.log(sum(1.5, 2.5)) //4
console.log(sum(1.5, 2.5)); // 4

try {
    console.log(sum('1', 2)); // Ошибка: The left operand is not number
} catch (error) {
    console.error(error.message);
}

try {
    console.log(sum(1, '2')); // Ошибка: The right operand is not number
} catch (error) {
    console.error(error.message);
}

try {
    console.log(sum('1', '2')); // Ошибка: Operands are not numbers
} catch (error) {
    console.error(error.message);
}

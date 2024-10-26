/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */

const hitOrRun = (a, b) => {
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;

    const isPrime = (num) => {
        if (num < 2) return false;
        // Если число можно разложить на два множителя, то хотя бы один из этих множителей...
        // ...будет меньше или равен корню числа (иначе их произведение превысит число)
        // Поэтому делаем проверку на числа от 2 до корня
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return isPrime(randomNum) ? 'run' : 'hit';
};


// Пример использования
console.log(hitOrRun(2, 50))
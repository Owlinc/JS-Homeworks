/**
 * Останавливает время на определённое количество миллисекунд
 * 
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */

async function theWorld(ms) {
    const seconds = Math.ceil(ms / 1000);

    // Выводим обратный отсчет в консоль
    for (let i = seconds; i >= 0; i--) {
        console.log(`Time will continue running in ${i}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Пример использования:
console.log('Выведется до остановки времени');
theWorld(6000).then(() => {
    console.log('Выведется после того, как время продолжит ход');
});

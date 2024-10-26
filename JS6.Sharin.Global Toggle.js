/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */

const globalToggle = (className) => {
    const elements = document.querySelectorAll(`.${className}`)

    if (elements.length === 0) {
        return;
    }

    // Определяем, активный ли класс
    const isActive = className.endsWith('_active');
    const conterClassName = isActive ? className.replace('_active', '') : className + '_active';

    // Переключаем класс для всех найденных элементов
    elements.forEach((element) => {
        element.classList.remove(className);
        element.classList.add(conterClassName);
    });
};

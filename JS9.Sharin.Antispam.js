/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text Текст, проверяемый на спам
 * @param {String[]} keywords Массив ключевых слов
 * @returns {Boolean}
 */

const isSpam = (text, keywords) => {
    const lowerText = text.toLowerCase();
    return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
};

// Пример использования
// Пример 1: Текст содержит одно из ключевых слов
const text1 = "Поздравляем! Вы выиграли бесплатную путевку на море!";
const keywords1 = ["выиграли", "бесплатно", "приз"];
console.log(isSpam(text1, keywords1)); // true, так как слово "выиграли" есть в тексте

// Пример 2: Текст не содержит ни одного из ключевых слов
const text2 = "Здравствуйте! Хотим обсудить вашу победу)";
const keywords2 = ["выиграли", "подарок", "спешите"];
console.log(isSpam(text2, keywords2)); // false, ни одно ключевое слово не содержится в тексте


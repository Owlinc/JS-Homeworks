/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */

const getMinimalCVS = (initialCommit) => {
    const history = [initialCommit]; 

    return {
        head: () => {
            return history[history.length - 1];
        },
        history: () => {
            return history; 
        },
        push: (element) => {
            const newVersion = [...history[history.length - 1], element];
            history.push(newVersion);
        },
        pop: () => {
            const lastVersion = history[history.length - 1];
            const removedElement = lastVersion[lastVersion.length - 1];
            const newVersion = lastVersion.slice(0, lastVersion.length - 1);
            history.push(newVersion);
            return removedElement
        }
    };
};


// Пример использования
const cvs = getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());
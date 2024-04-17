const str1 = "Lorem, ipsum dolor sit lorem dolor.";

// So'zlar va harflar uchun map va set
const wordMap = new Map();
const letterSet = new Set();
const words = str1.split(/\s|,|\./).filter(word => word !== "");
words.forEach(word => {
    const lowercaseWord = word.toLowerCase();
    if (wordMap.has(lowercaseWord)) {
        wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
    } else {
        wordMap.set(lowercaseWord, 1);
    }
    for (let i = 0; i < lowercaseWord.length; i++) {
        letterSet.add(lowercaseWord[i]);
    }
});
console.log("So'zlar:", words);
console.log("So'zlar va ularning necha marta uchrashini hisoblash:");
console.log([...wordMap].reduce((acc, [word, count]) => {
    acc[word] = count;
    return acc;
}, {}));
console.log("Harflar:", [...letterSet]);
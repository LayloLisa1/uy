function difference(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const uniqueSet = new Set(mergedArray);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

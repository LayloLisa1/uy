function move(array, fromIndex, toIndex) {
    if (fromIndex < 0) fromIndex = array.length + fromIndex;
    if (toIndex < 0) toIndex = array.length + toIndex;
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2)); 

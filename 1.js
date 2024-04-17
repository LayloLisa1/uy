function countSundays() {
    let count = 0;
    for (let year = 2000; year <= 2050; year++) {
        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 1);
            if (date.getDay() === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(countSundays());

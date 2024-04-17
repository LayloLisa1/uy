function getLastDay(year, month) {
    return new Promise((resolve, reject) => {
        try {
            const date = new Date(year, month + 1, 0);
            const lastDay = date.getDate();
            resolve(lastDay);
        } catch (error) {
            reject(error);
        }
    });
}
async function lastday(year, month) {
    try {
        const lastDay = await getLastDay(year, month);
        return lastDay;
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return null;
    }
}
lastday(2014, 0).then(result => {
    console.log(result);
}).catch(error => {
    console.error("Xatolik yuz berdi:", error);
});

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
function getBirthDate() {
    return new Promise((resolve, reject) => {
        const birthDate = prompt("Tug'ilgan sanangizni (Mavjud format: YYYY-MM-DD) kiriting:");
        if (birthDate) {
            resolve(new Date(birthDate));
        } else {
            reject(new Error("Tug'ilgan sanani kiriting!"));
        }
    });
}
async function remainingTimeUntilNextBirthday() {
    try {
        const birthDate = await getBirthDate();
        const today = new Date();
        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }
        const daysLeft = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
        const monthsLeft = nextBirthday.getMonth() - today.getMonth();
        const yearsLeft = nextBirthday.getFullYear() - today.getFullYear();
        console.log(`Sizning keyingi tug'ilgan kuningizga ${yearsLeft} yil, ${monthsLeft} oy va ${daysLeft} kun qoldi.`);
    } catch (error) {
        console.error(error.message);
    }
}
remainingTimeUntilNextBirthday();
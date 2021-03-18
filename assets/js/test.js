let availableNumber = []

for (let i = 1; i <= 76; i++) {
    availableNumber.push(i)
}

console.log('availableNumber:', availableNumber.length)

const avoidRepetition = () => {
    let stillAvailable = true
    let pos = false
    let randomNum = 0

    do {
        randomNum = Math.floor(Math.random() * 76 + 1)
        pos = availableNumber.includes(randomNum)
        if (pos === true) { //
            availableNumber.splice(availableNumber.indexOf(randomNum), 1)
            stillAvailable = false
        }

    } while (stillAvailable);

    return randomNum
}
avoidRepetition()


console.log('availableNumber:', availableNumber.length)
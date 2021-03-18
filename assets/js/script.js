let mainboard = document.getElementById("board")
let userboards = document.getElementById("userboards")
let availableNumber = []
let rounds = 0

const fillBingoField = (numOfFields, board, isUserBoard) => {
    for (let i = 1; i <= numOfFields; i++) {
        let field = document.createElement("div")
        let h3 = document.createElement("h3")
        if (isUserBoard) {
            console.log("test");
            for (let i = 0; i < 76; i++) {
                availableNumber.push(i)
            }
            field.appendChild(h3).innerText = avoidRepetition()
            field.classList.add("field")
            board.appendChild(field)
        } else {
            field.appendChild(h3).innerText = i
            field.classList.add("field")
            board.appendChild(field)

            availableNumber.push(i)
        }
    }

}


const tryYourLuck = () => {
    let randomNum = avoidRepetition()
    const fieldSelected = document.querySelector(".selected")
    console.log('fieldSelected:', fieldSelected)

    document.getElementById("luckyNumber").innerText = randomNum

    if (fieldSelected) {
        //fieldSelected.classList.remove("selected")
    }

    for (let i = 0; i < board.children.length; i++) {
        if (randomNum === parseInt(board.children[i].innerText)) {
            board.children[i].classList.add("selected")
            for (const item of userboards) {
                item.children[i].classList.add("selected")
            }
        }

    }
    console.log('availableNumber:', availableNumber)

}

const howManyRound = (params) => {
    rounds = prompt("How many boards you want to play?")
}

window.onload = function(params) {

    //howManyRound()
    fillBingoField(76, mainboard, false)

    for (let i = 1; i <= 3; i++) {
        let div = document.createElement("div")
        div.classList.add(`uboard${i}`)
        userboards.appendChild(div)
        fillBingoField(24, div, true)
    }
}


const avoidRepetition = () => {
    let stillAvailable = true
    let pos = false
    let randomNum = 0
    if (availableNumber.length === 0) {
        document.getElementById("luckyNumber").innerText = "End"
        return alert("That have been all the numbers!")
    }
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
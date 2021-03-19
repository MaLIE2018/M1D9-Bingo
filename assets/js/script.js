let mainboard = document.getElementById("board")
let userboards = document.getElementById("userboards")
let availableNumber = []
let userfieldNumbers = []
let numberOfuserboardFields = 24
let rounds = 0


const FillArray = (count) => {
    for (let i = 0; i < count; i++) {
        userfieldNumbers.push(i)
    }
}

const fillBingoField = (numOfFields, board, isUserBoard) => {
    for (let i = 1; i <= numOfFields; i++) {
        let field = document.createElement("div")
        let h3 = document.createElement("h3")
        if (isUserBoard) {
            FillArray(76)
            field.appendChild(h3).innerText = avoidRepetition(userfieldNumbers)
            field.classList.add("field")
            board.appendChild(field)
            userfieldNumbers = []
        } else {
            field.appendChild(h3).innerText = i
            field.classList.add("field")
            board.appendChild(field)
            availableNumber.push(i)
        }
    }
}


const tryYourLuck = () => {
    let randomNum = avoidRepetition(availableNumber)
    const fieldSelected = document.querySelector(".selected")



    document.getElementById("luckyNumber").innerText = randomNum

    if (fieldSelected) {
        //fieldSelected.classList.remove("selected")
    }

    for (let i = 0; i < board.children.length; i++) {
        if (randomNum === parseInt(board.children[i].innerText)) {
            board.children[i].classList.add("selected")
        }
    }


    for (let i = 0; i < userboards.children.length; i++) {
        for (let j = 0; j < userboards.children[i].children.length; j++) {
            if (randomNum === parseInt(userboards.children[i].children[j].innerText)) {
                userboards.children[i].children[j].classList.add("selected")
            }
        }
    }

    //WinLost situation
    for (let i = 0; i < mainboard.children.length; i++) {
        if (mainboard.children[i].getElementsByClassName("selected").length === 76) {
            alert(`Sorry, you lost. New Game?`)
            setTimeout(function() {
                window.location.reload()
            }, 300)
        }
    }

    for (let i = 0; i < userboards.children.length; i++) {
        if (userboards.children[i].getElementsByClassName("selected").length === numberOfuserboardFields) {
            alert(`You won on board ${i+1} New Game?`)
            setTimeout(function() {
                window.location.reload()
            }, 300)
        }

    }


}


const howManyRound = (params) => {
    rounds = prompt("How many boards you want to play?")
}

window.onload = function(params) {

    howManyRound()
    fillBingoField(76, mainboard, false)

    for (let i = 1; i <= rounds; i++) {
        let div = document.createElement("div")
        div.classList.add("uboard")
        userboards.appendChild(div)
        fillBingoField(numberOfuserboardFields, div, true)
    }
}


const avoidRepetition = (array) => {
    let stillAvailable = true
    let pos = false
    let randomNum = 0
    if (array.length === 0) {
        document.getElementById("luckyNumber").innerText = "End"
        return alert("That have been all the numbers!")
    }
    do {
        randomNum = Math.floor(Math.random() * 76 + 1)
        pos = array.includes(randomNum)
        if (pos === true) { //
            array.splice(array.indexOf(randomNum), 1)
            stillAvailable = false
        }

    } while (stillAvailable);

    return randomNum
}
let board = document.getElementById("board")

const fillBingoField = () => {
    for (let i = 1; i <= 76; i++) {
        let field = document.createElement("div")
        let h3 = document.createElement("h3")
        field.appendChild(h3).innerText = i
        field.classList.add("field")
        board.appendChild(field)
    }

}

const tryYourLuck = () => {
    let randomNum = Math.floor(Math.random() * 76 + 1)
    const fieldSelected = document.querySelector(".selected")
    console.log('fieldSelected:', fieldSelected)

    document.getElementById("luckyNumber").innerText = randomNum

    if (fieldSelected) {
        fieldSelected.classList.remove("selected")
    }

    for (let i = 0; i < board.children.length; i++) {
        if (randomNum === parseInt(board.children[i].innerText)) {
            board.children[i].classList.add("selected")
        }

    }

}


window.onload = function(params) {
    fillBingoField()
}
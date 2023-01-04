let newWord = ""
let rowTracker = 1
let keyBoard = document.getElementById("keyboard")

document.querySelectorAll(".wordButton").forEach(item => {
    item.addEventListener("click", () => {
        getWord(item.id)
    })
})

document.getElementById("Backspace").addEventListener("click", () => {
    deleteLetterOne();
})

let i = 0;
function setLetter(letter) {
    let selectedCell = document.getElementById(`rowOneID${i}`)
    selectedCell.innerHTML = letter;
    i += 1;
}

function deleteLetterOne() {
    if (i >= 0) {
        let selectedCell = document.getElementById(`rowOneID${i-1}`)
        selectedCell.innerHTML = "";
        i -= 1;
    }
}

function enter() {
    rowTracker += 1;
}

async function getWord(length) {
    await fetch(`https://random-word-api.herokuapp.com/word?length=${length}`)
        .then(response => response.json())
        .then(data => {
            newWord = data.toString();
            wordLength = newWord.length
            wordArray = [...newWord]
            keyBoard.style.display = "inline";
            for (let i = 0; i < length; i++) {
                var newBox = document.createElement('div');
                newBox.className = "gridBox1"
                newBox.id = `rowOneID${i}`
                document.getElementById('grid1').appendChild(newBox)
            }
            for (let i = 0; i < length; i++) {
                var newBox = document.createElement('div');
                newBox.className = "gridBox2"
                newBox.id = `rowTwoID${i}`
                document.getElementById('grid2').appendChild(newBox)
            }
            for (let i = 0; i < length; i++) {
                var newBox = document.createElement('div');
                newBox.className = "gridBox3"
                newBox.id = `rowThreeID${i}`
                document.getElementById('grid3').appendChild(newBox)
            }
            for (let i = 0; i < length; i++) {
                var newBox = document.createElement('div');
                newBox.className = "gridBox4"
                newBox.id = `rowFourID${i}`
                document.getElementById('grid4').appendChild(newBox)
            }
            for (let i = 0; i < length; i++) {
                var newBox = document.createElement('div');
                newBox.className = "gridBox5"
                newBox.id = `rowFiveID${i}`
                document.getElementById('grid5').appendChild(newBox)
            }
            document.querySelectorAll(".wordButton").forEach(button => {
                button.remove();
            })
            
        })

}








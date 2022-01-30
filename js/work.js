const userGrid = document.querySelector('.grid-user')
const width = 10
const userSquares = []

function createBoard(grid, squares) {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.style.backgroundColor = "aqua"
        square.setAttribute("id", i)
        square.setAttribute("onclick","it(" + i + ")")
        square.setAttribute("class", "classi")
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard(userGrid, userSquares);

var recordPoint = []

function it(e) {
    document.getElementById(e).style.backgroundColor = "red";
    for (let i = 0; i < width*width; i++) {
        if (recordPoint[i] == null) {
            recordPoint[i] == e;
        }
    }
}

const barca1 = document.getElementById("barca-1")
const barca2 = document.getElementById("barca-2")
const barca3 = document.getElementById("barca-3")
const barca4 = document.getElementById("barca-4")
const barca5 = document.getElementById("barca-5")

var ciao = true;

function ship() {
    if (ciao == true) {
        for (let i = 0; i < 4; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "red";
            barca1.appendChild(ship1)
        }
        for (let i = 0; i < 3; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "violet";
            barca2.appendChild(ship1)
        }
        for (let i = 0; i < 2; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "seagreen";
            barca3.appendChild(ship1)
        }
        for (let i = 0; i < 2; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "slateblue";
            barca4.appendChild(ship1)
        }
        for (let i = 0; i < 1; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "darkorange";
            barca5.appendChild(ship1)
        }
        ciao = false
    }
}
const userGrid = document.querySelector('.grid-user')
const width = 10
const userSquares = []

function createBoard(grid, squares) {
    let x = 0, y = 0
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.style.backgroundColor = "aqua"
        square.setAttribute("id", i)
        square.setAttribute("onclick","it(" + i + ")")
        square.setAttribute("class", "classi")
        square.setAttribute("data-x", x)
        square.setAttribute("data-y", y)
        grid.appendChild(square)
        squares.push(square)
        if (++x == width) {
            x = 0
            y++
        }
    }
}
createBoard(userGrid, userSquares);


const barche = [
    document.getElementById("barca-1"),
    document.getElementById("barca-2"),
    document.getElementById("barca-3"),
    document.getElementById("barca-4"),
    document.getElementById("barca-5")
]

var firstBox = null
var lastBox = null
var axis
let counterBox = 1
var shipIndex = 0

function it(e) {
    if (!pippo) {
        const shipColor = barche[shipIndex].firstChild.style.backgroundColor;
        let element = document.getElementById(e)

        if (element.getAttribute("data-placed"))
        {
            alert("non va bene")
            return
        }

        element.setAttribute("data-placed", true)
        let coordinates = {
            x: parseInt(element.getAttribute("data-x")),
            y: parseInt(element.getAttribute("data-y"))
        }
        if (firstBox == null) {
            element.style.backgroundColor = shipColor;
            firstBox = coordinates
        } else if(lastBox == null) {
            if (
                Math.abs(firstBox.x - coordinates.x) == 1 && firstBox.y == coordinates.y  ||
                Math.abs(firstBox.y - coordinates.y) == 1 && firstBox.x == coordinates.x 
            ) {
                element.style.backgroundColor = shipColor;
                lastBox = coordinates
                if (firstBox.x > coordinates.x || firstBox.y > coordinates.y) {
                    let t = firstBox
                    firstBox = lastBox
                    lastBox = t
                }
                axis = firstBox.x == coordinates.x ? "y" : "x"
            } else {
                alert("non va bene")
                return;
            } 
        } else if (firstBox[axis] - coordinates[axis] == 1) {
            element.style.backgroundColor = shipColor;
            firstBox = coordinates
        } else if (coordinates[axis] - lastBox[axis] == 1) {
            element.style.backgroundColor = shipColor;
            lastBox = coordinates
        } else {
            alert("non va bene")
            return
        }

        if (counterBox++ % barche[shipIndex].childElementCount == 0) {
            firstBox = lastBox = null
            axis = null
            counterBox = 1
            shipIndex++;
        }

        if (shipIndex == barche.length)
        {
            pippo = true;
        }
    }
}

var ciao = true;
var pippo = true;

function ship() {
    if (ciao) {
        for (let i = 0; i < 4; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "red";
            barche[0].appendChild(ship1)
        }
        for (let i = 0; i < 3; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "violet";
            barche[1].appendChild(ship1)
        }
        for (let i = 0; i < 2; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "seagreen";
            barche[2].appendChild(ship1)
        }
        for (let i = 0; i < 2; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "slateblue";
            barche[3].appendChild(ship1)
        }
        for (let i = 0; i < 1; i++) {
            const ship1 = document.createElement('div');
            ship1.setAttribute("class", "classi")
            ship1.style.backgroundColor = "darkorange";
            barche[4].appendChild(ship1)
        }
        ciao = false
        pippo = false
    }
}
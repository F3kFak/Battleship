const userGrid = document.querySelector('.grid-user')
const width = 10
const userSquares = []

function createBoard(grid, squares) {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.setAttribute("id", i)
        square.setAttribute("onclick","it(" + i + ")")
        square.setAttribute("class", "classi")
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard(userGrid, userSquares);

function it(e) {
    document.getElementById(e).classList.toggle = "change"
}
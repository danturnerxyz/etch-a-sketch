const container = document.querySelector('.container')
const btn = document.getElementById('btn')

function makeSquare(num) {
    for ( i = 0; i < num; i++ ) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
}

window.addEventListener('load', () => {
    makeSquare(16 * 16)
})

container.addEventListener('mouseover', (ev) => {
    ev.target.classList.add('active')
})

btn.addEventListener('click', (ev) => {
    let canvasSize = prompt('Enter new canvas size')
})

function makeCanvas(num) {
    let area = num * 2
}




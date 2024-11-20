const container = document.querySelector('.container')
const btn = document.getElementById('btn')

let containerW = 700

function createCanvas(num) {
    container.innerHTML = ''
    for ( i = 0; i < num * num; i++ ) {
        const square = document.createElement('div')
        square.style.width = `${containerW / num}px`
        square.style.height = `${containerW / num}px`
        square.classList.add('square')
        container.appendChild(square)
    }
}

container.addEventListener('mouseover', (ev) => {
    if (ev.target.classList.contains('square')) {
        ev.target.classList.add('active')
    }
})

btn.addEventListener('click', (ev) => {
    let userPrompt = prompt('Enter new canvas size: 1 - 100')
    if (!isNaN(userPrompt) && (userPrompt <= 100) && (userPrompt >= 1) ) {
        userPrompt = userPrompt
    }  
    else if (!isNaN(userPrompt) || (userPrompt > 100) || (userPrompt == 0)) {
        alert('Enter a number between 1 - 100')
        return
    }
    else {
        alert('Enter a number between 1 - 100')
        return
    }
    createCanvas(userPrompt)
})




let ground = document.querySelector('.ground');
const amountOfBoxes = 725;
let colors = ['red','green','blue','yellow','purple'];



// append() - указывает что появится внутри элемента к которому вы обращаетесь

for(let i = 0; i < amountOfBoxes;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = randColor()
}

function removeColor(asd) {
    asd.style.background = 'rgb(64, 60, 60)'
}

function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
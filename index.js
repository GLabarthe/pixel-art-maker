let mainDiv = document.querySelector(".main")

for (let i=0; i<50; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.className = "row"
    mainDiv.appendChild(rowDiv)

    for (let i=0; i<50; i++) {
        let divTag = document.createElement('div')
        divTag.className = "pixl-box"
        rowDiv.appendChild(divTag)
    }
}

//empty row
let rowDiv = document.createElement('div')
rowDiv.className = "row"
//rowDiv.style.height = '20px'
mainDiv.appendChild(rowDiv)
let textBox = document.createElement('textarea')
rowDiv.appendChild(textBox)
textBox.style.border = "2px black solid"
//textBox.innerText = "No color selected"
textBox.style.backgroundColor = 'black'
textBox.style.marginTop = "2px"
textBox.style.marginBottom = "2px"

function paletteColorSelected (evt) {
    textBox.style.backgroundColor = evt.target.style.backgroundColor
}
function pixlBoxClick ( evt ) {
    evt.target.style.backgroundColor = textBox.style.backgroundColor
}
//let paletteTag = document.querySelector(".palette")
let paletteTag = document.createElement('div')
paletteTag.className = "row"
mainDiv.appendChild(paletteTag)

const colors = ['blue', 
                'red',
                'green',
                'black',
                'Aqua',
                'pink',
                'yellow',
                'orange',
                'brown',
                'grey',
                'lightblue',
                'Darkblue',
                'Purple',
                'Chocolate'
            ]

for (let i=0; i<colors.length; i++) {
    let paletteDiv = document.createElement('div')
    paletteDiv.className = "color-box"
    paletteDiv.style.backgroundColor = colors[i]
    paletteTag.appendChild(paletteDiv)
    paletteTag.addEventListener('click', paletteColorSelected)
}

let pxlBoxes = document.querySelectorAll('.pixl-box')
for (let box of pxlBoxes) {
    box.addEventListener('click', pixlBoxClick)
}





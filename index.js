
var colors = ['red', 'magenta', 'blue', 'cyan', 'green', 'yellow']

document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById('canvas')
    var palette = document.getElementById('palette')
    for (var row = 0; row < 21; row++) {
        var createRow = document.createElement('div')
        createRow.classList.add('row')
        canvas.appendChild(createRow)

        for (var col = 0; col < 21; col++) {
            var createCol = document.createElement('div')
            createCol.classList.add('pixel')
            var click = document.createAttribute('onclick')
            click.value = 'setPixelColor(this)'
            createCol.setAttributeNode(click)
            createRow.appendChild(createCol)
        }
    }

    for (var i = 0; i < colors.length; i++) {
        var picker = colors[i]
        var createPal = document.createElement('div')
        createPal.classList.add('pointer')
        var click = document.createAttribute('onClick')
        click.value = 'setPenColor(this)'
        createPal.setAttributeNode(click)
        palette.appendChild(createPal)
        createPal.style.backgroundColor = picker
    }
})

function setPenColor(pen) {
    penColor = pen
}

function setPixelColor(pixel) {
    pixel.style.backgroundColor = penColor
}

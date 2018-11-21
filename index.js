
document.addEventListener('DOMContentLoaded', () => {
    var colors = ['red', 'magenta', 'blue', 'cyan', 'green', 'yellow', 'white', 'black']
    var color;
    var canvas = document.getElementById('canvas')
    var palette = document.getElementById('palette', 'mr-auto')
    var btn = document.createElement('button')
    var btnText = document.createTextNode('Reset')
    for (var row = 0; row < 16; row++) {
        var createRow = document.createElement('div')
        createRow.classList.add('row')
        canvas.appendChild(createRow)
        for (var col = 0; col < 16; col++) {
            var createCol = document.createElement('div')
            createCol.classList.add('pixel')
            createCol.addEventListener('click', (event) => {
                event.target.style.backgroundColor = color
            })
            createRow.appendChild(createCol)
        }
    }
    for (var i = 0; i < colors.length; i++) {
        var picker = colors[i]
        var createPal = document.createElement('div')
        createPal.classList.add('pointer')
        createPal.addEventListener('click', (event) => {
            color = event.target.style.backgroundColor
        })
        palette.appendChild(createPal)
        createPal.style.backgroundColor = picker
    }
    var resetAll = document.getElementsByClassName('pixel')
    btn.classList.add('btn')
    btn.appendChild(btnText)
    btn.addEventListener('click', () => {
        for (var i = 0; i < resetAll.length; i++){
            resetAll[i].style.backgroundColor = 'white'
        }
    })
    palette.appendChild(btn)
})

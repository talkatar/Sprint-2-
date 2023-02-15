'use strict'


let gElCanvas
let gCtx
let gBgc = 'white'

function onInit() {

     gElCanvas = document.querySelector('canvas')
     gCtx = gElCanvas.getContext('2d')
     renderGallery()
     // resizeCanvas()
     renderCanvas()

     renderMeme()

     const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }

     // window.addEventListener('resize', resizeCanvas)


}




function renderMeme() {
     console.log('hi');


     let memes = getMeme()
     console.log(memes);
     drawImg(memes.selectedImgId, gElCanvas.width * 0.5, gElCanvas.height * 0.5)





}



function resizeCanvas() {
     const elContainer = document.querySelector('.canvas-container')
     console.log(elContainer.offsetWidth);
     gElCanvas.width = elContainer.offsetWidth
     gElCanvas.height = elContainer.offsetHeight
}

function renderCanvas() {
     gCtx.fillStyle = gBgc
     gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}



function drawImg(idImg) {
     const img = new Image()
     img.src = `img/${idImg}.jpg`
     img.onload = () => {

          gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

          let memes = getMeme()
          drawText(memes.lines[0].txt, memes.lines[0].size, memes.lines[0].align,
               memes.lines[0].color, gElCanvas.width * 0.5, gElCanvas.height * 0.5)
     }

}






function drawText(text, size, align, color, x, y) {

     gCtx.lineWidth = 1
     gCtx.strokeStyle = 'black'
     gCtx.fillStyle = `${color}`
     gCtx.font = `${size}px Arial`
     gCtx.textAlign = `${align}`
     // gCtx.textBaseline = `${align}`

     gCtx.fillText(text, x, y)
     gCtx.strokeText(text, x, y)
}


function OnSetLineTxt(memeLine) {
     console.log(memeLine);
     setLineTxt(memeLine)




}
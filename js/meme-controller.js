'use strict'


let gElCanvas
let gCtx
let gBgc = 'white'
let gIsSwitched

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
     let memes = getMeme()
     drawImg(memes.selectedImgId, gElCanvas.width * 0.5, gElCanvas.height * 0.5)


}

function resizeCanvas() {
     const elContainer = document.querySelector('.canvas-container')
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
              if(gIsSwitched)  { 
               renderShownLines() 
     }
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
     updateMemeLoc( x, y)
}


function OnSetLineTxt(memeLine) {
     setLineTxt(memeLine)
     renderMeme()


}

function onChangeColor(color) {
     changeColor(color)
     renderMeme()

}

function onIncreaseFont() {
     increaseFont()
     renderMeme()

}

function onDecreaseFont() {
     decreaseFont()
     renderMeme()

}

function onAddLine() {
     addLine()
     let meme = getMeme()
     
     drawText(meme.lines[meme.selectedLineIdx].txt, meme.lines[meme.selectedLineIdx].size,
           meme.lines[meme.selectedLineIdx].align,
          meme.lines[meme.selectedLineIdx].color, gElCanvas.width * 0.25, gElCanvas.height * 0.25)
}



function onSwitchLine() {
     gIsSwitched='true'
     switchLine()
     let meme = getMeme()
     
      document.querySelector('.meme-line').value=meme.lines[meme.selectedLineIdx].txt
}

function renderShownLines() {
     let lines=shownLines()
     console.log(lines);
     lines.map(line=>{    drawText(line.txt, line.size,
          line.align,
         line.color, line.x, line.y)

}


     )

}
     //  onAddLine()


     // drawText(meme.lines[meme.selectedLineIdx].txt, meme.lines[meme.selectedLineIdx].size,
     //      meme.lines[meme.selectedLineIdx].align,
     //     meme.lines[meme.selectedLineIdx].color, gElCanvas.width * 0.25, gElCanvas.height * 0.25
     //     ,meme.lines[meme.selectedLineIdx].x, meme.lines[meme.selectedLineIdx].y)

     // }\


// function onAddLine() {
//      addLine()


     
//      drawText(memes.lines[1].txt, memes.lines[0].size, memes.lines[0].align,
//       memes.lines[0].color, 40, 40)


// }
// onAddLine()



// canvas.addEventListener('keydown', function(event) {
//      if (event.keyCode == 37) { // Left arrow
//        currentTextObject--;
//      } else if (event.keyCode == 39) { // Right arrow
//        currentTextObject++;
//      }
   
//      // Redraw canvas with updated current text object
//      drawCanvas();
//    });
'use strict'


let gElCanvas
let gCtx
let gBgc = 'white'
let gIsSwitched
const gMEMEID='gMeme.selectedLineIdx'
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

// function resizeCanvas() {
//      const elContainer = document.querySelector('.canvas-container')
//      gElCanvas.width = elContainer.offsetWidth
//      gElCanvas.height = elContainer.offsetHeight
// }

function renderCanvas() {
     gCtx.fillStyle = gBgc
     gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function drawImg(idImg) {
     const img = new Image()
     img.src = `img/${idImg}.jpg`
     img.onload = () => {
          gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
          console.log(gMeme.selectedLineIdx);

          let memes = getMeme()
          let textLines=memes.lines
          textLines.forEach(line=>{drawText(line.txt,line.size,line.align, line.color,
               line.x, line.y)
               console.log(line.txt,line.size,line.align, line.color,
                    line.x, line.y);
          })
          let meme = getMeme()
          drawRect(meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].y,
               meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].size
               )
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
     renderMeme()
     
}








 // drawText(meme.lines[meme.selectedLineIdx].txt, meme.lines[meme.selectedLineIdx].size,
     //       meme.lines[meme.selectedLineIdx].align,
     //      meme.lines[meme.selectedLineIdx].color,gElCanvas.width * 0.25, gElCanvas.height * 0.25)



     //  onAddLine()



     function onSwitchLine() {
          switchLine()
          let meme = getMeme()
           document.querySelector('.meme-line').value=meme.lines[meme.selectedLineIdx].txt
           renderMeme()

     }


     function drawRect(x,y){
          let meme = getMeme()
          gCtx.strokeStyle = 'white';
          gCtx.lineWidth = 1;
          console.log(x);
          console.log(y);
        gCtx.strokeRect(10,y-meme.lines[gMeme.selectedLineIdx].size-5,gElCanvas.width-20
          ,meme.lines[gMeme.selectedLineIdx].size+10);
      }

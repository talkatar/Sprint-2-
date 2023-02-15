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
          console.log(textLines);
          console.log( );
          textLines.forEach(line=>{drawText(line.txt,line.size,line.align, line.color,
               line.x, line.y)
               console.log(line.txt,line.size,line.align, line.color,
                    line.x, line.y);
          })
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
          
          drawRect(meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].y,
               meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].size
               )
           document.querySelector('.meme-line').value=meme.lines[meme.selectedLineIdx].txt

     }







     function drawRect(x,y,xEnd,yEnd){
          gCtx.strokeStyle = 'black';
          gCtx.lineWidth = 1;
          // gCtx.globalAlpha = frameOpacity;
          gCtx.strokeRect(x, y,x+10,y-1);
      }
     
     // function renderShownLines() {
     //      let lines=shownLines()
     //      console.log(lines);
     //      lines.map(line=>{drawText(line.txt, line.size,
     //           line.align,
     //          line.color, line.x, line.y)
     
     // }
     
     
     //      )
     
     // }








// let memes = getMeme()
     // drawText(memes.lines[0].txt, memes.lines[0].size, memes.lines[0].align,
     //      memes.lines[0].color, gElCanvas.width * 0.5, gElCanvas.height * 0.5)
     //     if(gIsSwitched)  { 
     //      renderShownLines() 





    // console.log(gMeme.selectedLineIdx);
          // drawText(memes.lines[gMeme.selectedLineIdx].txt, memes.lines[gMeme.selectedLineIdx].size, memes.lines[gMeme.selectedLineIdx].align,
          //      memes.lines[gMeme.selectedLineIdx].color,memes.lines[gMeme.selectedLineIdx].x, memes.lines[gMeme.selectedLineIdx].y)
          //      console.log(memes.lines[gMeme.selectedLineIdx].x,memes.lines[gMeme.selectedLineIdx].y);
     //          if(gIsSwitched)  { 
     //           renderShownLines() 
     // }



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
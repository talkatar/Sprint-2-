'use strict'


let gElCanvas
let gCtx
let gBgc = 'white'
let isDownload=false


function onInit() {

     gElCanvas = document.querySelector('canvas')
     gCtx = gElCanvas.getContext('2d')
     renderGallery()
     // resizeCanvas()
     // addListeners()
     renderCanvas()
     renderMeme()
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
          let textLines=memes.lines
          textLines.forEach(line=>{drawText(line.txt,line.size,line.align, line.color,
               line.x, line.y,line.font)
               
          })
          if(!isDownload){
          let meme = getMeme()
          if(!meme.lines.length) return 
          drawRect(meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].y,
          meme.lines[gMeme.selectedLineIdx].x,meme.lines[gMeme.selectedLineIdx].size
           )
          }
          if(isDownload)isDownload=!isDownload
     }
}
     
function drawText(text, size, align, color, x, y, font) {
          gCtx.lineWidth = 1
          gCtx.strokeStyle = 'black'
          gCtx.fillStyle = `${color}`
          gCtx.font = `${size}px ${font}`
          gCtx.textAlign = `${align}`
          gCtx.textBaseline = `${align}`
          gCtx.fillText(text, x, y)
          gCtx.strokeText(text, x, y)
}
     
function OnSetLineTxt(memeLine) {
     setLineTxt(memeLine)
     renderMeme()
}

function onSetColor(color) {
     setColor(color)
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

function onDeleteLine() {
     let meme = getMeme()
     if(!meme.lines.length) return
     deleteLine()
     document.querySelector('.meme-line').value=meme.lines[meme.selectedLineIdx].txt  
     renderMeme() 
}

function onSetFont(font) {
     setFont(font)
     renderMeme() 
}

function onAlignCenter() {
     alignCenter()
     renderMeme()
}

function onAlignLeft() {
     alignLeft(gCtx)
     renderMeme()
}

function onAlignRight() {
     
     alignRight(gCtx)
     renderMeme()
}

function onTextUP() {
     textUP()
     renderMeme() 
}

function onTextDown() {
     textDown()
     renderMeme()
}



function getCanvasSize(){
     
     return gElCanvas
}

function onSwitchLine() {
switchLine()
let meme = getMeme()
document.querySelector('.meme-line').value=meme.lines[meme.selectedLineIdx].txt
renderMeme()

}

 function onDownload(elLink){
     console.log(elLink);
     isDownload='true'
      renderMeme()
     //  setTimeout(download,500,elLink)
      const data = gElCanvas.toDataURL()
     elLink.href = data 
     elLink.download = 'my-mime' 

}

function download (elLink){
     console.log(elLink);
     const data = gElCanvas.toDataURL()
     elLink.href = data 
     elLink.download = 'my-mime' 
}


 function drawRect(x,y){
          let meme = getMeme()
          gCtx.strokeStyle = 'white';
          gCtx.lineWidth = 1;
          let xStart=10
          let yStart=y-meme.lines[gMeme.selectedLineIdx].size-5
          let width=gElCanvas.width-20
          let height=meme.lines[gMeme.selectedLineIdx].size+10
     //    gCtx.strokeRect(10,y-meme.lines[gMeme.selectedLineIdx].size-5,gElCanvas.width-20
     //      ,meme.lines[gMeme.selectedLineIdx].size+10);
          const radius = 10;
          gCtx.beginPath();
          gCtx.moveTo(xStart + radius, yStart);
          gCtx.lineTo(xStart + width - radius, yStart);
          gCtx.arcTo(xStart + width, yStart, xStart + width, yStart + radius, radius);
          gCtx.lineTo(xStart + width, yStart + height - radius);
          gCtx.arcTo(xStart + width, yStart + height, xStart + width - radius, yStart + height, radius);
          gCtx.lineTo(xStart + radius, yStart + height);
          gCtx.arcTo(xStart, yStart + height, xStart, yStart + height - radius, radius);
          gCtx.lineTo(xStart, yStart + radius);
          gCtx.arcTo(xStart, yStart, xStart + radius, yStart, radius);
          gCtx.closePath();
          gCtx.stroke();
 }

function onToggleMeme(){

               // document.querySelector('.gallery').classList.toggle('closed-modal')
               // document.querySelector('.editor').classList.toggle('opened-window')

               document.querySelector('.gallery').style.display='none'
               document.querySelector('.editor').style.display='flex'
           

}

function onShareFb() {
               const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format
           
               // A function to be called if request succeeds
               function onSuccess(uploadedImgUrl) {
                   // Encode the instance of certain characters in the url
                   const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
                   console.log(encodedUploadedImgUrl)
                   window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
               }
               // Send the image to the server
               doUploadImg(imgDataUrl, onSuccess)
}
           
function doUploadImg(imgDataUrl, onSuccess) {
               // Pack the image for delivery
               const formData = new FormData()
               formData.append('img', imgDataUrl)
           
               // Send a post req with the image to the server
               const XHR = new XMLHttpRequest()
               XHR.onreadystatechange = () => {
                   // If the request is not done, we have no business here yet, so return
                   if (XHR.readyState !== XMLHttpRequest.DONE) return
                   // if the response is not ok, show an error
                   if (XHR.status !== 200) return console.error('Error uploading image')
                   const { responseText: url } = XHR
                   // Same as
                   // const url = XHR.responseText
           
                   // If the response is ok, call the onSuccess callback function, 
                   // that will create the link to facebook using the url we got
                   console.log('Got back live url:', url)
                   onSuccess(url)
               }
               XHR.onerror = (req, ev) => {
                   console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
               }
               XHR.open('POST', '//ca-upload.com/here/upload.php')
               XHR.send(formData)
}
function onToggleHamburger() {
     document.body.classList.toggle('menu-open')
     // document.querySelector('.main-screen').classList.toggle('menu-open')
   }
   




 function addListeners() {
     //Listen for resize ev
     window.addEventListener('resize', () => {
       onInit()
     })
   }



      

// function onSetFontSize() {
//      setFontSize()
//      renderMeme()
     
// }








 // drawText(meme.lines[meme.selectedLineIdx].txt, meme.lines[meme.selectedLineIdx].size,
     //       meme.lines[meme.selectedLineIdx].align,
     //      meme.lines[meme.selectedLineIdx].color,gElCanvas.width * 0.25, gElCanvas.height * 0.25)



     //  onAddLine()


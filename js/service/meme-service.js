'use strict'

let gMeme
// var gselectedImgId
// console.log(gselectedImgId);
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
             { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }

];




function setImg(selectedImgId) {
    var gselectedImgId=selectedImgId
    console.log(gselectedImgId);
    renderMeme()
    
}
gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel', size: 20, align: 'center', color: 'white'
        }
    ]
}


function getMeme() {

    return gMeme

}

function getImgs() {

    return gImgs

}

function setImg(selectedImgId) {

    gMeme.selectedImgId=selectedImgId
    renderMeme()
    
}


function setLineTxt(memeLine){
    gMeme.lines[0].txt=memeLine
    renderMeme()
}

function clearCanvas() {
   
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
 
  }
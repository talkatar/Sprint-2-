'use strict'

let gMeme
// var gselectedImgId
// console.log(gselectedImgId);
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
             { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
            //  { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
            //  { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
            //  { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
            //  { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
            //  { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
            //  { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
            //  { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
            //  { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
            //  { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
            //  { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
            //  { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
            //  { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },

];

function setImg(selectedImgId) {
    var gselectedImgId=selectedImgId
    console.log(gselectedImgId);
    
}
gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel', size: 20, align: 'center', color: 'white'
        }
        ,
        {
            txt: 'I Love summer', size: 20, align: 'center', color: 'white'
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


function changeColor(color) {
gMeme.lines[0].color=color
}

function increaseFont(counter) {
    gMeme.lines[0].size+=counter
}

function decreaseFont(counter) {
    if (!gMeme.lines[0].size) return
    gMeme.lines[0].size-=counter
}


function switchLine(counter) {
}











function clearCanvas() {
   
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
 
  }



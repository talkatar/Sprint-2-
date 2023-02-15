'use strict'
const SWITCHED_KEY = 'memeSwitchedK'
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
    var gselectedImgId = selectedImgId
    console.log(gselectedImgId);

}
gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel', size: 20, align: 'center', color: 'white', shown: 'true', x: null, y: null,
        }
        ,
        {
            txt: 'I Love summer', size: 20, align: 'center', color: 'white', shown: 'false', x: null, y: null,
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
    gMeme.selectedImgId = selectedImgId
}


function setLineTxt(memeLine) {
    console.log(gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].txt = memeLine

}


function changeColor(color) {
    gMeme.lines[0].color = color
}

function increaseFont() {
    gMeme.lines[0].size++
}

function decreaseFont() {
    if (!gMeme.lines[0].size) return
    gMeme.lines[0].size--
}


function addLine() {
    console.log(gMeme.selectedLineIdx);
    if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx[0]
    else gMeme.selectedLineIdx++
    gMeme.lines[gMeme.selectedLineIdx].shown = 'true'
    console.log(gMeme);
}


function switchLine() {
    // _saveMemsToStorage(memeSwitchedK,gMeme.selectedLineIdx)
    console.log(gMeme.selectedLineIdx);
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx=0
    else gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx);

}

function updateMemeLoc(x, y) {
    gMeme.lines[gMeme.selectedLineIdx].x = x
    gMeme.lines[gMeme.selectedLineIdx].y = y
}

function shownLines() {
    console.log('h');
    let shownlines=(gMeme.lines).filter(line => (line.shown === 'true'))
    console.log(shownlines);
    console.log(gMeme.selectedLineIdx);
    console.log(gMeme.selectedLineIdx);

    shownlines= shownlines.splice(gMeme.lines[gMeme.selectedLineIdx],1)
    console.log(shownlines);
    return shownlines
}






function _saveMemsToStorage() {
    saveToStorage(STORAGE_KEY, mems)
}





function clearCanvas() {

    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

}


function getSwitchKey() {
    loadFromStorage(key)
}
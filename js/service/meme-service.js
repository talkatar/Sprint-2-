'use strict'
let gMeme


let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
     { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
     { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
     { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
     { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
     { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
     { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
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
            txt: 'I sometimes eat Falafel', size: 20, align: 'center', color: 'white',
             x: 250, y: 50, font:'Impact',
        }
        ,
        {
            txt: 'I Love summer', size: 20, align: 'center', color: 'white', x: 250,
             y: 450, font:'Impact',
        }
    ]
}



// {
//     txt: 'I sometimes eat Falafel', size: 20, align: 'center', color: 'white',
//      x: gWidthCanvas*0.5, y: 0, font:'Mock',
// }
// ,
// {
//     txt: 'I Love summer', size: 20, align: 'center', color: 'white', x: 0,
//      y: gHeightCanvas*0.5, font:'Mock',
// }
// ]
// }







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

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseFont() {
    if (!gMeme.lines[gMeme.selectedLineIdx].size) return
    gMeme.lines[gMeme.selectedLineIdx].size--
}

function addLine() {
    (gMeme.lines).push(
        {
            txt: 'I Love world', size: 20, align: 'center', color: 'white', x: 250, y: 250, font:'Impact'
        }
    )
}

function deleteLine() {
    (gMeme.lines).splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx=0
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font=font
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].x = getCanvasSize().width*0.5
}

function alignLeft(gCtx) {
    gMeme.lines[gMeme.selectedLineIdx].x = gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt).width*0.5+20
}

function alignRight(gCtx) {
    gMeme.lines[gMeme.selectedLineIdx].x = getCanvasSize().width-
    gCtx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt).width*0.5-20
}

function textUP() {
    if(!gMeme.lines[gMeme.selectedLineIdx].y) return
    gMeme.lines[gMeme.selectedLineIdx].y-=10
// gMeme.lines[gMeme.selectedLineIdx].txt.length
}

function textDown() {
    if(gMeme.lines[gMeme.selectedLineIdx].y ===getCanvasSize().height) return
    gMeme.lines[gMeme.selectedLineIdx].y+=10 
    // getCanvasSize().height-gMeme.lines[gMeme.selectedLineIdx].txt.size) 
}

function switchLine() {
    console.log(gMeme.selectedLineIdx);
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx);
}




// function setFontSize(size){
//     gMeme.lines[gMeme.selectedLineIdx].size=size


// }
// function shownLines() {
//     console.log(gMeme.selectedLineIdx);
//     console.log(gMeme);

//     let shownlines=(gMeme.lines).filter(line => (line.shown === 'true'))
//     console.log(shownlines);
//   shownlines.splice(gMeme.lines[gMeme.selectedLineIdx],1)
//   console.log(shownlines);
//     return shownlines
// }



// function _saveMemsToStorage() {
//     saveToStorage(STORAGE_KEY, mems)
// }



// function clearCanvas() {

//     gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

// }


// function getSwitchKey() {
//     loadFromStorage(key)
// }



// function updateMemeLoc(x, y) {
//     gMeme.lines[gMeme.selectedLineIdx].x = x
//     gMeme.lines[gMeme.selectedLineIdx].y = y
// }

// console.log(gMeme.selectedLineIdx);
//     if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx=0
//     else gMeme.selectedLineIdx++
//     gMeme.lines[gMeme.selectedLineIdx].shown = 'true'
//     console.log(gMeme);


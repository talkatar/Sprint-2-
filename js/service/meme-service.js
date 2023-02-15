'use strict'

let gMeme

// const ARRS_KEY = 'arrsDB'
// const CURR_ARR_KEY = 'currArrDB'
// const FAV_LAYOUT_KEY = 'favLayoutDB'
// const PAGE_SIZE = 5

function getMeme() {

}



let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];

gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel', size: 20, align: 'left', color: 'red'
        }
    ]
}
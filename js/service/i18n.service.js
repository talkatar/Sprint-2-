'use strict'

let gCurrLang = 'en'


var gTrans = {
    logo: {
        en: 'Logo',
        he: 'לוגו'
    },
    gallery: {
        en: 'Gallery',
        he: 'גלריה'
    },
    about: {
        en: 'About',
        he: 'אודות'
    },

    en: {
        en: 'En',
        he: 'אנגלית'
    },

    he: {
        en: 'He',
        he: 'עברית'
    },
    download: {
        en: 'Download',
        he: 'הורד'
    },
    share: {
        en: 'Share',
        he: 'שתף'
    },

    'meme-line-placeholder': {
        en: 'ENTER A MEME LIVE ',
        he: 'הכנס שורת מם'
    },

    impact: {
        en: 'Impact ',
        he: 'אימפקט'
    },

    arial: {
        en: 'Arial ',
        he: 'אריאל'
    },

    david: {
        en: 'David ',
        he: 'דוד שורת מם'
    },

    all: {
        en: 'All ',
        he: 'הכל'
    },

    presidents: {
        en: 'Presidents ',
        he: 'נשיאים'
    },

    animals: {
        en: 'Animals ',
        he: 'חיות'
    },

    baby: {
        en: 'Baby ',
        he: 'תינוק'
    },
    
    celebs: {
        en: 'Celebs ',
        he: ' מפורסמים'
    },

    movies: {
        en: 'Movies ',
        he: ' סרטים'
    },

}

function setLang(lang) {
    gCurrLang = lang
}


function getTrans(transKey) {
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'
    let translation = transMap[gCurrLang]
    if (!translation) translation = transMap.en
    return translation
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const translation = getTrans(transKey)
        if (el.placeholder) el.placeholder = translation
        else el.innerText = translation


    })
}




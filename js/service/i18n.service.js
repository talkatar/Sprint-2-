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

}

function setLang(lang) {
    gCurrLang = lang
}


function getTrans(transKey) {
    // if key is unknown return 'UNKNOWN'
    const transMap = gTrans[transKey]
    if (!transMap) return 'UNKNOWN'
    // get from gTrans
    let translation = transMap[gCurrLang]
    // if translation not found - use english
    if (!translation) translation = transMap.en
    return translation
}

function doTrans() {
    console.log('h');
    var els = document.querySelectorAll('[data-trans]')
    console.log(els);
    els.forEach(el => {

        console.log(el.dataset);
        console.log(el.dataset.trans);

        const transKey = el.dataset.trans
        const translation = getTrans(transKey)
        if (el.placeholder) el.placeholder = translation
        else el.innerText = translation


    })
}




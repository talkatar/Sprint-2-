'use strict'

function renderGallery() {
    let imgs= getFilterdImg ()
    if(!imgs.length) imgs = getImgs()
    const strHTMLs = imgs.map(img => {
    return `
            <img class="img" src="img/${img.id}.jpg" onclick = "onImgSelect('${img.id}')"/>
            
            `})
    document.querySelector('.imgs-container').innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    onToggleMeme()
}

function onToggleGallery() {
    // document.querySelector('.gallery').classList.toggle('closed-window')
    // document.querySelector('.editor').classList.toggle('opened-window')
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('.editor').style.display = 'none'
}

function onSearch(ev) {
    ev.preventDefault()
    const elInput = document.querySelector('input[name="browser"]')
    search(elInput.value.toLowerCase());
    renderGallery()
    elInput.value = ''
}

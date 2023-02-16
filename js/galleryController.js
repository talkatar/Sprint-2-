'use strict'

function renderGallery() {
    let imgs = getImgs()

    const strHTMLs = imgs.map(img => {

        return   `
         <img class="img" src="img/${img.id}.jpg" onclick = "onImgSelect('${img.id}')"/>
        `})
    
    document.querySelector('.imgs-container').innerHTML = strHTMLs.join('')
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
    onToggleMeme()}






function onToggleGallery() {
    document.querySelector('.gallery').style.display='block'
    document.querySelector('.editor').style.display='none'
  }
  


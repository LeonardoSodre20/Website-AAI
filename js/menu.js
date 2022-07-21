const buttonMenuMobile = document.querySelector(".container-menu-mobile")
const containerLogo = document.querySelector(".container-logo")
const imgsTransition = document.querySelectorAll('[data-img="header-imgs"]')
let indexImage = 0
let maxImages = imgsTransition.length


//Código para a transição de imagens.
function transitionImages () {

    imgsTransition[indexImage].classList.remove("selected")

    indexImage++

    if(indexImage >= maxImages)
    {
        indexImage = 0
    }

    imgsTransition[indexImage].classList.add("selected");
}

function startTransition () {
    setInterval(() => {
        transitionImages()
    }, 3000)
}

function loadToPage () {
    location.reload()
}

containerLogo.addEventListener('click' , () => {
    loadToPage()
})

window.addEventListener('load', startTransition)


//Código para ativar o menu mobile

buttonMenuMobile.addEventListener('click', () => {
    const menuList = document.querySelector('[data-menu-list="menu-list"]')

    menuList.classList.toggle('menu-list-mobile')
})


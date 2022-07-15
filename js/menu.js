const imgsTransition = document.querySelectorAll('[data-img="header-imgs"]')
let indexImage = 0
let maxImages = imgsTransition.length

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

window.addEventListener('load', startTransition)



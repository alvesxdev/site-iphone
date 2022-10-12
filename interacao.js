//FUNCAO MUDAR FOTO DO IPHONE

function imgSlider (e) {
    document.querySelector('#phone').src = e
}

// FUNCAO DE MUDAR COLOR CIRCLE

function circleChange(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}


//MENU HAMBURGUER

let show = true
const menuSection = document.querySelector('.menu-section')
const menuBurguer = menuSection.querySelector('.menu-burguer')

menuBurguer.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})


const subMenuLink = document.querySelectorAll('.container-icon-and-link');
const subsMenus = document.querySelectorAll('.submenu-dropdown');

function getMenusDropdown () {
    subsMenus.forEach(submenus => {
        submenus.style.visibility = 'visible';
    })
} 

subMenuLink.forEach(itens => {
    itens.addEventListener('mouseenter', () => {
        getMenusDropdown();
    })
})








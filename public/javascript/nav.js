const menuBtnEl = document.getElementById('menu-btn');
const navPageEl = document.getElementById('nav-page')
let menuOpen = false;

menuBtnEl.addEventListener('click', () => {
    if (!menuOpen) {
        console.log('click');
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = true;
    } else {
        menuBtnEl.classList.toggle("open");
        navPageEl.classList.toggle('open');
        menuOpen = false;
    }
})
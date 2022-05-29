function changeTheme() {
    document.querySelector(".wrapper").classList.toggle("dark");
    document.querySelector(".footer").classList.toggle("dark");
}
function play(btn) {
    btn.parentNode.classList.toggle("active");
}
function toggleMenu() {
    document.querySelector(".header__nav").querySelector("ul").classList.toggle("opened");
    document.querySelector(".header__nav_burger").classList.toggle("opened");

    document.querySelector(".header__nav_burger").classList.contains("active") ?
    document.body.style.overflow = 'hidden' : 
    document.body.style.overflow = 'scroll';
}
Array.from(document.querySelectorAll('.header__navigation a')).forEach(elem =>
    elem.addEventListener('click', () => {
        if(!document.querySelector('.header').classList.contains('active')) return;
        toggleMenu()
    }));
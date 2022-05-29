function changeTheme() {
    document.querySelector(".wrapper").classList.toggle("dark");
    document.querySelector(".footer").classList.toggle("dark");
}
function play(btn) {
    btn.parentNode.classList.toggle("active");
}
function toggleMenu() {
    document.querySelector(".header__nav ul").classList.toggle("opened");
    document.querySelector(".header__nav_burger").classList.toggle("opened");

    document.querySelector(".header__nav").classList.contains("opened") ?
        document.body.style.overflow = 'hidden' : 
        document.body.style.overflow = 'scroll';
}
Array.from(document.querySelectorAll('.header__nav ul a')).forEach(elem =>
    elem.addEventListener('click', () => {
        if(!document.querySelector('.header__nav ul').classList.contains('opened')) return;
        toggleMenu();
    }));
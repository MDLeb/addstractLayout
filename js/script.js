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

}
const menuBar = document.querySelector(".menu-bar ")
const menuNav = document.querySelector(".menu ")

menuBar.addEventListener('click', () => {
    // ketika diklik kelas menu-bar maka akan muncul class bru namanyaa menu-active (cek inspeksi bgian menu)
    menuNav.classList.toggle("menu-active");
});

const navbar = document.querySelector(".navbar ")

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const windowPosisition = window.scrollY>0;
    navbar.classList.toggle("scroll-active", windowPosisition);
    menuNav.classList.remove("menu-active")
})
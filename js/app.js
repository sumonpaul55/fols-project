const hoverClass = document.getElementsByClassName("submenu");
const navbar = document.getElementById("navbar");
const closeNav = document.getElementsByClassName("closeNav");
const navbartoggler = document.getElementById("navbar-toggler");
const backmenu = document.getElementsByClassName("back-prev-menu");
const megaMenu = document.getElementById("megaMenu");
// mobile nav clicked
navbartoggler.addEventListener("click", function () {
  navbar.classList.remove("d-none");
  navbar.classList.add("mobile-menu");
});

if (window.innerWidth > 992) {
  for (let i = 0; i < hoverClass.length; i++) {
    const individualhvoerClass = hoverClass[i];
    individualhvoerClass.addEventListener("mouseover", function () {
      navbar.style.cssText = `background: white`;
      navbar.classList.add("navActive");
    });
    individualhvoerClass.addEventListener("mouseout", function () {
      navbar.style.cssText = `background: transparent`;
      navbar.classList.remove("navActive");
    });
  }
} else {
  for (let i = 0; i < hoverClass.length; i++) {
    const individualhvoerClass = hoverClass[i];
    individualhvoerClass.addEventListener("click", function () {
      megaMenu.classList.remove("d-none");
    });
  }
}
for (let i = 0; i < closeNav.length; i++) {
  const allcliseNav = closeNav[i];
  allcliseNav.addEventListener("click", function () {
    navbar.classList.add("d-none");
  });
}

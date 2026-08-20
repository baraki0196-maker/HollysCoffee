const gnb = document.querySelector(".gnb");
const mega = document.querySelector(".mega-menu");

gnb.addEventListener("mouseenter", () => {

    mega.style.display = "flex";

});

gnb.addEventListener("mouseleave", () => {

    mega.style.display = "none";

});


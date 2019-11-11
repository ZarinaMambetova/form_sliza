var hamburger = document.querySelector(".btn_have");

hamburger.addEventListener("click", function () {
    if (hamburger.classList.contains("btn_have_active")) {
        hamburger.classList.remove("btn_have_active");
        
    } else {
        hamburger.classList.add("btn_have_active");

         }
});
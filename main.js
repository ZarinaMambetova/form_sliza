(function () {
      var have = document.querySelector(".btn_have");

    have.addEventListener("click", function () {
        if (have.classList.contains("btn_have_active")) {
          have.classList.remove("btn_have_active");
            
        } else {
          have.classList.add("btn_have_active");

            }
    });

}());
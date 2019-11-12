(function () {
  const buyer = document.querySelector(".buyer__detailes");
    buyer.addEventListener("click", function (e) {
    const target = e.target;
    if(target.classList.contains("btn_have")) {
      if (target.classList.contains("btn_have_active")) {
        target.classList.remove("btn_have_active");
      } else {
        target.classList.add("btn_have_active");
      }
    }
    });
}());
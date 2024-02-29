const cartButton = document.querySelector(".buy-button");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

cartButton.addEventListener("click", function (evt) {
    cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            cartPopup.classList.remove("modal-show");
        }
    }
});
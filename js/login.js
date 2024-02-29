const loginLink = document.querySelector(".pickup-button");
const loginPopup = document.querySelector(".modal-feedback");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".feedback-form");
const loginLogin = loginPopup.querySelector(".name-field");
const loginMail = loginPopup.querySelector(".mail-field");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
    loginPopup.classList.add("modal-show");
    if (storage) {
        loginLogin.value = storage;
        loginMail.focus();
    } else {
        loginLogin.focus();
    }
});

loginClose.addEventListener("click", function (evt) {
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
        if (!loginLogin.value || !loginMail.value) {
            evt.preventDefault();
            loginPopup.classList.remove("modal-error");
            loginPopup.offsetWidth = loginPopup.offsetWidth;
            loginPopup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", loginLogin.value);
            }
        }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            loginPopup.classList.remove("modal-show");
            loginPopup.classList.remove("modal-error");
        }
    }
});
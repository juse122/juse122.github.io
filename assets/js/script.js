let buttonState = "";
const darkModeButton = document.querySelector("#footer-darkmode-switch");
const metaTag = document.querySelector("meta[name=theme-color]");

const getMode = () => {
    buttonState = localStorage.getItem("buttonState");

    if (buttonState === null) {
        localStorage.setItem("buttonState", "lightMode");
    } else if (buttonState === "darkMode") {
        document.body.classList.add("dark-mode");
        metaTag.setAttribute("content", "#003264");
        darkModeButton.checked = true;
    };
};

getMode();

const changeMode = () => {
    if (!darkModeButton.checked) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("buttonState", "lightMode");
        metaTag.setAttribute("content", "#afc6ff");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("buttonState", "darkMode");
        metaTag.setAttribute("content", "#003264");
    }
};

darkModeButton.addEventListener("click", () => {
    changeMode();
});

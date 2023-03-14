const darkModeButton = document.querySelector("#footer-darkmode-switch");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const metaTag = document.querySelector("meta[name=theme-color]");
    const currentColor = metaTag.getAttribute("content");

    if (currentColor === "#5ac8ff") {
        metaTag.setAttribute("content", "#003c78");
    } else {
        metaTag.setAttribute("content", "#5ac8ff");
    }
});

const darkModeButton = document.querySelector("#footer-darkmode-switch");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const metaTag = document.querySelector("meta[name=theme-color]");
    const currentColor = metaTag.getAttribute("content");

    if (currentColor === "#afc6ff") {
        metaTag.setAttribute("content", "#003264");
    } else {
        metaTag.setAttribute("content", "#afc6ff");
    }
});

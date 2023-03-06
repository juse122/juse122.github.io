const darkModeButton = document.querySelector("#footer-darkmode-switch");
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const metaTag = document.querySelector("meta[name=theme-color]");
    const currentColor = metaTag.getAttribute("content");

    if (currentColor === "#92ddff") {
        metaTag.setAttribute("content", "#001e3c");
    } else {
        metaTag.setAttribute("content", "#92ddff");
    }
});

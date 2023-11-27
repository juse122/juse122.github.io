// Dark Mode
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
	}
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

// DOB calculator + footer year setter
const initialDate = new Date("07/18/1990");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const timeDifference = currentDate.getTime() - initialDate.getTime();
const dayDifference = (timeDifference + 100000000) / (1000 * 3600 * 24);
const currentAge = Math.floor(dayDifference / 365.25);

document.querySelector("#current-year").textContent = currentYear;
document.querySelector("#current-age").textContent = currentAge;

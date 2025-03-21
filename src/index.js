import "./styles.css";
import "./homepage.css";
import "./menupage.css";
import "./aboutpage.css";
import "./buttons.css";
import { loadHomePage } from "./home-page-load.js";
import { loadMenuPage } from "./menu-page-load.js";
import { loadAboutPage } from "./about-page-load.js";

const container = document.getElementById("content");

const homeBtn = document.getElementById("home");

const menuBtn = document.getElementById("menu");

const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
    container.innerHTML = "";
    menuBtn.style.textDecoration = "none";
    aboutBtn.style.textDecoration = "none";
    homeBtn.style.textDecoration = "underline";
    loadHomePage();
});

menuBtn.addEventListener("click", () => {
    container.innerHTML = "";
    homeBtn.style.textDecoration = "none";
    aboutBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "underline";
    loadMenuPage(); 
});

aboutBtn.addEventListener("click", () => {
    container.innerHTML = "";
    homeBtn.style.textDecoration = "none";
    menuBtn.style.textDecoration = "none";
    aboutBtn.style.textDecoration = "underline";
    loadAboutPage(); 
});


homeBtn.style.textDecoration = "underline";
loadHomePage();
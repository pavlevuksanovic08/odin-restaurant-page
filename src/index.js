import "./styles.css";
import { loadHomePage } from "./home-page-load.js";
import { loadMenuPage } from "./menu-page-load.js";
import { loadAboutPage } from "./about-page-load.js";

loadHomePage();

const container = document.getElementById("content");

const homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", () => {
    container.innerHTML = "";
    loadHomePage();
});

const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    container.innerHTML = "";
    loadMenuPage();
});

const aboutMenu = document.getElementById("about");

aboutMenu.addEventListener("click", () => {
    container.innerHTML = "";
    loadAboutPage();
});
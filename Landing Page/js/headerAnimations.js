import { navButtons, showNavButtons } from "./responsiveNav.js";

const header = document.getElementsByTagName("header")[0];

const headerInfoDisplay = document.querySelector(".header__info--display");

function showHeaderBackground() {
  return new Promise((resolve, reject) => {
    header.childNodes[0].classList.add("header__background--show");
    resolve();
  });
}

function showHeaderInfoDisplay() {
  return new Promise((resolve, reject) => {
    headerInfoDisplay.classList.add("show");
    resolve();
  });
}

function showHeaderInfoDisplayContent() {
  return new Promise((resolve, reject) => {
    headerInfoDisplay.childNodes.forEach((element) => {
      element.classList.add("show");
      resolve();
    });
  });
}

async function loadHeader() {
  await showHeaderBackground();
  await showHeaderInfoDisplay();
  await showHeaderInfoDisplayContent();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await showNavButtons();
}

window.addEventListener("load", loadHeader, false);

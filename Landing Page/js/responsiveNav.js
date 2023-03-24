export const navButtons = document.getElementsByClassName("navButtons")[0];

export function showNavButtons() {
  return new Promise((resolve, reject) => {
    let delay = 0;
    navButtons.childNodes.forEach((element) => {
      setTimeout(() => {
        element.classList.add("show");
      }, delay);
      delay += 200;
    });
    resolve();
  });
}

function hideNavButtons() {
  return new Promise((resolve, reject) => {
    let delay = 0;
    navButtons.childNodes.forEach((element) => {
      setTimeout(() => {
        element.classList.remove("show");
      }, delay);
      delay += 200;
    });
    resolve();
  });
}

let scrollValue = 0;
window.addEventListener(
  "scroll",
  () => {
    if (scrollValue > window.scrollY) {
      showNavButtons();
    } else {
      hideNavButtons();
    }
    scrollValue = window.scrollY;
  },
  false
);

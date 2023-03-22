const headerInfoDisplay = document.querySelector(".header__info--display");

window.addEventListener(
  "load",
  () => {
    headerInfoDisplay.classList.add("header__info--display--show");

    headerInfoDisplay.childNodes.forEach((element) => {
      console.log(element);
      element.classList.add("show-header-info");
    });
  },
  false
);

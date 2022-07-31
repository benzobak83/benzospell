function burgerMenu(selector) {
  const burger = document.querySelector(selector);

  burger.addEventListener("click", () => {
    burger.classList.toggle("change");
  });
}

export { burgerMenu };

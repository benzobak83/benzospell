const menuHover = (selectors: string): void => {
  const btns = document.querySelectorAll(selectors);
  let activeBtnIndex: number;

  btns.forEach((btn, i): void => {
    if (btn.classList.contains("header__li_active")) activeBtnIndex = i;
    btn.addEventListener("mouseover", () => mouseOver());
    btn.addEventListener("mouseout", () => mouseOut());
  });

  const mouseOver = () => {
    btns.forEach((btn): void => {
      if (btn.classList.contains("header__li_active"))
        btn.classList.remove("header__li_active");
    });
  };

  const mouseOut = () => {
    btns[activeBtnIndex].classList.add("header__li_active");
  };
};

export { menuHover };

import React, { useEffect } from "react";
import { TopSection } from "./TopSection";
import { Guide } from "./Guide";
import { Formats } from "./Formats";
import { Advantages } from "./Advantages";
import { Capabilities } from "./Capabilities";
import { CONVERTE_URL } from "../config";

import { burgerMenu } from "../ts/burger";
import { animation } from "../ts/animations";
import { scrollMagick } from "../ts/animations";

function Main() {
  const handlerFormBtn = (e, formData) => {
    e.preventDefault();

    fetch(CONVERTE_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  const handlerFormTextBtn = (e, formData) => {
    e.preventDefault();
  };

  useEffect(() => {
    burgerMenu(".burger-menu");
    animation(".main-content__title", "windowAnim", 500);
    animation(".main-content__descrip", "windowAnim", 700);
    animation(".window", "windowAnim", 1200);
    animation(".btn-filte", "windowAnim", 1200);
    animation(".btn-text", "windowAnim", 1200);
    scrollMagick();
  }, []);

  return (
    <div className="main">
      <TopSection
        handlerFormBtn={handlerFormBtn}
        handlerFormTextBtn={handlerFormTextBtn}
      />
      <Guide />
      <Formats />
      <Advantages />
      <Capabilities />
    </div>
  );
}

export { Main };

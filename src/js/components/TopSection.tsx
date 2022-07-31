import React, { useState, useEffect } from "react";
import { FormFile } from "./FormFile";
import { FormText } from "./FormText";

function TopSection(props) {
  const { handlerFormBtn, handlerFormTextBtn } = props;
  const [windowType, setWindowType] = useState("file");
  const [animateFinished, setAnimateFinished] = useState(false);

  const offAnimate = () => setAnimateFinished(true);

  return (
    <section className="top-section">
      <div className="background-img"></div>
      <div className="main-content">
        <div className="main-content__text">
          <h2 className="main-content__title">
            Бесплатный сервис по распознаванию текста из изображений
          </h2>
          <h3 className="main-content__descrip">
            и его дальнейшая проверка на правила орфографии {":)"}
          </h3>
        </div>
        <div className="main-content__buttons">
          <button
            onClick={() => setWindowType("file")}
            className={`${
              animateFinished === true ? "kostyl" : ""
            } main-content__btn main-content__btn${
              windowType === "file" ? "_active" : ""
            } btn-filte`}
          >
            ЗАГРУЗКА ФАЙЛА
          </button>
          <button
            className={`${
              animateFinished === true ? "kostyl" : ""
            } main-content__btn btn-text main-content__btn${
              windowType === "text" ? "_active" : ""
            }`}
            onClick={() => {
              setWindowType("text");
            }}
          >
            ПО ТЕКСТУ
          </button>
        </div>
        <div className="window-wrapper">
          {windowType === "file" ? (
            <FormFile
              handlerFormBtn={handlerFormBtn}
              animateFinished={animateFinished}
            />
          ) : (
            <FormText
              handlerFormTextBtn={handlerFormTextBtn}
              offAnimate={offAnimate}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export { TopSection };

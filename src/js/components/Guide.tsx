import React from "react";
const imgGuide1 = require("../../assets/img/guide1.png");
const imgGuide2 = require("../../assets/img/guide2.png");
const imgGuide3 = require("../../assets/img/guide3.png");
const imgGuide4 = require("../../assets/img/guide4.png");

function Guide() {
  return (
    <section className="guide ">
      <div className="guide__inner wrapper">
        <div
          className="guide__title title guide__title_animate"
          id="title_animation"
        >
          Принцип работы ресурса
        </div>
        <div className="guide__line line"></div>
        <div className="guide__row row">
          <div className="guide__item guide__item_1">
            <img src={imgGuide1} alt="" className="guide__img" />
            <div className="guide__descr">Отсканируйте или вставьте текст</div>
          </div>
          <div className="guide__item guide__item_2">
            <img src={imgGuide2} alt="" className="guide__img" />
            <div className="guide__descr">
              Загрузите файл если нужно распознать текст
            </div>
          </div>
          <div className="guide__item guide__item_3">
            <img src={imgGuide3} alt="" className="guide__img" />
            <div className="guide__descr">
              Выберите язык содержимого текста в файле
            </div>
          </div>
          <div className="guide__item guide__item_4">
            <img src={imgGuide4} alt="" className="guide__img" />
            <div className="guide__descr">
              После обработки файла, получите результат
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Guide };

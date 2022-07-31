import React from "react";
import imgItem from "../../assets/img/check.png";

function Capabilities() {
  return (
    <section className="guide capabilities">
      <div className="guide__inner wrapper">
        <div className="guide__title title capabilities__title_animate">
          Основные возможности
        </div>
        <div className="guide__line line"></div>
        <div className="guide__row row">
          <div className="guide__item capabilities__item capabilities__item1">
            <img src={imgItem} alt="" className="guide__img" />
            <div className="guide__descr capabilities__descr capabilities__descr1">
              Распознавание отсканированных файлов и фотографий, которые
              содержат текст
            </div>
          </div>
          <div className="guide__item capabilities__item capabilities__item2">
            <img src={imgItem} alt="" className="guide__img" />
            <div className="guide__descr capabilities__descr capabilities__descr2">
              Получение напечатанного текста
            </div>
          </div>
          <div className="guide__item capabilities__item capabilities__item3">
            <img src={imgItem} alt="" className="guide__img" />
            <div className="guide__descr capabilities__descr capabilities__descr3">
              Форматирование бумажных и PDF-документов в редактируемые форматы
            </div>
          </div>
          <div className="guide__item capabilities__item capabilities__item4">
            <img src={imgItem} alt="" className="guide__img" />
            <div className="guide__descr capabilities__descr capabilities__descr4">
              Онлайн-редактирование документа
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Capabilities };

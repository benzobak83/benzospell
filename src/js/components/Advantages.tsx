import React from "react";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__inner wrapper">
        <h2 className="advantages__title">Наши преимущества</h2>
        <div className="advantages__row row">
          <div className="advantages__col">
            <ul className="advantages__list">
              <li className="advantages__item advantages__item1">
                Легкий и удобный интерфейс
              </li>
              <li className="advantages__item advantages__item2">
                Мультиязычность Сайт переведен на 9 языков
              </li>
              <li className="advantages__item advantages__item3">
                Быстрое распознавание текста
              </li>
              <li className="advantages__item advantages__item4">
                Неограниченное количество запросов
              </li>

              <li className="advantages__item advantages__item5">
                Поддержка 35+ языков распознавания текста
              </li>
            </ul>
          </div>
          <div className="advantages__col">
            <ul className="advantages__list">
              <li className="advantages__item advantages__item6">
                Защита данных. Данные между серверами передаются по SSL +
                автоматически будут удалены
              </li>
              <li className="advantages__item advantages__item7">
                Отсутствие регистрации
              </li>
              <li className="advantages__item advantages__item8">
                Использование движка Tesseract OCR
              </li>
              <li className="advantages__item advantages__item9">
                Распознавание области изображения (в разработке)
              </li>
              <li className="advantages__item advantages__item_last advantages__item10">
                Обработано более чем 30.6M+ запросов
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Advantages };

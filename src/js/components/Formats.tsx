import React from "react";

function Formats() {
  return (
    <aside className="formats">
      <div className="formats__inner wrapper">
        <ul className="formats__list formats__list1">
          <li className="formats__title">Форматы файлов</li>
          <li className="formats__li">Изображения: jpg, jpeg, png</li>
          <li className="formats__li">Мульти-страничные документы: pdf</li>
        </ul>
        <ul className="formats__list formats__list2">
          <li className="formats__title">Сохранение результатов</li>
          <li className="formats__li">Чистый текст (txt)</li>
          <li className="formats__li">Adobe Acrobat (pdf)</li>
          <li className="formats__li">Microsoft Word (docx)</li>
          <li className="formats__li">OpenOffice (odf)</li>
        </ul>
      </div>
    </aside>
  );
}

export { Formats };

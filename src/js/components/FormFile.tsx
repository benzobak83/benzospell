import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const imgUpload = require("../../assets/img/upload.png");

function FormFile(props) {
  const { handlerFormBtn, animateFinished } = props;
  const hiddenInput = useRef();
  const [isAnimateFile, setIsAnimateFile] = useState(false);
  const [form, setForm] = useState({ file: "", language: "none" });
  const formData = new FormData();
  const [clearWindow, setClearWindow] = useState(true);

  const handleInput = ({ target }) => {
    switch (target.name) {
      case "window-lang":
        setForm((prevCount) => {
          return {
            ...prevCount,
            language: target.value,
          };
        });
        break;

      case "file":
        setForm((prevCount) => {
          return {
            ...prevCount,
            file: target.files[0],
          };
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    formData.append("file", form.file);
    formData.append("window-lang", form.language);
  }, [form]);

  useEffect(() => {
    setIsAnimateFile(true);
    setTimeout(() => {
      setClearWindow(false);
    }, 800);
  }, []);

  return (
    <CSSTransition in={isAnimateFile} timeout={890}>
      <form className={animateFinished ? "window window-file" : "window"}>
        {clearWindow ? (
          ""
        ) : (
          <>
            <div className="window__helper">
              Загрузите файл формата JPG и распознайте содержащийся в нём текст
              для дальнейшей работы с ним
            </div>
            <div className="dropzone">
              <input
                ref={hiddenInput}
                type="file"
                className="dropzone__file-hidden"
                name="file"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <div
                className="dropzone__content"
                onClick={() => hiddenInput.current.click()}
              >
                <img src={imgUpload} alt="upload" className="dropzone__img" />
                <div className="dropzone__text">
                  <h4 className="dropzone__title">
                    Выберите или перетащите файл с изображением для дальнейшего
                    распознавания
                  </h4>
                  <p className="dropzone__descrip">
                    Максимальный размер файла 2 Mb
                  </p>
                </div>
              </div>
            </div>
            <div className="window__language-block">
              <select
                name="window-lang"
                id="window-lang"
                className="window__language"
                value={form.language}
                onChange={(e) => {
                  handleInput(e);
                }}
              >
                <option
                  className="window__language-option window__language-option_none"
                  value="none"
                  disabled
                >
                  Выберете язык текста:
                </option>
                <option className="window__language-option" value="rus">
                  Русский
                </option>
                <option className="window__language-option" value="usa">
                  Английский
                </option>
              </select>
            </div>
            <div className="window__upload-btn-block">
              <button
                className="window__upload-btn btn"
                onClick={(e) => {
                  handlerFormBtn(e, formData);
                }}
              >
                ЗАГРУЗИТЬ
              </button>
            </div>
          </>
        )}
      </form>
    </CSSTransition>
  );
}

export { FormFile };

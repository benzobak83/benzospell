import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const imgUpload = require("../../assets/img/upload.png");

function FormText(props) {
  const { handlerFormTextBtn, offAnimate } = props;
  const [form, setForm] = useState({ text: "", language: "none" });
  const [isAnimateText, setIsAnimateText] = useState(false);
  const [clearWindow, setClearWindow] = useState(true);

  const formData = new FormData();

  useEffect(() => {
    offAnimate();
    setIsAnimateText(true);

    setTimeout(() => {
      setClearWindow(false);
    }, 800);
  }, []);

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

      case "text":
        setForm((prevCount) => {
          return {
            ...prevCount,
            text: target.files[0],
          };
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    formData.append("text", form.text);
    formData.append("window-lang", form.language);
  }, [form]);
  return (
    <CSSTransition in={isAnimateText} timeout={890}>
      <form className={`window window-text`}>
        {clearWindow ? (
          ""
        ) : (
          <>
            <div className="window__helper">
              Вставьте текст для дальнейших манипуляций с ним
            </div>
            <div className="textzone dropzone">
              <div className="textzone__content">
                <textarea
                  className="textzone__textarea"
                  name="text"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
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
                  handlerFormTextBtn(e, formData);
                }}
              >
                ДАЛЕЕ
              </button>
            </div>
          </>
        )}
      </form>
    </CSSTransition>
  );
}

export { FormText };

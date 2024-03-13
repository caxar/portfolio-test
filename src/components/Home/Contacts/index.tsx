import React from "react";

const Contacts = () => {
  return (
    <div className="contacts mb-10">
      <div className="contacts-wrapper mb-10">
        <div className="contacts-wrapper__title text-[50px] font-bold mb-7">
          Контакты
        </div>
        <div className="contacts-wrapper__block grid grid-cols-3">
          {/* 1 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[25px] mb-5 text-black_color">
              // Мой код
            </div>
            <a
              href="https://github.com/caxar"
              className="contacts-wrapper__link"
            >
              <div className="contacts-wrapper__text font-bold text-[25px] transition ease-in-out hover:text-purple_color">
                github
              </div>
            </a>
          </div>
          {/* 2 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[25px] mb-5 text-black_color">
              // Моя почта
            </div>
            <a
              href="mailto:morozov.an912345@yandex.ru"
              className="contacts-wrapper__link"
            >
              <div className="contacts-wrapper__text font-bold text-[25px] transition ease-in-out hover:text-purple_color">
                morozov.an912345@yandex.ru
              </div>
            </a>
          </div>
          {/* 3 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[25px] mb-5 text-black_color">
              // Мой номер
            </div>
            <a href="mailto:+79780261854" className="contacts-wrapper__link">
              <div className="contacts-wrapper__text font-bold text-[25px] transition ease-in-out hover:text-purple_color">
                +7 (978) 026-18-54
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="contacts-text text-[25px] mb-5 text-black_color">
        // Создано с помощью Tailwind, React
      </div> */}
    </div>
  );
};

export default Contacts;

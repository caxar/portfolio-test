import React from "react";

const Contacts = () => {
  return (
    <div className="contacts mb-10" data-aos="fade-up">
      <div className="contacts-wrapper mb-10">
        <div className="contacts-wrapper__title text-[30px] font-bold mb-7 sm:text-[40px] lg:text-[50px]">
          Информация
        </div>
        <div className="contacts-wrapper__block grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {/* 1 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[20px]  text-black_color sm:text-[25px]">
              // Мой код
            </div>
            <a
              href="https://github.com/caxar"
              className="contacts-wrapper__link"
            >
              <div className="contacts-wrapper__text font-bold text-[20px] transition ease-in-out hover:text-purple_color sm:text-[25px]">
                github
              </div>
            </a>
          </div>
          {/* 2 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[20px]  text-black_color sm:text-[25px]">
              // Моя почта
            </div>
            <a
              href="mailto:morozov.an912345@yandex.ru"
              className="contacts-wrapper__link"
            >
              <div className="contacts-wrapper__text font-bold text-[20px] transition ease-in-out hover:text-purple_color sm:text-[25px]">
                morozov.an912345@yandex.ru
              </div>
            </a>
          </div>
          {/* 3 */}
          <div className="contacts-wrapper__item">
            <div className="contacts-wrapper__subtitle text-[20px]  text-black_color sm:text-[25px] ">
              // Мой номер
            </div>
            <a href="mailto:+79780261854" className="contacts-wrapper__link">
              <div className="contacts-wrapper__text font-bold text-[20px] transition ease-in-out hover:text-purple_color sm:text-[25px]">
                +7 (978) 026-18-54
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="contacts-text text-[20px] mb-5 text-black_color sm:text-[25px]">
        {/* // Создано с помощью Tailwind, React */}bye()
      </div>
    </div>
  );
};

export default Contacts;

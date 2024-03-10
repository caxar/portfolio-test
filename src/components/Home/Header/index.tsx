import React from "react";

const Header = () => {
  return (
    <div className="header py-4 mb-[100px]">
      <div className="header-wrapper flex items-center justify-between">
        <div className="header-wrapper__logo font-bold text-[25px] cursor-pointer">
          _vasya <span className="text-green_color">()</span>
        </div>
        <nav className="header-wrapper__menu">
          <ul className="flex items-center gap-4 text-[17px]">
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="">
                _Главная <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="#tech">
                _Технологии{" "}
                <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="">
                _Образование{" "}
                <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="">
                _Опыт работы{" "}
                <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="">
                _Проекты <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="">
                _Контакты{" "}
                <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

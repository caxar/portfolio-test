import React from "react";

const Header = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  // Отслеживание скролла для header
  React.useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollTop);

  return (
    <div
      className={`header mb-[100px] transition ease-in-out ${
        scrollTop > 150 ? "sticky top-0 w-full" : ""
      }`}
    >
      <div className="header-wrapper container mx-auto px-6 py-5  flex items-center justify-between ">
        <div className="header-wrapper__logo font-bold text-[25px] cursor-pointer">
          _vasya <span className="text-green_color">()</span>
        </div>
        <nav className="header-wrapper__menu">
          <ul className="flex items-center gap-4 text-[17px]">
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="#tech">
                _Технологии{" "}
                <span className="text-purple_color font-bold">()</span>
              </a>
            </li>
            <li className="menu-item cursor-pointer font-bold py-1 px-1 transition ease-in-out hover:bg-block_color">
              <a href="#education">
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

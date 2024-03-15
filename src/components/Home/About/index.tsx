import React from "react";

const About = () => {
  return (
    <div
      className="about flex items-center py-[100px] "
      id="about"
      data-aos="fade-up"
    >
      <div className="about-wrapper ">
        <div className="tabout-wrapper__text text-[20px] text-black_color sm:text-[25px]">
          hello()
        </div>
        <h1 className="about-wrapper__top text-[30px] font-bold  heading-1 mb-10 text-balance sm:text-[40px] lg:text-[50px]">
          👋<span className="text-green_color">Привет!</span> меня зовут
          <span className="text-green_color">👨‍💻Вася,</span> мне 25 лет. <br />Я{" "}
          занимаюсь
          <span className="text-green_color"> Front-end</span> разработкой.🌟
        </h1>
        <div className="about-wrapper__bottom text-[20px] max-w-2xl text-black_color text-balance sm:text-[25px]">
          <div className="text-[20px] text-black_color mb-5 sm:text-[25px]">
            const whatData ={" "}
          </div>
          Как frontend-разработчик, я занимаюсь созданием внешнего вида и
          функциональности веб-сайтов и приложений. Моя работа включает в себя
          разработку пользовательского интерфейса, создание адаптивного дизайна,
          работу с базами данных и многое другое. В будущем я хочу продолжать
          развиваться в своей профессии, изучать новые технологии и участвовать
          в интересных проектах.
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <div className="about h-[60vh] flex items-center mb-[100px]" id="about">
      <div className="about-wrapper ">
        <h1 className="about-wrapper__top text-[50px] font-bold  heading-1 mb-10">
          👋<span className="text-green_color">Привет!</span> меня зовут
          <span className="text-green_color">👨‍💻Вася,</span> мне 25 лет. <br />Я{" "}
          <span className="text-green_color">Front-end</span> разработчик.🌟
        </h1>
        <div className="about-wrapper__bottom text-[20px] max-w-2xl text-black_color">
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

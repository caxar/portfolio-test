import React from "react";
import { dataExperience } from "../../../utils/data";

const Work = () => {
  return (
    <div className="work" data-aos="fade-up">
      <div className="work-wrapper">
        <div className="work-title text-[30px] font-bold mb-7 sm:text-[40px] md:text-[50px]">
          Опыт работы
        </div>
        <div className="tech-subtitle text-[20px] mb-5 text-black_color sm:text-[25px]">
          const experienceData =
        </div>
        <div className="work-block grid grid-cols-1 gap-10 mb-[40px] md:grid-cols-2 lg:grid-cols-3">
          {dataExperience?.map((item) => (
            <div className="work-block__item">
              <div className="block-block__text text-[20px] font-bold sm:text-[25px]">
                {item?.text}
              </div>
            </div>
          ))}
        </div>
        <div className="task-title text-[20px] mb-5 text-black_color animate-pulse sm:text-[25px]">
          // Также ещё есть что рассказать ;)
        </div>
        {/* <div className="tasks-block">
          {dataTasks.map((item) => (
            <div className="tasks-block__item">
              <div className="tasks-block__text">{item?.text}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Work;

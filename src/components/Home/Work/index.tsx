import React from "react";
import { dataExperience } from "../../../utils/data";

const Work = () => {
  return (
    <div className="work">
      <div className="work-wrapper">
        <div className="work-title text-[50px] font-bold mb-7">Опыт работы</div>
        <div className="tech-subtitle text-[25px] mb-5 text-black_color">
          const experienceData =
        </div>
        <div className="work-block grid grid-cols-2 gap-10 mb-[40px]">
          {dataExperience?.map((item) => (
            <div className="work-block__item">
              <div className="block-block__text text-[30px] font-bold ">
                {item?.text}
              </div>
            </div>
          ))}
        </div>
        <div className="task-title text-[25px] mb-5 text-black_color">
          // Задачи которые я решал
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

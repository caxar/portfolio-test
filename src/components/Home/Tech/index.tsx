import { nanoid } from "nanoid";
import React from "react";
import { dataTech } from "../../../utils/data";

import IMAGES from "../../../images/images";

const Tech = () => {
  const [index, setIndex] = React.useState(0);
  const [techTitle, setTechTitle] = React.useState<string>();

  const context = [
    "all",
    "cms",
    "library",
    "framework",
    "control",
    "styling",
    "language",
    "database",
    "quality",
  ];

  const changeText = () => {
    setIndex(index === context.length - 1 ? 0 : index + 1);
  };

  React.useEffect(() => {
    setTechTitle(context[index]);
  }, [index]);

  return (
    <div className="tech py-[50px]" id="tech" data-aos="fade-up">
      <div className="tech-wrapper">
        <div className="tech-title text-[30px] text-grey_color font-bold mb-7 sm:text-[40px] lg:text-[50px]">
          Технологии которые я использую:
        </div>
        <div className="tech-subtitle text-[20px] mb-5 text-black_color sm:text-[25px]">
          const TechData =
        </div>
        <div className="tech-block grid grid-cols-2 gap-4 flex-wrap mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {dataTech?.map((item) => (
            <div
              key={nanoid()}
              className={`middle-block__item  h-[130px] bg-block_color
     rounded-xl py-3 px-4 flex flex-col items-center justify-center gap-3 ${
       techTitle == item?.code ? "!bg-black_color" : ""
     }`}
            >
              <div className="block-item__img">
                <img src={IMAGES[item?.img]} alt={item?.name} />
              </div>
              <div className="block-item__text text-[18px] font-bold">
                {item?.name}
              </div>
            </div>
          ))}
        </div>
        <div className="tech-wrapper__filter flex justify-between">
          <div className="tech-wrapper__text  text-[20px] text-black_color sm:text-[25px]">
            TechData.filter("
            <button
              className="tecg-wrapper__btn bg-block_color animate-pulse"
              onClick={() => changeText()}
            >
              {techTitle}
            </button>
            ")
          </div>
          <div className="gap-5 text-black_color text-[20px] hidden xl:flex">
            <span className="text-[30px]">/**</span>
            {context?.map((item) => (
              <div className="wrapper-bg__item" key={nanoid()}>
                _{item}
              </div>
            ))}
            ;<span className="text-[30px]">**/</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

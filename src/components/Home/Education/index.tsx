import React from "react";

import IMAGES from "../../../images/images";

const Education = () => {
  return (
    <div className="education pb-[30px]" id="education" data-aos="fade-up">
      <div className="education-wrapper">
        <div className="education-title text-[30px] font-bold mb-7 sm:text-[40px] lg:text-[50px]">
          Образование
        </div>
        <div className="education-subtitle text-[20px] mb-5 text-black_color sm:text-[25px]">
          const EducationData =
        </div>
        <div className="education-block grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {/* 1 */}
          <div
            className="education-block__item flex flex-col w-[100%]
           justify-center items-center gap-5  bg-block_color
            rounded-xl px-3 py-3 sm:px-5 sm:py-5 sm:flex-row"
          >
            <div className="education-item__img w-[90px]">
              <img src={IMAGES.educ1} alt="СЕВКИТИП логотип" />
            </div>
            <div className="w-full">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВКИТИП
                </div>
                <div className="education-item__year font-bold text-black_color">
                  2014-2017
                </div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px] font-bold">
                  <div>Наладчик компьютерных сетей</div>
                  <div className="">
                    классификатор:{" "}
                    <span className="text-black_color">09.01.02</span>
                  </div>
                </div>
                <div className="text-purple_color text-[17px]">
                  среднее образование
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className="education-block__item w-[100%] flex justify-center flex-col 
          items-center gap-5 bg-block_color rounded-xl 
          py-3 px-4 sm:px-5 sm:py-5 sm:flex-row"
          >
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="w-full">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВГУ
                </div>
                <div className="education-item__year font-bold text-black_color">
                  2017-2022
                </div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px] font-bold">
                  <div>Информатика и вычислительная техника</div>
                  <div className="">
                    классификатор:{" "}
                    <span className="text-black_color">09.03.01</span>
                  </div>
                </div>
                <div className="text-purple_color text-[17px]">бакалавриат</div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className="education-block__item w-[100%] flex justify-center 
          flex-col items-center gap-5 bg-block_color rounded-xl 
          py-3 px-4 sm:px-5 sm:py-5 sm:flex-row"
          >
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="w-full">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВГУ
                </div>
                <div className="education-item__year font-bold text-black_color">
                  2022-2024
                </div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px] font-bold">
                  <div>Управление умным городом </div>
                  <div className="">
                    классификатор:{" "}
                    <span className="text-black_color">09.04.04</span>
                  </div>
                </div>
                <div className="text-purple_color text-[17px]">
                  магистратура
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";

import IMAGES from "../../../images/images";

const Education = () => {
  return (
    <div className="education pb-[50px]" id="education">
      <div className="education-wrapper">
        <div className="education-title text-[50px] font-bold mb-7">
          Образование
        </div>
        <div className="education-subtitle text-[25px] mb-5 text-black_color">
          const EducationData =
        </div>
        <div className="education-block flex justify-between gap-5">
          {/* 1 */}
          <div className="education-block__item flex w-[100%] justify-center items-center gap-5 bg-block_color rounded-xl py-5">
            <div className="education-item__img w-[90px]">
              <img src={IMAGES.educ1} alt="СЕВКИТИП логотип" />
            </div>
            <div className="test">
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
                  <div>
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
          <div className="education-block__item w-[100%] justify-center flex items-center gap-5 bg-block_color rounded-xl py-3 px-4">
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="test">
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
                  <div>
                    классификатор:{" "}
                    <span className="text-black_color">09.03.01</span>
                  </div>
                </div>
                <div className="text-purple_color text-[17px]">бакалавриат</div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="education-block__item w-[100%] justify-center flex items-center gap-5 bg-block_color rounded-xl py-3 px-4">
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="test">
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
                  <div>
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

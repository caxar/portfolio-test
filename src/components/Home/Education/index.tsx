import React from "react";

import IMAGES from "../../../images/images";

const Education = () => {
  return (
    <div className="education pb-[50px]" id="education">
      <div className="education-wrapper">
        <div className="education-title text-[50px] font-bold mb-7">
          Образование
        </div>
        <div className="education-block flex gap-5">
          {/* 1 */}
          <div className="education-block__item flex items-center gap-5 bg-block_color rounded-xl py-3 px-4">
            <div className="education-item__img w-[90px]">
              <img src={IMAGES.educ1} alt="СЕВКИТИП логотип" />
            </div>
            <div className="test">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВКИТИП
                </div>
                <div className="education-item__year">2014-2017</div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px]">Наладчик компьютерных сетей</div>
                <div className="text-purple_color">среднее образование</div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="education-block__item flex items-center gap-5 bg-block_color rounded-xl py-3 px-4">
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="test">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВГУ
                </div>
                <div className="education-item__year">2017-2022</div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px]">
                  Информатика и вычислительная техника
                </div>
                <div className="text-purple_color">бакалавриат</div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="education-block__item flex items-center gap-5 bg-block_color rounded-xl py-3 px-4">
            <div className="education-item__img w-[65px]">
              <img src={IMAGES.educ2} alt="СЕВГУ логотип" />
            </div>
            <div className="test">
              <div className="education-item__title flex justify-between">
                <div className="text-[18px] font-bold text-green_color">
                  СЕВГУ
                </div>
                <div className="education-item__year">2022-2024</div>
              </div>
              <div className="education-item__skill">
                <div className="text-[17px]">Управление умным городом</div>
                <div className="text-purple_color">магистратура</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

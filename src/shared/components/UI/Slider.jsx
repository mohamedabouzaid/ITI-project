import React, { useState } from "react";
import { ApiSlides } from "../../../apifolder/SliderApi";

const Slider = () => {
  //useState hooks

  const [slides]   = useState(ApiSlides);
  const [ activeSlide, setActiveSlide ] = useState(0);

  //style
  const arrowStyle =
    "rounded-full flex justify-center items-center shadow-sm hover:cursor-pointer";

    const nexySlide = ()=>{
        if(activeSlide === slides.length - 1)
        {
            setActiveSlide(0)
        }else {
            setActiveSlide(activeSlide + 1)
        }
    }

    const prevSlide = ()=>{
        if(activeSlide === 0 )
        {
            setActiveSlide(slides.length - 1)
        }else {
            setActiveSlide(activeSlide - 1)
        }
    }
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* leftarrow div */}
      <div className={arrowStyle}>
        <span class="material-icons" style={{ fontSize: "50px" }} onClick = {prevSlide}>
          arrow_circle_left
        </span>{" "}
      </div>
      {/* slide div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slide_image"
                  />
                </div>
                <div className="description flex flex-col flex-1 place-content-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* rightarrow div */}
      <div className={arrowStyle}>
        <span class="material-icons" style={{ fontSize: "50px" }} onClick = {nexySlide}>
          arrow_circle_right
        </span>{" "}
      </div>
    </div>
  );
};

export default Slider;

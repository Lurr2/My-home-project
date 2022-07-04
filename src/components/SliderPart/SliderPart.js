import React from "react";
import { useState } from "react";
import data from "../../data.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import classes from "./SliderPart.module.scss";
import { Link } from "react-router-dom";

const SliderPart = ({ slides }) => {
  const [ActiveImage, SetActiveImage] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    SetActiveImage(ActiveImage === length - 1 ? 0 : ActiveImage + 1);
  };
  const prevSlide = () => {
    SetActiveImage(ActiveImage === 0 ? length - 1 : ActiveImage - 1);
  };
  console.log(ActiveImage);

const changeSlide = (i) => {
    SetActiveImage(ActiveImage => ActiveImage = i)
}
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const dots = [];

  for(let i=0;i<data.slider.length;i++){
    dots.push(
        <div className={i === ActiveImage ? classes.red : null} onClick={() => changeSlide(i)}>
            <Link to="#" className={classes.dots}>
                test
            </Link>
        </div>
    )
  }
  return (
    <section className={classes.container}>
    <div className={classes.containerSlider}>
      <FaArrowAltCircleLeft
        className={classes.left_arrow}
        onClick={prevSlide}
      />
      
      
      {data.slider //lewy
        .slice(
          ActiveImage === 0 ? data.slider.length - 1 : ActiveImage - 1,
          ActiveImage === 0 ? data.slider.length : ActiveImage
        )
        .map((slide, index) => {
          return (
            <div key={index} className={classes.lewyImage}>
              <img src={slide.image} alt="some" className={classes.image} />
            </div>
          );
        })}

      {data.slider.slice(ActiveImage, ActiveImage + 1).map((slide, index) => { //środek
        return (
          <div key={index}>
            <img src={slide.image} alt="some" className={classes.image} />
          </div>
        );
      })}

      {data.slider //prawy
        .slice(
          ActiveImage === data.slider.length - 1 ? 0 : ActiveImage + 1,
          ActiveImage === data.slider.length - 1 ? 1 : ActiveImage + 2
        )
        .map((slide, index) => {
          return (
            <div key={index} className={classes.prawyImage}>
              <img src={slide.image} alt="some" className={classes.image} />
            </div>
          );
        })}

        <FaArrowAltCircleRight
        className={classes.right_arrow}
        onClick={nextSlide}
      />
        </div>
        
        
        <div className={classes.dots}>{dots}</div>

    </section>
  );
};

export default SliderPart;
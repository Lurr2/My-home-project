import React from 'react';
import { useState } from 'react';
import data from '../../data.json';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

import classes from './SliderPart.module.scss';

const SliderPart = ({ slides }) => {
    const [ActiveImage, SetActiveImage] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        SetActiveImage(ActiveImage === length - 1 ? 0 : ActiveImage + 1)
    };
    const prevSlide = () => {
        SetActiveImage(ActiveImage === 0 ? length - 1 : ActiveImage - 1)
    };
    console.log(ActiveImage);

    if (!Array.isArray(slides) || slides.length <= 0 ){
        return null;
    }

    return (
        <section className={classes.container}>
            <FaArrowAltCircleLeft className={classes.left_arrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={classes.right_arrow} onClick={nextSlide} />
            {data.slider.map((slide, index) => {
                return (
                    <div className={index === ActiveImage ? classes.slide_active : classes.slide}
                    key={index}>

                    
                    
                    {index === ActiveImage && (
                        <img src={slide.image} alt='some' className={classes.image}/>
                    )}

                   
                    </div>
                )
            })}
        </section>
    );
};

export default SliderPart;
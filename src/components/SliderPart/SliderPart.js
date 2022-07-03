import React from 'react';
import { useState } from 'react';
import data from '../../data.json';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

import classes from './SliderPart.module.scss';

const SliderPart = () => {
    const [ActiveImage, SetActiveImage] = useState(0)
    const length = slides.length

    return (
        <section className={classes.container}>
            <FaArrowAltCircleLeft className={classes.left_arrow} onClick={PrevImage} />
            <FaArrowAltCircleRight className={classes.right_arrow} onClick={NextImage} />
            {data.slider.map((slide, index) => {
                return (
                    <img src={slide.image} alt='some'/>
                )
            })}
        </section>
    );
};

export default SliderPart;
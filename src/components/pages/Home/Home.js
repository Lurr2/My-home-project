import React from 'react';
import Heading from '../../Heading/Heading';
import SliderPart from '../../SliderPart/SliderPart';
import data from '../../../data.json';

const Home = () => {
    return (
        <div>
            <Heading/>
            <SliderPart slides={data.slider}/>
        </div>
    );
};

export default Home;
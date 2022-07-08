import React from 'react';
import Heading from '../../Heading/Heading';
import SliderPart from '../../SliderPart/SliderPart';
import data from '../../../data.json';
import BestDesigner from '../../BestDesigner/BestDesigner';

const Home = () => {
    return (
        <div>
            <Heading/>
            <SliderPart slides={data.slider}/>
            <BestDesigner />
        </div>
    );
};

export default Home;
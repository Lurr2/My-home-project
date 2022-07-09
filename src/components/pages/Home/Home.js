import React from 'react';
import Heading from '../../Heading/Heading';
import SliderPart from '../../SliderPart/SliderPart';
import data from '../../../data.json';
import BestDesigner from '../../BestDesigner/BestDesigner';
import SignUp from '../../SignUp/SignUp';

const Home = () => {
    return (
        <div>
            <Heading/>
            <SliderPart slides={data.slider}/>
            <BestDesigner />
            <SignUp />
        </div>
    );
};

export default Home;
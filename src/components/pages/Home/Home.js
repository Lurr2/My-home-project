import React from 'react';
import Heading from '../../Heading/Heading';
import SliderPart from '../../SliderPart/SliderPart';
import data from '../../../data.json';
import BestDesigner from '../../BestDesigner/BestDesigner';
import SignUp from '../../SignUp/SignUp';
import NewSeason from '../../NewSeason/NewSeason';
import DoItYourself from '../../DoItYourself/DoItYourself';
import SignInTab from '../../SignInTab/SignInTab';
import TwentyFourHours from '../../TwentyFourHours/TwentyFourHours';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <Heading/>
            <SliderPart slides={data.slider}/>
            <BestDesigner />
            <SignUp />
            <NewSeason />
            <DoItYourself YourselfLenght={data.DoItYourselfData}/>
            <SignInTab/>
            <TwentyFourHours/>
            <About />
        </div>
    );
};

export default Home;
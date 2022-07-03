import React from 'react';


const SliderCard = ({ image }) => {
    return (
        <div className={classes.CardContainer}>
            <img src={image} alt='some'/>
            
        </div>
    );
};

export default SliderCard;
import React, { useState } from 'react';
import data from '../../../data.json';

const Livingrooms = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const handleClick = (item, index) => {

    };
    
    return (
        <section>
            
            {data.LivingRooms.map((item, index) => (
                
                <div key={index}>
                    <img src={item.image} alt="some" onClick={() => handleClick(item, index)}/>
                    <h2>{item.description}</h2>
                </div>
    ))}    
        </section>
    
    );
};

export default Livingrooms;
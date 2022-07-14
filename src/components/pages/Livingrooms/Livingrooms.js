import React, { useState } from 'react';
import data from '../../../data.json';
import Modal from '../../common/ModalLivingRoom/Modal';

const Livingrooms = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);



    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.image);
    };

    const HandleRotationRight = () => {
        const totalLength = data.LivingRooms.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.LivingRooms[0].image;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.LivingRooms.filter((item) => {
            return data.LivingRooms.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <section>

            {data.LivingRooms.map((item, index) => (

                <div key={index}>
                    <img src={item.image} alt="some" onClick={() => handleClick(item, index)} />
                    <h2>{item.description}</h2>
                </div>
            ))}
            {clickedImg && (
                <Modal clickedImg={clickedImg}
                    HandleRotationRight={HandleRotationRight}
                    setClickedImg={setClickedImg}
                />
            )}
        </section>

    );
};

export default Livingrooms;
import React, { useState } from 'react';
import data from './data.json';
import './Livingrooms.scss';

//Component
const Livingrooms = () => {
    return (
        <section className="container">
            <h1>Living rooms gallery</h1>
            <div className="img_box">
                <ImageGallery />
            </div>
        </section>
    );
}


//Logic
const ImageGallery = () => {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    //looping through our images array to create img elements
    const imageCards = data.LivingRooms.map((image) => (
        <img alt="some" className="image-card" onClick={() => showImage(image)} src={image.image} />
    ));

    //showing image and displaying popup
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //next image
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = data.LivingRooms.indexOf(imageToShow);
        if (currentIndex >= data.LivingRooms.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = data.LivingRooms[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    //previous image
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = data.LivingRooms.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = data.LivingRooms[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };


    return (
        <section>
            <div>{imageCards}</div>

            {
                lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightBox}>
                        <button onClick={showPrev}>⭠</button>
                        <img alt="some" id="lightbox-img" src={imageToShow.image}></img>
                        <button onClick={showNext}>⭢</button>
                    </div>
                    : ""
            }
        </section>
    );
}

export default Livingrooms;
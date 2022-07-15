import React, { useState } from 'react';
import data from '../../../data.json';
import classes from './Kitchen.module.scss';


const Kitchen = () => {
    return (
        <section className={classes.container}>
            <h1>Kitchen gallery</h1>
            <div className={classes.picture_box}>
                <ImageGallery />
            </div>
        </section>
    );
}



const ImageGallery = () => {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    
    const imageCards = data.Kitchen.map((image) => (
        <img alt="some" className={classes.pictures_card}  onClick={() => showImage(image)} src={image.image} />
    ));

    
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

   
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = data.Kitchen.indexOf(imageToShow);
        if (currentIndex >= data.Kitchen.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = data.Kitchen[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = data.Kitchen.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = data.Kitchen[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };


    return (
        <section>
            <div>{imageCards}</div>

            {
                lightboxDisplay ?
                    <div className={classes.lightbox_view} onClick={hideLightBox}>
                        <button onClick={showPrev}>⭠</button>
                        <img className={classes.lightbox_img} alt="some" src={imageToShow.image}></img>
                        <button onClick={showNext}>⭢</button>
                    </div>
                    : ""
            }
        </section>
    );
}

export default Kitchen;
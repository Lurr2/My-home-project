import React from 'react';
import classes from './NewSeason.module.scss';

const NewSeason = () => {
    return (
        <section className={classes.container}>

            <h2 className={classes.heading}>New Season</h2>

            <figure className={classes.picture__item_1}>
                <img alt="some" className={classes.image} src='https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_960_720.jpg' />
                <figcaption className={classes.figcaptionText}>Decor</figcaption>
            </figure>


            <figure className={classes.picture__item_2}>
                <img alt="some" className={classes.image} src='https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg' />
                <figcaption className={classes.figcaptionText}>Bedroom</figcaption>
            </figure>
            <p className={classes.descriptionText}>Elegant style in your room just in one click</p>
            

            <figure className={classes.picture__item_3}>
                <img alt="some" className={classes.image} src='https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg' />
            </figure>

        </section>
    );
};

export default NewSeason;
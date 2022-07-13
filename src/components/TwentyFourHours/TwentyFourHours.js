import React from 'react';
import classes from './TwentyFourHours.module.scss'

const TwentyFourHours = () => {
    return (
        <section className={classes.container}>
            <figure className={classes.pic1}>
                <img alt="some" className={classes.image} src='https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            </figure>
            <figure className={classes.pic2}>
                <img alt="some" className={classes.image} src='https://images.unsplash.com/photo-1546791844-1a7fc3d7c809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'/>
            </figure>
            <figure className={classes.pic3}>
                <img alt="some" className={classes.image} src='https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            </figure>
            <p className={classes.number}>24</p>
            <p className={classes.hours}>hours</p>
            <p className={classes.text}>of extraordinary discounts</p>
        </section>
    );
};

export default TwentyFourHours;
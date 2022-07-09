import React from 'react';
import Button from '../common/Button/Button';
import classes from './SignUp.module.scss';

const SignUp = () => {
    return (
        <section className={classes.container}>
            <div className={classes.content}>
                <div className={classes.spaceMargin}>
                    <h2 className={classes.receiveText}>Do you want to receive news of promotions and new products?</h2>
                    <p className={classes.signUpText}>Sign up for our newsletter now</p>
                    <input type='text' className={classes.inputBox} />
                    <Button buttonText={`SIGN UP`} />
                    <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className={classes.picture}>
                <img alt="some" src="https://cdn.pixabay.com/photo/2016/07/30/13/16/dandelion-1557110_960_720.jpg" />
            </div>
        </section >
    );
};

export default SignUp;
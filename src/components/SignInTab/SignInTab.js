import React from 'react';
import classes from './SignInTab.module.scss';
import SignInButton from '../common/SignInButton/SignInButton';

const SignInTab = () => {
    return (
        <section className={classes.container}>
            <div className={classes.box}>
                <div className={classes.heading}>
                    <h2>Open your gift table here. </h2>
                    <h2>Gifts with direct delivery to your home</h2>
                </div>

                <div className={classes.inputs}>
                    <input className={classes.bar} type="text" id="event" name="event" placeholder="Select event" />
                    <input className={classes.bar} type="text" id="name" name="name" placeholder="Name" />
                    <input className={classes.bar} type="email" id="email" name="email" placeholder="E-mail" />
                    <SignInButton buttonText={`Sign Up`} />
                    <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </section>
    );
};

export default SignInTab;
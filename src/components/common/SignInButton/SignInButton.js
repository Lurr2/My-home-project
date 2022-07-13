import React from 'react';
import classes from './SignInButton.module.scss';

const SignInButton = ({buttonText}) => {
    return (
        <div>
        <button className={classes.btn}>{buttonText}</button>
        </div>
    );
};

export default SignInButton;
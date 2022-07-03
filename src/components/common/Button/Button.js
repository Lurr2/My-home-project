import React from 'react';
import classes from './Button.module.scss';

const Button = ({buttonText}) => {
    return (
        <div>
        <button className={classes.btn}>{buttonText}</button>
        </div>
    );
};

export default Button;
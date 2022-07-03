import React from 'react';
import Button from '../common/Button/Button';
import classes from './Heading.module.scss';

const Heading = () => {
    return (
        <section>
            <div className={classes.container}>
                <div className={classes.items}>
                    <input className={classes.inputSpace} type='text'/>
                    <Button buttonText={`Sign Up`} />
                </div>
            </div>
        </section>
    );
};

export default Heading;
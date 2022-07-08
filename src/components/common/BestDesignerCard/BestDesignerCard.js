import React from 'react';
import classes from './BestDesignerCard.module.scss';
import Button from '../Button/Button';


const BestDesignerCard = ({ UpText, DownText, FooterText, image, direction }) => {
    if (direction === 'left') {
        return (

            <section className={classes.container}>
                <div className={classes.picture}>
                    <img alt="some" src={image}></img>
                </div>
                <div className={classes.content}>
                    <h2 className={classes.heading}>{UpText}</h2>
                    <p className={classes.description}>{DownText}</p>
                    
                    <Button buttonText={`RENEW YOUR HOME`} />
                    <p className={classes.foot}>{FooterText}</p>
                </div>
            </section>
        );
    }else{
        return (
            <section className={classes.container}>
                <div className={classes.content}>
                    <h2>{UpText}</h2>
                    <p>{DownText}</p>
                    <p >{FooterText}</p>
                    
                </div>
                <div className={classes.picture}>
                    <img alt="some" src={image}></img>
                </div>
            </section>
        );
    }
};

export default BestDesignerCard;
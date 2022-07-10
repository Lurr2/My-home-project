import React from 'react';
import { useState } from 'react';
import data from '../../data.json';
import classes from './DoItYourself.module.scss';

const DoItYourself = ({ YourselfLenght }) => {

    const [ActivePicture, SetActivePicture] = useState(0);
    const length = YourselfLenght.lenght;

    const changePicture = (i) => {
        SetActivePicture(ActivePicture => ActivePicture = i)
    }

    if (!Array.isArray(YourselfLenght) || YourselfLenght.length <= 0) {
        return null;
    }

    const dots = [];

    for (let i = 0; i < data.DoItYourselfData.length; i++) {
        dots.push(
            <div className={i === ActivePicture ? classes.activeDot : null}
                onClick={() => changePicture(i)}>
                <Link to="#" className={classes.dots}>
                    test
                </Link>
            </div>
        )
    }

    return (
        <section>
            <div>
                <h2>Do it yourself.</h2>
                <p>Renovate your house. We advise you</p>
                <p>Home, sweet home</p>
            </div>

            {data.DoItYourselfData
                .slice(
                    ActivePicture, ActivePicture + 1).map((figure, index) => { //górny
                        return (
                            <div key={index}>
                                <img alt='some' src={figure.image} className={classes.image} />
                            </div>

                        );
                    })}

            {data.DoItYourselfData
                .slice(
                    ActivePicture === data.DoItYourselfData.length - 1 ? 0 : ActivePicture + 1,
                    ActivePicture === data.DoItYourselfData.length - 1 ? 1 : ActivePicture + 2
                )
                .map((figure, index) => { //dolny
                    return (
                        <div key={index} className={classes.bottomPicture}>
                            <img alt='some' src={figure.image} className={classes.image} />
                        </div>
                    )
                })}

        </section>
    );
};

export default DoItYourself;
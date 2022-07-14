import React from 'react';
import Button from '../common/Button/Button';
import classes from './About.module.scss';

const About = () => {
    return (
        <section className={classes.container}>
            <div className={classes.box + ' ' + classes.box_one}>
                <ul className={classes.listSetting + ' ' + classes.listOne}>
                    <li>About</li>
                    <li>Bedroom</li>
                    <li>Living room</li>
                    <li>Kitchen</li>
                    <li>Babies</li>
                </ul>

                <ul className={classes.listSetting + ' ' + classes.listTwo}>
                    <li>The new</li>
                    <li>Contact</li>
                    <li>Membership </li>
                </ul>
            </div>

            <div className={classes.box + ' ' + classes.box_two}>
                <p className={classes.question}>Do you want to receive news of promotions and new products? Sign up for our newsletter now</p>
                <input className={classes.input} type="text" id="text" name="text" />
                <Button buttonText={`Sign up`} />
                <p className={classes.textMiddle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

            <div className={classes.box + ' ' + classes.box_three}>
                <p className={classes.solution}>Solutions for every day</p>
                <p className={classes.home}>My home</p>
                <p>Home sweet home</p>
            </div>
        </section>
    );
};

export default About;
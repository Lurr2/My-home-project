import React from 'react';
import classes from './navigationBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <section className={classes.container}>
            <div className={classes.title}>
                <h1>My Home</h1>
                <h4 className={classes.h4text}>Solutions for every day</h4>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' className={navData => navData.isActive ? classes.active : ''}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/livingrooms' className={navData => navData.isActive ? classes.active : ''}>
                            Living rooms
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/kitchen' className={navData => navData.isActive ? classes.active : ''}>
                            Kitchen
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/bedrooms' className={navData => navData.isActive ? classes.active : ''}>
                            Bedrooms
                        </NavLink>
                    </li>

                </ul>

            </nav>

        </section>
    );
};

export default NavigationBar;
import React from 'react';
import Button from '../common/Button/Button';

const LoggingTab = () => {
    return (
        <section>
            <div>
                <h2>Open your gift table here. Gifts with direct delivery to your home</h2>
            </div>

            <div>
            <input type="text" id="event" name="event" placeholder="Select event" />
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="E-mail" />
            <Button buttonText={`Sign Up`}/>
            </div>
        </section>
    );
};

export default LoggingTab;
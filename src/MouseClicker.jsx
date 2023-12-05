import React from 'react';
import styles from './MouseClicker.module.css';

function MouseClicker({ name }) {
    const handleClick = (event) => {
        console.log(`Button clicked: ${event.target.name}`)
    }

    return (
        <button className={styles.button} name={name} onClick={handleClick}>Click me!</button>
    );
}

export default MouseClicker;
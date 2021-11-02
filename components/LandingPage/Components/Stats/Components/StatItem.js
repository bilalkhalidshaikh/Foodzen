import React from 'react';
import classes from './stat.module.css';
import Image from 'next/image';
const StatItem = ({ img, heading, text }) => {
    return (
        <div className={classes.container}>
            <Image src={img} alt="image" />
            <div className={classes.flexColumn}>
                <span>{heading}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default StatItem

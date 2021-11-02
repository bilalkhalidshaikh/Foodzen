import React from 'react'
import classes from './footer.module.css';
const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <ul className={classes.ulContainer}>
                    <li><a href="">About</a></li>
                    <li><a href="">Recipe</a></li>
                </ul>
                <p>Copyright ©2020 All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer

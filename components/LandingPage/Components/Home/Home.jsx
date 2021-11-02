import React from 'react'
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import classes from './home.module.css';
const Home = () => {
    return (
        <div className={classes.container}>
            <Navbar />
            <Header />
        </div>
    )
}

export default Home

import React from 'react'
import HomeHelmet from './Components/Helmet/HomeHelmet'
import FantasyFoodies from './Components/FantasyFoodies/FantasyFoodies'
import Footer from './Components/Footer/Footer'
import Header from './Components/Home/Header/Header'
import Home from './Components/Home/Home'
import Navbar from './Components/Home/Navbar/Navbar'
import Reciepies from './Components/Recipies/Reciepies'
import Stats from './Components/Stats/Stats'
import StepsCravings from './Components/StepsCravings/StepsCravings'
import Stories from './Components/Stories/Stories'
import classes from './landing.module.css'

const LandingPage = () => {
    return (
        <div className={classes.container}>
            <HomeHelmet/>
            <Home />
            <StepsCravings />
            <Stats />
            <Stories />
            <Reciepies />
            <FantasyFoodies />
            {/* <Footer /> */}

        </div>
    )
}

export default LandingPage

import React from 'react'
import classes from './header.module.css';
import foodImg from '../../../../../assets/LandingPage/Rectangle.png';
import foodImgMob from '../../../../../assets/LandingPage/MobileResponsive/mobFood.svg';
import Image from 'next/image';
import { Button } from 'antd';
const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.rectangleFood}>
                    <Image src={foodImg} alt="Picture of the author" className={classes.imgFood} />
                </div>

                <div className={classes.middleSection}>
                    <h1 className={classes.desktopText}>Find recipes to satiate all your cravings.</h1>
                    <h1 className={classes.mobText}>Find recipes that inspire to cook.</h1>
                    <div className={classes.mobrectangleFood}>
                        <Image src={foodImgMob} alt="Picture of the author" width="300px" height="300px" />
                    </div>
                    <Button style={{ backgroundColor: '#2ba1e3',opacity:0.8 }} type="primary">Find Something</Button>
                </div>
            </div >
        </div>
    )
}

export default Header

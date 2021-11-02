import React from 'react'
import classes from './foodies.module.css';
import Image from 'next/image';
import foodies from '../../../../assets/LandingPage/FantasyFoodies/foodies.svg';
const myLoader = ({ src, width, quality }) => {
    return `${src}?w=100%&q=${quality || 20}`
  }
const FantasyFoodies = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.gridItem1}>
                    <h1>Step into the fantasy world of Foodies</h1>
                </div>
                <div className={classes.gridItem2}>
                    <p>Conscious and healthy eating choices do not require thousand ready to eat ingredients or an overstocked refrigerator. A minimal ingredient stock and a website with substitute for everything and anything will not only reduce your grocery expenses but can simultaneously improve your diet in the long run.  </p>
                </div>
                <div className={classes.imgBottomDiv}>
                    {/* <Image src={foodies} alt="Foodies" className={classes.foodiesImg} /> */}
                    <Image
                        // loader={myLoader}
                        src={"https://falcon-foodzen.s3.us-west-1.amazonaws.com/foodies.png"}
                        alt="foodies"
                        className={classes.foodiesImg}
                        width={"1144"}
                        height={"338"}
                        resizemode={"stretch"}
                    />
                </div>
            </div>
        </div>
    )
}

export default FantasyFoodies

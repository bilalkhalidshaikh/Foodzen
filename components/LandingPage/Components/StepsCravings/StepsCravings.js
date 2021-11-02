import React from 'react';
import cake from '../../../../assets/LandingPage/StepsRectangle.svg';
import Image from 'next/image';
import classes from './steps.module.css';
const StepsCravings = () => {
    return (
        <div className={classes.stepsContainer}>
            <div style={{ paddingLeft: "3%" }}>
                <Image src={cake} alt="Cake" width="616px" height="630px" />
            </div>
            <div className={classes.gridItem2}>
                <h1>3 Steps to kick out the hunger cravings</h1>
                <div className="mt-30">
                    <p className="text-bold">
                        1 - FIND YOUR FAVOURITE RECIPE
                    </p>
                    <p>
                        Enter the dish name and Voila, your personal chef for recommendations is up to lift your day.
                    </p>
                </div>
                <div className="mt-30">
                    <p className="text-bold">
                        2 - Reach out for the ingredient list

                    </p>
                    <p>
                        Your favourite chef probably commits to a dish, not to an ingredient. Stop stressing over the Ostrich eggs, because we have ALTERNATIVES in line.
                    </p>
                </div>
                <div className="mt-30">
                    <p className="text-bold">
                        3 - Get, set, GO

                    </p>
                    <p>
                        Get ready to be blown by your own two hands.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StepsCravings

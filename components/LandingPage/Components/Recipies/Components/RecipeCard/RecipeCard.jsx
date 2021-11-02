import React from 'react';
import { Button } from 'antd';
import classes from './card.module.css';
import recipe1 from '../../../../../../assets/LandingPage/Recipies/recipe1.svg';
import Image from 'next/image';
import { Card } from 'antd';
import right from '../../../../../../assets/LandingPage/Recipies/right.svg';


const { Meta } = Card;
const RecipeCard = ({ data }) => {
    return (

        <Card
            className={classes.cardAntd}
            hoverable
            style={{}}
            cover={<Image alt="example" src={data.img} />}
        >
            <div className={classes.cardContent}>
                <p className="text-bold">
                    {data.heading}
                </p>
                <p>
                    {data.description}
                </p>

                <div className={classes.bottomDiv}>
                    <Button style={{ border: "1px solid #0295FF", color: '#0295FF', borderRadius: "25px" }}>Read more</Button>
                    <Image src={right} />
                </div>
            </div>
        </Card>

    )
}

export default RecipeCard

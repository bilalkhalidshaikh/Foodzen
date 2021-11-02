import React from 'react'
import classes from './stories.module.css';
import Image from 'next/image';
import quote from '../../../../assets/LandingPage/stories/Quote.svg';
import user1 from '../../../../assets/LandingPage/stories/user1.svg';
import user2 from '../../../../assets/LandingPage/stories/user2.svg';
import smallQuote from '../../../../assets/LandingPage/stories/smallQuote.svg';
import {
    StarFilled
} from '@ant-design/icons'
const Stories = () => {
    return (
        <div className={classes.container}>
            <div>
                <div className={classes.questionMark}>
                    <Image src={quote} alt="Quote" />
                </div>
                <div className={classes.headingContainer}>
                    <div className={classes.heading}>
                        <div className={classes.headingText}>
                            <h1>Real Stories from Real Users</h1>
                            <p>foodzen-gers, food and some honest reviews</p>
                        </div>


                        <div className={classes.commentsContainer}>
                            <div className={classes.gridItem1}>
                                <div className={classes.comment1}>
                                    <div className="d-flex align-items-center gap-6">
                                        <Image src={user1} alt="User1" width="65px" />
                                        <div className="d-flex flex-column">
                                            <span>Danielle</span>
                                            <span><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
                                        </div>
                                    </div>

                                    <div className={classes.commentDescription}>
                                        <div className={classes.smallQuote}>
                                            <Image src={smallQuote} alt="Quote" />
                                        </div>
                                        <p>
                                            The decision to shift to Czech had a huge effect on my meal planning. Both time crunch and ingredient unavailability in the market forced me try smart options. Foodzen became the go to option during this time. I can easily find recipes, switch ingredients and enjoy it without spending my grocery budget.
                                        </p>
                                        <div className={classes.bottomSignature}>
                                            <p>Vice President, GoPro</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={classes.gridItem2}>
                                <div className={classes.messageItem2Container}>
                                    <div className="d-flex align-items-center gap-6">
                                        <Image src={user2} alt="User1" width="65px" />
                                        <div className="d-flex flex-column">
                                            <span>Madhur Jaffrey</span>
                                            <span className={classes.bottomSignature}>CEO, FoodLab</span>
                                        </div>
                                    </div>
                                    <div className={classes.commentDescription}>
                                        <div className={classes.smallQuote}>
                                            <Image src={smallQuote} alt="Quote" />
                                        </div>
                                        <p>
                                            Surprised and awestruck with the amount of dishes I am getting notified about each week. I have tried 30-35 recipes and it is treat to my tummy and heart every single time.
                                        </p>
                                        <div className={classes.bottomSignature}>
                                            <span><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></span>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ height: "auto" }} className={`${classes.messageItem2Container} ${classes.messageMove}`}>

                                    <div className={classes.commentDescription}>
                                        <div className={classes.smallQuote}>
                                            <Image src={smallQuote} alt="Quote" />
                                        </div>
                                        <p>
                                            The website is the push I needed to try out different cuisines. From salads to Soufflé, you name it they have it.
                                            <div style={{ position: "relative", top: "0px",paddingTop:"10px" }} className="d-flex align-items-center gap-6">
                                                <div style={{ position: "absolute" }}><Image src={user1} alt="User1" width="30px" /></div>
                                                <div className={classes.bottomReviewImgText}>
                                                    <span>Madhur Jaffrey</span>

                                                    <span className={classes.bottomSignature}>Co-Founder, BookMyShow</span>

                                                </div>
                                            </div>
                                        </p>

                                    </div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories

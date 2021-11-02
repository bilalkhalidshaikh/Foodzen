import classes from "../RightCard.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../../constants/baseUrl";
import { yesData, noData } from "../../../../../constants/dataCard";
import { Button } from "antd";
import Image from "next/image";
import csSecondIng from "../../../../../assets/csSecondIng.png";
import csRice from "../../../../../assets/csRice.png";
import { storeAndGetNextDC } from "../../../../../lib/recipe";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const Combination = ({ dataCard }) => {
  const [combData, setCombData] = useState(dataCard);
  useEffect(() => {
    setCombData(dataCard);
  }, [dataCard]);

  const submitButtonHandler = async (linkU, buttonType) => {
    var dc = await storeAndGetNextDC(linkU);
    console.log(dc)
    setCombData(dc)
  };

  return (
    <div className={classes.combMain}>
      <div className={classes.combinationBox}>
        <div className={classes.combContainer}>
          <div className={classes.combAbsolute}>
            <div className={classes.combFlex1}>
              <div className={classes.combImgBox}>
                <div className={classes.combImgContainer}>
                  <Image
                    loader={myLoader} 
                    src={combData.logo_1}
                    width={120}
                    height={120}
                    alt={combData.logo_1_alt}
                    className={classes.catImg}
                  />
                </div>
              </div>
              <div className={classes.comPlus}>+</div>
              <div className={classes.combImgBox}>
                <div className={classes.combImgContainer}>
                  <Image
                    loader={myLoader} 
                    src={combData.logo_2}
                    width={120}
                    height={120}
                    alt={combData.logo_2_alt}
                    className={classes.catImg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bottomSection}>
            <p>{combData.question_text}</p>
            <div className={classes.combFlex2}>
              <Button
                className={classes.yesButton}
                onClick={() => submitButtonHandler(combData.yes_link, "yes")}
              >
                yes
              </Button>
              <Button
                className={classes.noButton}
                onClick={() => submitButtonHandler(combData.no_link, "no")}
              >
                no
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Combination;

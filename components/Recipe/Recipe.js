/* eslint-disable react/no-unescaped-entities */
import classes from "./Recipe.module.css";
import React, { useState, useEffect } from "react";
import LeftCard from "./sections/LeftCard/LeftCard";
import MidCard from "./sections/MidCard/MidCard";
import RightCard from "./sections/RightCard/RightCard";
import Faq from "./sections/Faq/Faq";
import { Button } from "antd";
const Recipe = (props) => {
  const [sDescription, setSDescription] = useState("");
  const [readMoreS, setReadMoreS] = useState(false);
  const [readLessS, setReadLessS] = useState(false);
  useEffect(() => {
    const desc = props.recipe.description;
    const indexIs = desc.substring(0, 150).lastIndexOf(".");
    if (indexIs + 1 !== 150) {
      setSDescription(desc.substring(0, indexIs + 1));
      setReadMoreS(true);
    } else if (desc.length > 150) {
      setSDescription(desc.substring(0, 150));
      setReadMoreS(true);
    } else {
      setSDescription(desc);
    }
  }, [props]);
  const readMore = () => {
    const desc = props.recipe.description;
    setSDescription(desc);
    setReadMoreS(false);
    setReadLessS(true);
  };
  const readLess = () => {
    const desc = props.recipe.description;
    const indexIs = desc.substring(0, 150).lastIndexOf(".");
    if (indexIs + 1 !== 150) {
      setSDescription(desc.substring(0, indexIs + 1));
    } else if (desc.length > 150) {
      setSDescription(desc.substring(0, 150));
    }

    setReadMoreS(true);
    setReadLessS(false);
  };
  const readMoreLink = (
    <span onClick={readMore}>
      &nbsp;<span className={classes.readButton}>Read More</span>
    </span>
  );
  const readLessLink = (
    <span onClick={readLess}>
      &nbsp;<span className={classes.readButton}>Read Less</span>
    </span>
  );
  return (
    <div className={classes.main}>
      <h2 className={classes.heading}> {props.recipe.name}</h2>
      { sDescription && (
      <p className={classes.para}>
        {sDescription} 
        {sDescription.length > 150 &&(
          <p>
            {readMoreS ? readMoreLink : null}{" "}
            {readLessS ? readLessLink : null}
          </p>
        )}
      </p>
      )}
      {/* <h2 className={classes.secondHeading}>Overview</h2> */}
      <div className={classes.recipeFlex}>
        <div className={classes.recipeFlexItem}>
          <LeftCard recipe={props.recipe} />
        </div>
        <div className={classes.recipeFlexItem}>
          <MidCard recipe={props.recipe} />
        </div>
        <div className={classes.recipeFlexItem}>
          {" "}
          <RightCard recipe={props.recipe} />
        </div>
      </div>

      {/* <div className={classes.faqContainer}>
        <Faq faqData={props.recipe.faq} />
      </div> */}
    </div>
  );
};
export default Recipe;

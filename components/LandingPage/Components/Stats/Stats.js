import React from "react";
import classes from "./stats.module.css";
import one from "../../../../assets/LandingPage/stats/1.svg";
import two from "../../../../assets/LandingPage/stats/2.svg";
import three from "../../../../assets/LandingPage/stats/3.svg";
import four from "../../../../assets/LandingPage/stats/4.svg";
import StatItem from "./Components/StatItem";
let statData = [
  {
    img: one,
    heading: "10,000+",
    text: "Users per day",
  },
  {
    img: two,
    heading: "2 Million +",
    text: "Recipes",
  },
  {
    img: three,
    heading: "500+",
    text: "Customers",
  },
  {
    img: four,
    heading: "140",
    text: "Curators",
  },
];
const Stats = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.gridItem1}>
          <h1>Our 4 years of food obsession</h1>
          <p>Because of our commitment to everything FOOD.</p>
        </div>
        <div className={classes.gridItem2}>
          {statData.map((element, i) => {
            return (
              <StatItem
                key={i}
                img={element.img}
                heading={element.heading}
                text={element.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;

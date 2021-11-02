import classes from "./RightCard.module.css";
import CourseSection from "./Components/CourseSection";
import Card from "./Components/Card";
import Combination from "./Components/Combination";
import curve from "../../../../assets/upperCurve.svg";
import Image from "next/image";
const RightCard = (props) => {
  return (
    <div className={classes.rightCardMain}>
      <div className={classes.imageContiner}>
        <div className={classes.breakfastAbsolute}>
          <div className={classes.curveAbsolute}>
            <Image src={curve} alt="curve" />
          </div>
        </div>
        <div className={classes.rightContainer}>
          <CourseSection recipe = {props.recipe}/>
          <Card
            time={props.recipe.total_time}
            calories={props.recipe.difficulty}
          />
          {props.recipe.data_card &&(
            <Combination dataCard={props.recipe.data_card} />
          )}
        </div>
      </div>
    </div>
  );
};
export default RightCard;

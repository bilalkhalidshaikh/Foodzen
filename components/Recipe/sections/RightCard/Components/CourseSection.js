import classes from "../RightCard.module.css";
import Image from "next/image";
import salan from "../../../../../assets/salan.svg";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const CourseSection = (props) => {
  return (
    <div>
      <div className={classes.csFlex}>
        <div className={classes.csImageBox}>
          <div className={classes.csImageContainer}>
          <Image
                loader={myLoader} 
                src={props.recipe.logo}
                alt="chicken"
                className={classes.resImg}
                height={120}
                width={120}
              />
          </div>
        </div>
      </div>
      {props.recipe.tags !== undefined && props.recipe.tags !== null && (
      <div className={classes.csFlex2}>
        {props.recipe.tags.map((tag, i) => (
          <div key={i} className={classes.csFlex3}>
            <div className={classes.circle}></div>
            <div className={classes.csCircleText}>{tag}</div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};
export default CourseSection;

import classes from "../LeftCard.module.css";
import Image from "next/image";
import iChicken from "../../../../../assets/iChicken.png";
import iRice from "../../../../../assets/iRice.png";
import iMeat from "../../../../../assets/iMeat.png";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const IngredientBox = ({ ingredients }) => {
  return (
    <div className={classes.cuisineFlex}>
      {ingredients.map((ing, i) => (
        <div
          key={i}
          className={classes.cuisineFlexCol}
          onClick={(e) => {
            e.preventDefault();
            window.open(ing.link, "_blank");
          }}
        >
          <div>
            <div className={classes.catImgContainer}>
              <Image
                loader={myLoader}
                src={ing.logo}
                alt="chicken"
                className={classes.catImg}
                height={60}
                width={60}
              />
            </div>
          </div>
          <p>{ing.name}</p>
        </div>
      ))}
    </div>
  );
};
export default IngredientBox;

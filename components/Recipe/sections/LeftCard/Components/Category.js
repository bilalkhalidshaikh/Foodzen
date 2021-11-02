import classes from "../LeftCard.module.css";
import Image from "next/image";
import appetizer from "../../../../../assets/appetizer.png";
import mainCourse from "../../../../../assets/mainCourse.png";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const Category = ({ category }) => {
  return (
    <div className={classes.cuisineFlex}>
      {category.map((cat, i) => (
        <div
          key={i}
          className={classes.cuisineFlexCol}
          onClick={(e) => {
            e.preventDefault();
            window.open(cat.link, "_blank");
          }}
        >
          <div>
            <div className={classes.catImgContainer}>
              <Image
                loader={myLoader}
                src={cat.logo}
                alt="mainCourse"
                className={classes.catImg}
                height={60}
                width={60}
              />
            </div>
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Category;

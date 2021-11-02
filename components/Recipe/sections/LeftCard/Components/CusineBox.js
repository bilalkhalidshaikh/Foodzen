import classes from "../LeftCard.module.css";
import Image from "next/image";
import Indian from "../../../../../assets/india.svg";
import Italian from "../../../../../assets/italy.svg";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const CusineBox = ({ cusine }) => {
  return (
    <div className={classes.cuisineFlex}>
      {cusine.map((c, i) => (
        <div
          key={i}
          className={classes.cuisineFlexCol}
          onClick={(e) => {
            e.preventDefault();
            window.open(c.link, "_blank");
          }}
        >
          <div className={classes.cusineBox}>
            <Image
              loader={myLoader}
              src={c.logo}
              height={40}
              width={40}
              alt={c.name}
            />
          </div>
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  );
};
export default CusineBox;

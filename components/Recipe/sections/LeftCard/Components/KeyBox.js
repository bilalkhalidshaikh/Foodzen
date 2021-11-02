import classes from "../LeftCard.module.css";
import classnames from "classnames";
import Image from "next/image";
import india from "../../../../../assets/india.svg";
import italy from "../../../../../assets/italy.svg";
const KeyBox = ({ components }) => {
  return (
    <div className={classes.keyFlex}>
      {components.map((com, i) => (
        <div
          key={i}
          className={classnames(classes.keyBox, classes.kbPurple)}
          onClick={(e) => {
            e.preventDefault();
            window.open(com.link, "_blank");
          }}
        >
          <h2>{com.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default KeyBox;

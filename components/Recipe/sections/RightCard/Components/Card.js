import classes from "../RightCard.module.css";
import Image from "next/image";
import csTime from "../../../../../assets/csTime.svg";
import csCal from "../../../../../assets/csCal.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
const Card = (props) => {
  return (
    <div className={classes.cardMain}>
      <div className={classes.cardFlex}>
        <div className={classes.cardBox}>
          <div className={classes.cardBoxFlex}>
            <div className={classes.cardImageContainer}>
              <Image src={csTime} width={35} alt="time" />
            </div>
            <div className={classes.cardTextContainer}>
              <div className={classes.cardFlex2}>
                <h2>Total Time</h2>
                <div className={classes.cardIcon}>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <p>{props.time}</p>
            </div>
          </div>
        </div>
        <div className={classes.cardBox}>
          <div className={classes.cardBoxFlex}>
            <div>
              <Image src={csCal} width={35} alt="time" />
            </div>
            <div className={classes.cardTextContainer}>
              <div className={classes.cardFlex2}>
                <h2>Difficulty</h2>
                <div className={classes.cardIcon}>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <p>{props.calories}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

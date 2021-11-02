import classes from "../MidCard.module.css";
import React, { useState, useEffect } from "react";
import ViewModal from "../../ViewModal/ViewModal";
import ContactSupport from "../../ContactSupport/ContactSupport";
import { Row, Col, Divider } from "antd";
import Image from "next/image";
import rest1 from "../../../../../assets/rest1.svg";
import rest2 from "../../../../../assets/rest2.svg";
import rl from "../../../../../assets/rl.svg";
import ac from "../../../../../assets/ac.svg";
import sd from "../../../../../assets/sd.svg";
import alt from "../../../../../assets/alt.svg";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 20}`
}
const ImageBox = (props) => {
  const [image, setImage] = useState(rl);
  useEffect(() => {
    if (props.name === "Recipe Links") {
      setImage(rl);
    } else if (props.name === "Accompaniment") {
      setImage(ac);
    } else if (props.name === "Similar Dishes") {
      setImage(sd);
    } else if (props.name === "Alternatives") {
      setImage(alt);
    }
  }, []);
  return (
    <div className={classes.imageBoxMain}>
      {props.from !== "modal" && (
        <div className={classes.imageBoxHeadingMainFlex}>
          <div>
            <div className={classes.cardHeading}>
              <span>
                <Image src={image} alt="recipe-link" />
              </span>{" "}
              {props.name}
            </div>
          </div>
          {props.recipeList.has_more_link !== undefined &&
            props.recipeList.has_more_link !== null && (
              <div className={classes.viewModalParent}>
                <ViewModal
                  name={props.name}
                  viewLink={props.recipeList.has_more_link}
                  list={props.recipeList}
                  iconHeading={image}
                  from="imageBox"
                />
              </div>
            )}
        </div>
      )}
      {props.recipeList2.length > 0 ? (
        <Row gutter={16}>
          {props.recipeList2.map((rl, index) => (
            <Col key={index} className="gutter-row" span={8}>
              <div
                className={classes.imageBoxFlexCol}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(rl.link, "_blank");
                }}
              >
                <div className={classes.rectangleBox}>
                  <div className={classes.imageBoxImgContainer}>
                    <Image
                      loader={myLoader}
                      src={rl.logo}
                      alt="rest1"
                      className={classes.imageBoxImg}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className={classes.imageBoxText}>
                    <h2>{rl.name}</h2>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <ContactSupport />
      )}
    </div>
  );
};
export default ImageBox;

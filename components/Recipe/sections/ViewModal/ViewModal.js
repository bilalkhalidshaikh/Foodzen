import classes from "./ViewModal.module.css";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Modal, Button } from "antd";
import Image from "next/image";
import ImageBox from "../MidCard/Components/ImageBox";
import CusineBox from "../LeftCard/Components/CusineBox";
import IngredientBox from "../LeftCard/Components/IngredientBox";
import KeyBox from "../LeftCard/Components/KeyBox";
import Category from "../LeftCard/Components/Category";
import { viewAllRecipe } from "../../../../lib/recipe";
const ViewModal = ({ viewLink, name, list, iconHeading, from }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewData, setViewData] = useState(list.list);
  React.useEffect(() => {
    if (isModalVisible) {
      const data = viewAllRecipe(viewLink);
      data.then((dt) => setViewData(dt));
      console.log("data is fetching.....");
    }
  }, [isModalVisible]);
  React.useEffect(() => {
    console.log("This is fuckinng log",viewData, list);
  }, [viewData]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={classes.vmMain}>
      <h2 onClick={showModal} className={classes.viewAll}>
        View All{" "}
        <span>
          <IoIosArrowForward />
        </span>
      </h2>
      <Modal
        bodyStyle={{
          border: "1px solid #b7f9ed",
          boxSizing: "border-box",
          boxShadow: "0px 0px 25px rgba(11, 140, 37, 0.1)",
          height: "500px",
          zIndex: "999999999",
          position: "fixed; front"
        }}
        style={{ top: 100 }}
        closable={false}
        mask={false}
        className={classes.modal}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div className={classes.modalContainer}>
            <div className={classes.imageBoxHeadingFlex}>
              <Image src={iconHeading} alt="recipe-link" />
              <div className={classes.cardHeading}>{name}</div>
            </div>
            <div className={classes.boxDiv}>
              {from === "imageBox" && (
                <ImageBox
                  recipeList={list}
                  recipeList2={viewData}
                  name={name}
                  from="modal"
                />
              )}
              {from === "cuisine" && <CusineBox cusine={viewData} />}
              {from === "course" && <KeyBox components={viewData} />}
              {from === "ingredients" && (
                <IngredientBox ingredients={viewData} />
              )}
              {from === "category" && <Category category={viewData} />}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewModal;

import classes from "./ContactSupport.module.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";
const ContactSupport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <div>
      <>
        <div className={classes.nodataButtonDiv}>
          <div className={classes.noFoundText}>
            Still Cooking!!
          </div>
          {/* <Button className={classes.nodataButton} onClick={showModal}>
            Contact Support
          </Button> */}
        </div>
        <Modal
          footer={null}
          mask={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className={classes.modal}
        >
          <h2 className={classes.modalText}>Contact Support</h2>
        </Modal>
      </>
    </div>
  );
};
export default ContactSupport;

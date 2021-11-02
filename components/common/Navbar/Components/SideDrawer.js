import React, { useState } from "react";
import { Drawer, Button, Input } from "antd";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import classes from "../Navbar.module.css";
const SideDrawer = ({ setSearch }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={classes.icon2} onClick={showDrawer}>
        <RiMenu3Fill />
      </div>
      <Drawer
        title={
          <div className={classes.icon1}>
            <CgProfile />
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <Input
            className={classes.searchInput2}
            placeholder="Basic usage"
            suffix={<BsSearch />}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={classes.advanceSearch}>
          <Button type="text" className={classes.seachButton}>
            Advance Search
          </Button>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;

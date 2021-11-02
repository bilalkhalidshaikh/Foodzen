import classes from "./Navbar.module.css";
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import classnames from "classnames";
import SideDrawer from "./Components/SideDrawer";
import SearchedModal from "./Components/SearchedModal";
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
const Navbar = ({ setSearch, searchedRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const onSearch = (e) => {
    setSearch(e.target.value);
    setShowModal(true);
  };
  const onOutsideClicked = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={classes.main}>
        <OutsideClickHandler
          onOutsideClick={() => {
            onOutsideClicked();
          }}
        >
          {searchedRecipe && showModal && (
            <div className={classnames(classes.customModel)}>
              <SearchedModal searchResults={searchedRecipe} />
            </div>
          )}
        </OutsideClickHandler>
        <div className={classes.flex1}>
          <div className={classes.logo}>Logo</div>
          <div className={classes.flex2}>
            <div>
              <Input
                className={classes.searchInput}
                placeholder="Basic Search"
                suffix={<BsSearch />}
                onChange={onSearch}
                // onBlur={onBlur}
              />
            </div>
            <div>
              <Button type="text" className={classes.seachButton}>
                Advance Search
              </Button>
            </div>
          </div>
          <div className={classes.flex3}>
            <div className={classes.iconMain1}>{/* <CgProfile /> */}</div>
            {/* <SideDrawer setSearch={(term) => setSearch(term)} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

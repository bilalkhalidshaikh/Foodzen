import React, { useState } from "react";
import classes from "./navbar.module.css";
import Image from "next/image";
import panda from "../../../../../assets/LandingPage/panda.svg";
import FoodZen from "../../../../../assets/LandingPage/FoodZen.png";
import searchIcon from "../../../../../assets/LandingPage/MobileResponsive/searchIcon.svg";
const Navbar = () => {

  const [isInputEnabled, setInputEnabled] = useState(false);

  const searchHandler = () => {
    setInputEnabled(!isInputEnabled);
    setTimeout(() => {
      let searchElement = document.getElementById('search');
      searchElement?.focus();
    }, 100)
  }
  const blurHandler = () => {
    setTimeout(() => {
      setInputEnabled(false)
    }, 500)
  }
  return (
    <div className={classes.container}>
      <div className={classes.logoDiv} >
        <Image src={panda} className="logoImg" alt="Logo"/>
        <Image src={FoodZen} alt="Logo" />
      </div>
      {/* <ul className={classes.ulContainer}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#"> Recipes</a>
        </li>
      </ul> */}
      <div className={classes.searchIconDiv}>
        {isInputEnabled && <input type="text"
          onBlur={blurHandler}
          name="searchInput"
          className={classes.search}
          placeholder="Search"
          id="search"

        />}
        <Image onClick={searchHandler} src={searchIcon} />
      </div>
    </div>
  );
};

export default Navbar;

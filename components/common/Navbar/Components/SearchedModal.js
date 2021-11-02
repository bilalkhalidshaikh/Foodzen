import classes from "../Navbar.module.css";
import React from "react";
import CusineBox from "../../../Recipe/sections/LeftCard/Components/CusineBox";
import IngredientBox from "../../../Recipe/sections/LeftCard/Components/IngredientBox";
import ImageBox from "../../../Recipe/sections/MidCard/Components/ImageBox";
import cusine from "../../../../assets/cusine.svg";
import ing from "../../../../assets/ing.svg";
import rl from "../../../../assets/rl.svg";
import Image from "next/image";
import { Modal, Button } from "antd";
const SearchedModal = ({ searchResults,onModalClickHandler }) => {
  return (
    <div className={classes.smContainer}>
      {searchResults && searchResults.cuisine !== undefined &&  searchResults.cuisine !== null && searchResults.cuisine.length !== 0 && (
          <div onClick={onModalClickHandler} className={classes.mainCusineHeadFlex}>
          <div className={classes.cusineHeadFlex}>
              <h2 className={classes.cardHeading}>
                  <span>
                    < Image src={ing} alt="ing" />
                  </span>{" "}
                  Cuisine             
              </h2>
          </div>
          {searchResults.cuisine.map((ing, i) => (

                <Button key={i} className={classes.nodataButton} onClick={(e) => {
                      e.preventDefault();
                      window.open(ing.link, "_blank");
                    }}>
                    {ing.name}
                </Button>
          ))}
      </div>
      )}


      {searchResults && searchResults.ingredients !== undefined &&  searchResults.ingredients !== null && searchResults.ingredients.length !== 0 && (
            <div onClick={onModalClickHandler} className={classes.mainCusineHeadFlex}>
                <div className={classes.cusineHeadFlex}>
                    <h2 className={classes.cardHeading}>
                        <span>
                          < Image src={ing} alt="ing" />
                        </span>{" "}
                        Ingredients             
                    </h2>
                </div>
                {searchResults.ingredients.map((ing, i) => (

                      <Button key={i} className={classes.nodataButton} onClick={(e) => {
                            e.preventDefault();
                            window.open(ing.link, "_blank");
                          }}>
                          {ing.name}
                      </Button>
                ))}
                {/* <IngredientBox ingredients={searchResults.ingredients} /> */}
            </div>
        )}



      {searchResults && searchResults.recipe !== undefined &&  searchResults.recipe !== null && searchResults.recipe.length !== 0 && (
        <div>
          <h2 className={classes.cardHeading}>
              <span>
                <Image src={rl} alt="recipe-link" />
              </span>{" "}
              Reipes
            </h2>
          

            {searchResults.recipe.map((rl, index) => (
              <div  key={index} className={classes.recipeSearchResult} onClick={(e) => {
                          e.preventDefault();
                          window.open(rl.link, "_blank");
                        }}>
                      <span className={classes.recipeSearchResultImageBoxImg}>
                        <Image
                              loader={() => rl.logo}
                              src={rl.logo}
                              alt="rest1"
                              height={70}
                              width={70}
                            />
                    </span>
                    <span className={classes.recipeSearchResultText}>
                        {rl.name}
                    </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchedModal;

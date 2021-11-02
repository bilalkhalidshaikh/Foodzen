import classes from "./MidCard.module.css";
import React from "react";
import ImageBox from "./Components/ImageBox";
import breakFast from "../../../../assets/breakFast2.svg";
import curve from "../../../../assets/curve3.svg";
import ing from "../../../../assets/ing.svg";
import Image from "next/image";
import ViewModal from "../ViewModal/ViewModal";
import IngredientBox from "../LeftCard/Components/IngredientBox";
import ContactSupport from "../ContactSupport/ContactSupport";
const MidCard = (props) => {
  return (
    <div className={classes.leftCardMain}>
      <div className={classes.imageContiner}>
        <div className={classes.breakfastAbsolute}>
          <div className={classes.breakfastAbsoluteImg}>
            <Image src={breakFast} alt="break-fast" />
          </div>
        </div>
        <div className={classes.breakfastAbsolute}>
          <div className={classes.curveAbsolute}>
            <Image src={curve} alt="curve" />
          </div>
        </div>
        <div className={classes.leftContiner}>
          {/* <div>
            <ImageBox
              recipeList={props.recipe.source}
              recipeList2={props.recipe.source.list}
              name="Recipe Links"
            />
          </div> */}
          <div>
          <div className={classes.cusineHeadMainFlex}>
              <h2 className={classes.cardHeading}>
                {/* <span>
                  <Image src={ing} alt="ing" />
                </span>{" "} */}
                Ingredients
                <div>
                  <span>{" "}
                    <br></br>{" "}
                    <br></br>{" "}
                    <br></br>{" "}{" "}
                  </span>
                </div>
              </h2>
              </div>
          </div>
          {props.recipe.ingredientsList && props.recipe.ingredientsList.length !== 0? (
            <div>
                {props.recipe.ingredientsList.map((rl,i) => (

                        <div  key={i}>
                          <div className={classes.cusineHeadFlex}>
                            <h2 className={classes.cardHeading}>
                              <span>
                                <Image src={ing} alt="ing" />
                              </span>{" "}
                              {rl.name}
                            </h2>
                            {rl.has_more_link !== null && (
                              <ViewModal
                                name="Ingredients"
                                viewLink={rl.has_more_link}
                                list={rl}
                                iconHeading={ing}
                                from="ingredients"
                              />
                            )}
                          </div>
                          {rl.list.length > 0 ? (
                            <IngredientBox ingredients={rl.list} />
                          ) : (
                            <ContactSupport />
                          )}
                        </div>

                ))}
            </div>
          ) : (
              <ContactSupport />
          )}
          







          {/* <div>
            {props.recipe.accompaniment != undefined &&
              props.recipe.accompaniment != null && (
                <ImageBox
                  recipeList={props.recipe.accompaniment}
                  recipeList2={props.recipe.accompaniment.list}
                  name="Accompaniment"
                />
              )}
          </div>
          <div>
            {props.recipe.similar_dish != undefined &&
              props.recipe.similar_dish != null && (
                <ImageBox
                  recipeList={props.recipe.similar_dish}
                  recipeList2={props.recipe.similar_dish.list}
                  name="Similar Dishes"
                />
              )}
          </div>
          <div>
            {props.recipe.alternatives != undefined &&
              props.recipe.alternatives != null && (
                <ImageBox
                  recipeList={props.recipe.alternatives}
                  recipeList2={props.recipe.alternatives.list}
                  name="Alternatives"
                />
              )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default MidCard;

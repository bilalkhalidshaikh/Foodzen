import classes from "./LeftCard.module.css";
import CusineBox from "./Components/CusineBox";
import KeyBox from "./Components/KeyBox";
import IngredientBox from "./Components/IngredientBox";
import Category from "./Components/Category";
import ContactSupport from "../ContactSupport/ContactSupport";
import ViewModal from "../ViewModal/ViewModal";
import cusine from "../../../../assets/cusine.svg";
import kc from "../../../../assets/kc.svg";
import ing from "../../../../assets/ing.svg";
import cat from "../../../../assets/cat.svg";
import breakFast from "../../../../assets/breakFast.svg";
import curve from "../../../../assets/curve.svg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import ImageBox from "../MidCard/Components/ImageBox";
const LeftCard = ({ recipe }) => {
  const viewAllHandler = (viewAllLink) => {
    console.log(viewAllLink);
  };
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
          <div>
            <div className={classes.cusineHeadFlex}>
              <h2 className={classes.cardHeading}>
                <span>
                  <Image src={cusine} alt="cusine" />
                </span>{" "}
                Cusine
              </h2>
              {recipe.cuisine.has_more_link !== undefined && (
                <ViewModal
                  name="Cuisine"
                  viewLink={recipe.cuisine.has_more_link}
                  list={recipe.cuisine}
                  iconHeading={cusine}
                  from="cuisine"
                />
              )}
            </div>
            {recipe.cuisine.length > 0 ? (
              <CusineBox cusine={recipe.cuisine} />
            ) : (
              <ContactSupport />
            )}
          </div>

          {/* <div>
            <div className={classes.cusineHeadFlex}>
              <h2 className={classes.cardHeading}>
                <span>
                  <Image src={ing} alt="ing" />
                </span>{" "}
                Ingredients
              </h2>
              {recipe.ingredients.has_more_link !== null && (
                <ViewModal
                  name="Ingredients"
                  viewLink={recipe.ingredients.has_more_link}
                  list={recipe.ingredients}
                  iconHeading={ing}
                  from="ingredients"
                />
              )}
            </div>
            {recipe.ingredients.list.length > 0 ? (
              <IngredientBox ingredients={recipe.ingredients.list} />
            ) : (
              <ContactSupport />
            )}
          </div> */}

          <div>
            <div className={classes.cusineHeadFlex}>
              <h2 className={classes.cardHeading}>
                <span>
                  <Image src={kc} alt="kc" />
                </span>{" "}
                Category
              </h2>
              {recipe.category.has_more_link !== null && (
                <ViewModal
                  name="Category"
                  viewLink={recipe.category.has_more_link}
                  list={recipe.category}
                  iconHeading={kc}
                  from="category"
                />
              )}
            </div>

            {recipe.category.list.length > 0 ? (
              <KeyBox components={recipe.category.list} />
            ) : (
              <ContactSupport />
            )}
          </div>

          <div>
            <div className={classes.cusineHeadFlex}>
              <h2 className={classes.cardHeading}>
                <span>
                  <Image src={cat} alt="ing" />
                </span>{" "}
                Course
              </h2>
              {recipe.course.has_more_link !== null && (
                <ViewModal
                  name="Course"
                  viewLink={recipe.course.has_more_link}
                  list={recipe.course}
                  iconHeading={cat}
                  from="course"
                />
              )}
            </div>
            {recipe.course.list.length > 0 ? (
              <Category category={recipe.course.list} />
            ) : (
              <>
                <ContactSupport />
              </>
            )}
          </div>

          <div>
            <ImageBox
              recipeList={recipe.source}
              recipeList2={recipe.source.list}
              name="Recipe Links"
            />
          </div>


        </div>
      </div>
    </div>
  );
};
export default LeftCard;

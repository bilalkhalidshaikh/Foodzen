import React from "react";
import { Helmet } from "react-helmet";

export default function HomeHelmet() {
  return (
    <div>
       <Helmet>
              <title>FoodZen | Home</title>
              <meta name="title" content="Find Recipes that Satify your Cravings."/>
              <meta name="description" content="Foodzen powered by Food Graph is a intelligent Recipe Database that stives to revolutionize the food industries."></meta>

            </Helmet>
    </div>
  );
}

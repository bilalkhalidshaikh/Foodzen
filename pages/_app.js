import "../styles/globals.css";
import "antd/dist/antd.css";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/common/Navbar/Navbar";
import { getSearchedRecipe } from "../lib/recipe";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchedResult, setSearchedResult] = React.useState();

  async function fetchData() {
    const saerchedRecipe = await getSearchedRecipe(searchTerm);
    return saerchedRecipe;
  }

  React.useEffect(() => {
    fetchData().then((dt) => setSearchedResult(dt));
    // if (searchTerm.length > 0 ) {
    //   router.push({
    //     query: { searchTerm: searchTerm},
    //   });
    // }
  }, [searchTerm]);

  const setSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* <Navbar
        setSearch={(term) => setSearch(term)}
        searchedRecipe={searchedResult}
      /> */}
      <Component {...pageProps} searchTerm={searchTerm} />
    </>
  );
}

export default MyApp;

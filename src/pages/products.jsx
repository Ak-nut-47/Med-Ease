import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
// ------------------------------ ---------------------- --------
import Navbar from "../components/shared/navbar";
import Topbar from "../components/shared/topbar";
import HomeAllNutrition from "../components/products_page_components/home_all_catgories_nutrition_food";
import FilterBarNutritionFood from "../components/products_page_components/filter_bar_nutrition";
import FilterPanel from "../components/products_page_components/filter_panel";
import PriceFilter from "../components/products_page_components/price_filter";
import BrandFilter from "../components/products_page_components/brand_filter";
import AllProducts from "../components/products_page_components/all_products";
import CustomLoader from "../components/products_page_components/loader";
import Pagination from "../components/products_page_components/pagination";
import SearchProducts from "../components/products_page_components/search_products";
// ------------------------------ ---------------------- --------

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food?page=${currentPage}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [currentPage]);
  return (
    <>
      <Topbar />
      <Navbar />
      <Flex direction="column" width="80%" m="auto">
        <HomeAllNutrition />
        <SearchProducts setProducts={setProducts} setLoading={setLoading} />
        <FilterBarNutritionFood
          setProducts={setProducts}
          setLoading={setLoading}
        />
        <Flex>
          <Flex className="filterSection" direction="column">
            <FilterPanel />
            <BrandFilter />
            <PriceFilter />
          </Flex>
          <Flex ml="20px" className="all_products">
            {loading ? <CustomLoader /> : <AllProducts products={products} />}
          </Flex>
        </Flex>
        <Center p="20px">
          {products.length > 0 ? (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </Center>
      </Flex>
    </>
  );
}

export default Products;

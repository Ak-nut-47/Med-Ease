import { Box, Flex, Text } from "@chakra-ui/react";

import Navbar from "../components/shared/navbar";
import Topbar from "../components/shared/topbar";
import HomeAllNutrition from "../components/products_page_components/home_all_catgories_nutrition_food";
import FilterBarNutritionFood from "../components/products_page_components/filter_bar_nutrition";
import FilterPanel from "../components/products_page_components/filter_panel";
import PriceFilter from "../components/products_page_components/price_filter";
import BrandFilter from "../components/products_page_components/brand_filter";
function Products() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Flex direction="column" width="80%" m="auto">
        <HomeAllNutrition />
        <FilterBarNutritionFood />
        <Flex className="filterSection" direction="column" w="300px">
          <FilterPanel />
          <BrandFilter />
          <PriceFilter />
        </Flex>
        <Flex className="all_products"></Flex>
      </Flex>
    </>
  );
}

export default Products;

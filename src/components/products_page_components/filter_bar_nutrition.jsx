import { Flex, Text, Box, Select, Center } from "@chakra-ui/react";
import { useState } from "react";
// ---------------------------------------------
export default function FilterBarNutritionFood({ setProducts, setLoading }) {
  const handleChange = (e) => {
    setLoading(true);
    fetch(
      `https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food?sortby=price&order=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <Flex justifyContent="space-between" alignItems="center" py={4}>
      <Text as="h2" fontWeight="semibold" fontSize="2xl">
        Filter
      </Text>
      <Text as="h2" fontWeight="semibold" fontSize="2xl">
        Nutrition Food
      </Text>
      <Box display="flex" alignItems="center">
        <Text fontWeight="semibold" color="#B9B9C9" mr={2}>
          Sort by:
        </Text>
        <Select
          size="md"
          borderRadius="md"
          borderColor="teal.500"
          w="160px"
          onChange={handleChange}
        >
          <option value="option1">Price</option>
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </Select>
      </Box>
    </Flex>
  );
}

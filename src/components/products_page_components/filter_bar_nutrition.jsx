import { Flex, Text, Box, Select, Center } from "@chakra-ui/react";

export default function FilterBarNutritionFood() {
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
        <Select size="md" borderRadius="md" borderColor="teal.500" w="160px">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </Select>
      </Box>
    </Flex>
  );
}

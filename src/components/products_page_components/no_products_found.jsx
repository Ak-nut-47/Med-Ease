import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function NoProductsFound() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Text fontSize="lg" color="gray.500" textAlign="center">
        Please try a different search term or category
      </Text>
      <Image
        src="https://lecadeau.in/assets/images/pnf.jpg"
        alt="No products found"
        mb={4}
      />
    </Flex>
  );
}

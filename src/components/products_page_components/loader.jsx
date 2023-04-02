import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function CustomLoader() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        color="blue.500"
        size="xl"
        mb={4}
      />

      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Loading...
      </Text>

      {/* You can add more elements to make it more aesthetic */}
      {/* For example, you could add a gradient background: */}
      {/* <Box w="100%" h="100%" position="absolute" top="0" left="0" zIndex="-1">
        <Box
          w="100%"
          h="100%"
          bgGradient="linear(to-br, blue.500, purple.600)"
          opacity="0.7"
        />
      </Box> */}
    </Flex>
  );
}

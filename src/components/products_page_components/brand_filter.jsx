import {
  Flex,
  Text,
  Checkbox,
  CheckboxGroup,
  Box,
  Center,
} from "@chakra-ui/react";

export default function BrandFilter() {
  return (
    <Flex direction="column" borderBottom="1px solid #c9c9c9" mb="10px">
      <CheckboxGroup colorScheme="gray">
        <Flex direction="column" h="200px" justifyContent="space-evenly">
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="below-99" style={{ color: "#a9a9a9" }}>
                Brand1
              </label>
              <Checkbox id="below-99" value="below-99" mx={2} />
            </Center>
          </Box>
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="100-199" style={{ color: "#a9a9a9" }}>
                Brand 2
              </label>
              <Checkbox id="100-199" value="100-199" mx={2} />
            </Center>
          </Box>
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="200-299" style={{ color: "#a9a9a9" }}>
                Brand 3
              </label>
              <Checkbox id="200-299" value="200-299" mx={2} />
            </Center>
          </Box>
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="300-399" style={{ color: "#a9a9a9" }}>
                Brand 4
              </label>
              <Checkbox id="300-399" value="300-399" mx={2} />
            </Center>
          </Box>
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="400-499" style={{ color: "#a9a9a9" }}>
                Brand 5
              </label>
              <Checkbox id="400-499" value="400-499" mx={2} />
            </Center>
          </Box>
          <Box d="flex" alignItems="center">
            <Center d="flex" justifyContent="space-between">
              <label htmlFor="500-above" style={{ color: "#a9a9a9" }}>
                Brand 6
              </label>
              <Checkbox id="500-above" value="500-above" mx={2} />
            </Center>
          </Box>
        </Flex>
      </CheckboxGroup>
    </Flex>
  );
}

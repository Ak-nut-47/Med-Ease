import {
  Flex,
  Text,
  Checkbox,
  Input,
  Center,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function FilterPanel() {
  return (
    <Flex
      direction="column"
      //   border="1px solid #c9c9c9"

      borderRadius="md"
      py={4}
    >
      <Text as="h3" fontSize="lg" fontWeight="semibold" px={4} pb={2}>
        Category
      </Text>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #c9c9c9"
        px={4}
        py={2}
      >
        <Text as="p" fontSize="md" color="#c9c9c9">
          Nutrition Food
        </Text>
        <Checkbox defaultIsChecked colorScheme="teal" />
      </Flex>
      <Text
        as="h3"
        fontSize="lg"
        fontWeight="semibold"
        borderBottom="1px solid #c9c9c9"
        px={4}
        py={2}
      >
        Sub Category
      </Text>
      <Text as="h3" fontSize="lg" fontWeight="semibold" px={4} py={2}>
        Brand
      </Text>{" "}
      <InputGroup px={4} py={2}>
        <InputRightElement
          mr="20px"
          mt="8px"
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="text" placeholder="Search" />
      </InputGroup>{" "}
    </Flex>
  );
}

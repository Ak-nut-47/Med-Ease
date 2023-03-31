import {
  Input,
  InputLeftElement,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { CgNotes } from "react-icons/cg";
import { SearchIcon } from "@chakra-ui/icons";
// ------------------ SearchBar Component ------------------
const SearchBar = () => {
  return (
    <Box w="60%" m="auto" pt="32px" fontWeight="semibold">
      <Flex justifyContent="space-between" mb="16px" h="50px">
        <Flex align="center">
          <Text fontSize="2xl">What are you looking for ?</Text>
        </Flex>
        <Flex alignItems="flex-end">
          <IconButton boxSize={6} bg="white" icon={<CgNotes />}></IconButton>
          <Text whiteSpace="pre-wrap">Order with prescription. </Text>{" "}
          <span>
            <Text whiteSpace="pre-wrap" color="teal">
              {" "}
              UPLOAD NOW
            </Text>
          </span>{" "}
        </Flex>
      </Flex>
      <Flex>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            type="text"
            placeholder="Search for Products"
            borderRadius="50"
          />
          <InputRightElement
            children={
              <Box>
                <Button
                  borderRadius="40px"
                  bg="teal"
                  color="white"
                  mr="40px"
                  size="sm"
                >
                  Search
                </Button>
              </Box>
            }
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default SearchBar;

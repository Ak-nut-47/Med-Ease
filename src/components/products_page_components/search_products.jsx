import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchProducts({ setProducts, setLoading }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const baseUrl =
      "https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food";
    const searchUrl = `${baseUrl}?search=${searchTerm}`;
    // Add your search logic here using searchUrl
    setLoading(true);
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <InputGroup maxW="xl" size="lg" m="auto" mt="30px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        mr={2}
      />
      <Input
        type="text"
        placeholder="Search for anything here"
        borderRadius="full"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InputRightElement
        children="Search"
        borderRadius="full"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        bgColor="blue.500"
        color="white"
        _hover={{ bgColor: "blue.600" }}
        _active={{ bgColor: "blue.700" }}
        cursor="pointer"
        onClick={handleSearch}
      />
    </InputGroup>
  );
}

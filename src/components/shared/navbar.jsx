import { Link } from "react-router-dom";
import { Box, Center, Flex } from "@chakra-ui/layout";
function Navbar() {
  const navLinks = [
    "Medicine",

    "Healthcare",
    "Surgeries",
    "Health Blogs",
    "PLUS",
    "Offers",
    "Value Store",
  ];
  return (
    <>
      <Flex
        justifyContent="center"
        p="6px 0px"
        borderBottom="1px solid #D9D9D9"
        fontWeight="semibold"
        color="blackAlpha.700"
      >
        <Center pr="30px">
          <Link to="/">Home</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">Products</Link>
        </Center>

        <Center pr="30px">
          <Link to="/products">Surgeries</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">Health Blogs</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">PLUS</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">Offers</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">Value Store</Link>
        </Center>
        <Center pr="30px">
          <Link to="/products">Medicine</Link>
        </Center>
      </Flex>
    </>
  );
}

export default Navbar;

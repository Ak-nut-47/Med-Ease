import { Link } from "react-router-dom";
import { Box, Center, Flex } from "@chakra-ui/layout";
function Navbar() {
  const navLinks = [
    "Medicine",
    "Lab Tests",
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
        {navLinks.map((link) => (
          <Box pr="30px">
            <Center>
              <Link to="/">{link}</Link>
            </Center>
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default Navbar;

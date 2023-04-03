import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FaBars, FaUser } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg="teal.500"
      color="white"
    >
      <IconButton bg="teal" icon={<FaBars />} aria-label="Menu" mr={4} />
      <Text fontSize="lg" fontWeight="bold">
        ADMIN PAGE
      </Text>
      <IconButton bg="teal" icon={<FaUser />} aria-label="Profile" ml={4} />
    </Flex>
  );
};

export default AdminNavbar;

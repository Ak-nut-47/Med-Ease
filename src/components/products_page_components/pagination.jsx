import React, { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const Pagination = ({
  itemsPerPage = 6,
  totalItems = 40,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box mt={5}>
      <HStack spacing={2}>
        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            size="sm"
            variant={currentPage === pageNumber ? "solid" : "ghost"}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default Pagination;

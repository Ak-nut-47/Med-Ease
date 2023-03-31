import { Flex, Image, Box } from "@chakra-ui/react";

import banner2 from "../assets/Photos/Banner/Banner1/banner_one.webp";
import banner1 from "../assets/Photos/Banner/Banner1/banner_two.webp";
const Banner1 = () => {
  return (
    <Flex pt="40px">
      <Box>
        <Image width="85%" borderRadius="15px" src={banner1} alt="banner1" />
      </Box>
      <Box>
        <Image width="85%" borderRadius="15px" src={banner2} alt="banner1" />
      </Box>
    </Flex>
  );
};

export default Banner1;

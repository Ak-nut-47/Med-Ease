import { Flex, Text, Image, Box, Center, IconButton } from "@chakra-ui/react";
import buy1_get1_free from "../assets/Photos/OffersJustForYou/buy1_get1_free.png";
import upi_offer from "../assets/Photos/OffersJustForYou/upi_offer.jpg";
import { AiOutlineLock } from "react-icons/ai";
export default function OffersJustForYou() {
  return (
    <>
      <Flex direction="column">
        <Flex p="15px 0px">
          <Text fontSize="3xl" fontWeight="semibold">
            Offers Just for You
          </Text>
        </Flex>
        <Flex>
          <Flex
            p="8px 100px 8px 20px"
            borderRadius="lg"
            border="1px solid #D9D9D9"
            mr="30px"
          >
            <Center>
              <Image h="50px" src={buy1_get1_free} alt="buy1_get1_free" />
              <Box ml="15px">
                <Text>Buy One Get One Free</Text>
              </Box>
            </Center>
          </Flex>
          <Flex
            p="8px 100px 8px 20px"
            borderRadius="lg"
            border="1px solid #D9D9D9"
            mr="30px"
          >
            <Center>
              <Image h="50px" src={upi_offer} alt="upi_offer" />
              <Box ml="15px">
                <Text>Earn rewards upto Rs.1000</Text>
              </Box>
            </Center>
          </Flex>
          <Flex
            p="8px 100px 8px 20px"
            borderRadius="lg"
            border="1px solid #D9D9D9"
            bg="#DEFFFC"
          >
            <Center>
              <IconButton
                bg="#DEFFFC"
                color="#208E88"
                icon={<AiOutlineLock />}
              />
              <Box ml="15px">
                <Text color="#208E88">Login to view more offers</Text>
              </Box>
            </Center>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

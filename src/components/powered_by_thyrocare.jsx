import { Box, Flex, Image, Text } from "@chakra-ui/react";
import thyrocare from "../assets/Photos/PoweredByThyrocare/Thyrocare.webp";

// ------------------ PoweredByThyrocare Component ------------------

export default function PoweredByThyrocare() {
  return (
    <>
      <Flex pt="40px" flexDirection="column" textAlign="left">
        <Text fontSize="3xl" fontWeight="semibold">
          Lab Tests by Health Concern
        </Text>

        <Flex>
          <Text color="#D9D9D9" mr="15px">
            Powered by
          </Text>
          <Image src={thyrocare} alt="thyrocare" width="8%" />
        </Flex>
      </Flex>
    </>
  );
}

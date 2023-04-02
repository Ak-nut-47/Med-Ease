import {
  Box,
  Center,
  Stack,
  Link,
  Text,
  IconButton,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="gray.200" py={12} mt="30px">
      <Center>
        <Flex align="flex-start">
          <Box justifyContent="flex-start">
            <Text fontWeight="bold" mb={4}>
              Company
            </Text>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Partner with PharmEasy</Link>
            <Link href="#">Sell at PharmEasy</Link>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Featured Categories
            </Text>
            <Link href="#">Most Loved Brands</Link>
            <Link href="#">Mega Clearance Sale</Link>
            <Link href="#">Personal Care</Link>
            <Link href="#">Healthcare Devices</Link>
            <Link href="#">Health Food and Drinks</Link>
            <Link href="#">Home Care</Link>
            <Link href="#">Mother and Baby Care</Link>
            <Link href="#">Diabetic Care</Link>
            <Link href="#">Fitness Supplements</Link>
            <Link href="#">Skin Care</Link>
            <Link href="#">Sexual Wellness</Link>
            <Link href="#">Accessories & Wearables</Link>
            <Link href="#">Health Condition</Link>
            <Link href="#">Ayurvedic Care</Link>
            <Link href="#">Elderly Care</Link>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Need Help
            </Text>
            <Link href="#">Browse All Medicines</Link>
            <Link href="#">Browse All Molecules</Link>
            <Link href="#">Browse All Cities</Link>
            <Link href="#">Browse All Areas</Link>
            <Link href="#">Browse All Stores</Link>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Our Services
            </Text>
            <Link href="#">Order Medicine</Link>
            <Link href="#">Healthcare Products</Link>
            <Link href="#">Lab Tests</Link>
            <Link href="#">Find Nearest Collection Centre</Link>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={4}>
              Policy Info
            </Text>
            <Link href="#">Editorial Policy</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Vulnerability Disclosure Policy</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Customer Support Policy</Link>
            <Link href="#">Return Policy</Link>
          </Box>
        </Flex>
      </Center>
      <Box mt={8}>
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
          <IconButton
            as="a"
            href="#"
            aria-label="YouTube"
            icon={<FaYoutube />}
            size="lg"
            variant="ghost"
            colorScheme="gray"
          />
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;

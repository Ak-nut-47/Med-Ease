import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

// -----------------------------------------------------------------
//Image imports for navlinks
import medicine from "../assets/Photos/medicine_ff.webp";
import labTests from "../assets/Photos/labtest_ff.webp";
import healthcare from "../assets/Photos/healthcare_ff.webp";
import offers from "../assets/Photos/offers_ff.webp";
import healthBlogs from "../assets/Photos/health_blogs_ff.webp";
import plus from "../assets/Photos/plus_ff.webp";
import surgeries from "../assets/Photos/offers_1_ff.webp";
import valueStore from "../assets/Photos/value_store.png";

// -----------------------------------------------------------------
function NavlinkCard({ imageUrl, primaryTitle, secondaryTitle }) {
  const navlinks = [
    {
      name: "Medicine",
      image: medicine,
      discount: "FLAT 15% OFF",
    },
    {
      name: "Lab Tests",
      image: labTests,
      discount: "UPTO 70% OFF",
    },
    {
      name: "Healthcare",
      image: healthcare,
      discount: "UPTO 60% OFF",
    },
    {
      name: "Surgeries",
      image: surgeries,
      discount: "",
    },
    {
      name: "Health Blogs",
      image: healthBlogs,
      discount: "",
    },
    {
      name: "PLUS",
      image: plus,
      discount: "SAVE 5% OFF",
    },
    {
      name: "Offers",
      image: offers,
      discount: "",
    },
    {
      name: "Value Store",
      image: valueStore,
      discount: "UPTO 50% OFF",
    },
  ];
  return (
    <>
      <Flex pt="40px" gap={8}>
        {navlinks.map((item) => (
          <Box
            key={item.name}
            overflow="hidden"
            width="100%"
            sx={{
              // boxShadow: "md",
              transition: "all 0.2s",
              _hover: {
                boxShadow: "lg",
                cursor: "pointer",
                border: "1px solid #D9D9D9",
                borderRadius: "lg",
              },
            }}
          >
            <Center borderBottom="1px solid #D9D9D9">
              <Image src={item.image} alt={item.name} width="60%" />
            </Center>

            <Box p="6" fontWeight="bold">
              <Text fontSize="md">{item.name}</Text>

              <Text mt="2" fontSize="xs" color="red.400">
                {item.discount}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default NavlinkCard;

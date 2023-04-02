import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Center,
  Flex,
} from "@chakra-ui/react";
const Card = ({ product }) => {
  const { id, name, description, image, price, brand, discount } = product;
  const [showDetails, setShowDetails] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDetailsClick = () => {
    setShowDetails(true);
    onOpen();
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    onClose();
  };

  return (
    <Box
      h="380px"
      w="290px"
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-4px)",
      }}
    >
      <Center>
        <Image src={image} alt={name} h="100px" objectFit="cover" />
      </Center>
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" mb="2" color="gray.500">
          {description.slice(0, 12) + "..."}
        </Text>
        <Text fontSize="lg" fontWeight="semibold" mb="2">
          MRP : Rs. {price}
        </Text>
        <Text fontSize="md" mb="2" fontWeight="bold" color="#a9a9a9">
          Brand: {brand}
        </Text>
        <Box d="flex" alignItems="center" mb="2">
          <Flex justifyContent="space-evenly">
            <Text fontSize="sm" mr="1">
              Discount:
            </Text>
            <Box
              bg="red.300"
              color="white"
              p="1"
              pr="10px"
              pl="10px"
              borderRadius="sm"
              fontSize="sm"
            >
              {discount}
            </Box>
          </Flex>
        </Box>
        <Button
          variant="outline"
          colorScheme="pink"
          onClick={handleDetailsClick}
          mr="2"
        >
          Details
        </Button>
        <Button colorScheme="teal">Add to Cart</Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Card;

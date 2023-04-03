import { useState, useEffect } from "react";
import {
  Text,
  Table,
  Tbody,
  Tr,
  Th,
  Thead,
  Td,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Flex,
  Image,
} from "@chakra-ui/react";
import AdminNavbar from "../components/admin_page_navbar";
import CustomLoader from "../components/products_page_components/loader";
import { Link } from "react-router-dom";
const initState = {
  id: "",
  name: "",
  description: "",
  image: "",
  price: "",
  brand: "",
  discount: "",
};
const AdminPage = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    fetch("https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food")
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setFormData(initState);
        setLoading(false);
      });
  };

  const handleUpdate = (id, newData) => {
    fetch(`https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((item) =>
          item.id === id ? newData : item
        );
        setData(updatedData);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://64287dfcebb1476fcc39986f.mockapi.io/nutrition_food/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <AdminNavbar />
      <Flex textDecoration="underline" justifyContent="center">
        <Link to="/">Return To Home</Link>
      </Flex>
      {loading ? (
        <CustomLoader />
      ) : (
        <Flex
          w="80%"
          // bgGradient="linear(to-b, teal.500, black)"
          bgBlendMode="multiply"
          m="auto"
          direction={"column"}
        >
          <Flex m="auto" mt="35px" mb="35px">
            <form
              onSubmit={handleAdd}
              style={{
                border: "1px solid #a9a9a9",
                padding: "40px",
                color: "black",
              }}
            >
              {" "}
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="bold"
                bgGradient="linear(to-b, teal.300, cyan.400, blue.500)"
                bgClip="text"
                textAlign="center"
                textShadow="2px 2px 0px rgba(0,0,0,0.25)"
                mb="8"
              >
                Add a new Product
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    type="text"
                    name="description"
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Image Url</FormLabel>
                  <Input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Brand</FormLabel>
                  <Input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Discount in %</FormLabel>
                  <Input
                    type="text"
                    name="discount"
                    value={formData.discount}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>ID</FormLabel>
                  <Input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleFormChange}
                  />
                </FormControl>
              </Grid>
              <Button mt={4} colorScheme="teal" type="submit">
                Add
              </Button>
            </form>
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            p={8}
            border="1px solid #b9b9b9"
          >
            <Table variant="simple">
              <Thead>
                <Tr borderBottom="1px solid #a9a9a9">
                  <Th>Product Image</Th>
                  <Th>Product Name</Th>

                  <Th>Price</Th>
                  <Th>Discount</Th>
                  <Th>Brand</Th>
                  <Th>Product Description</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map((item) => (
                  <Tr key={item.id}>
                    <Td>
                      <Image
                        src={item.image}
                        boxSize="50px"
                        objectFit="cover"
                      />
                    </Td>
                    <Td fontWeight="bold">{item.name}</Td>
                    <Td>{item.description}</Td>
                    <Td fontWeight="bold">Rs. {item.price}</Td>
                    <Td>{item.brand}</Td>
                    <Td>{item.discount}</Td>
                    <Td>
                      <Button
                        colorScheme="green"
                        variant="solid"
                        mr={4}
                        onClick={() => handleUpdate(item.id, item)}
                      >
                        Update
                      </Button>
                      <Button
                        colorScheme="red"
                        variant="solid"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default AdminPage;

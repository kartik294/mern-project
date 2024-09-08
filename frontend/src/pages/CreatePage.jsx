import { useState } from "react"; // Import useState
import {
  Input,
  Container,
  VStack,
  Box,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  // Call useColorModeValue within the component body
  const boxBg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign="center" mb={"8"}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={boxBg}
          p={6}
          rounded={"lg"} // Fix the 'rounded' property
          shadow={"md"} // Fix the 'shadow' property
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name} // Remove quotes to bind with state
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price} // Correct the value binding
              onChange={
                (e) => setNewProduct({ ...newProduct, price: e.target.value }) // Update 'price'
              }
            />

            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image} // Correct the value binding
              onChange={
                (e) => setNewProduct({ ...newProduct, image: e.target.value }) // Update 'image'
              }
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;

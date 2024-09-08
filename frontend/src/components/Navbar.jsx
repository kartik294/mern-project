import {
  Container,
  Flex,
  HStack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci"; // Icon for Add Product
import { IoMoon } from "react-icons/io5"; // Icon for Moon (Dark Mode)
import { LuSun } from "react-icons/lu"; // Icon for Sun (Light Mode)
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button leftIcon={<CiSquarePlus />} colorScheme="teal">
              Add Product
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

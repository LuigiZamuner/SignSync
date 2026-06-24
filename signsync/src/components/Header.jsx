import { Box, Image } from "@chakra-ui/react";
import imagem from "../assets/Logo.png";

function Header() {
  return (
    <Box bg="#f5f2ec">
      <Box maxW="1100px" mx="auto" py={2}>
        <Image
          src={imagem}
          alt="logo"
          w="220px"
          display="block"
          mx="auto"
        />
      </Box>
    </Box>
  );
}

export default Header;
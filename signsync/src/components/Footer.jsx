import { Box, Text, Image, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import imagem from "../assets/minilogo.png";

function Footer() {
  return (
    <Box bg="#32ad67">
      <Box maxW="1100px" mx="auto" boxShadow="lg" p={5}>
        <HStack justifyContent="space-between">
          <Image
            src={imagem}
            alt="logo"
            w="220px"
            display="block"
          />

          <HStack spacing={4}>
            <Link
              href="https://www.instagram.com/tyoluk"
              isExternal
              color="white"
              fontSize="lg"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl"/>
            </Link>

            <Link
              href="https://www.linkedin.com/in/luigi-zamuner-3468ba1a1/"
              isExternal
              color="white"
              fontSize="lg"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl"/> 
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer;
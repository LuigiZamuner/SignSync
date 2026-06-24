import { Box, Text, HStack, Link, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import qrCode from "../assets/qrCode.jpeg";

function Nav() {
  const [showContact, setShowContact] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [copied, setCopied] = useState(false);

  const MotionBox = motion(Box);

  const pixKey = "00020126330014br.gov.bcb.pix0111500398328055204000053039865802BR5920LUIGI ZAMUNER MARTIN6008SOROCABA62580520SAN2026061706315650550300017br.gov.bcb.brcode01051.0.063047DDC";

const copyPix = () => {
  navigator.clipboard.writeText(pixKey);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  return (
    <Box bg="#32ad67" position="sticky" top="0" zIndex="1000">
      <Box maxW="1100px" mx="auto" color="white" p={5} boxShadow="lg">
        <HStack justifyContent="space-between">
          <HStack spacing={10}>
            <Link href="about" fontSize="17px" fontWeight="bold">
              About Project
            </Link>

            <Link
              onClick={() => setShowContact(!showContact)}
              fontSize="17px"
              fontWeight="bold"
              cursor="pointer"
            >
              Contact
            </Link>
          </HStack>

          <Link
            onClick={() => setShowDonate(!showDonate)}
            fontSize="17px"
            fontWeight="bold"
            cursor="pointer"
          >
            Donate
          </Link>
        </HStack>
      </Box>

      {showContact && (
        <Box
          maxW="1100px"
          borderColor="rgb(42,160,93)"
          borderWidth="1px"
          mx="auto"
          p={2}
        >
          <Text fontSize="lg" color="#f5f2ec" textAlign="center">
            tyzamuner@gmail.com | (55) 15 98106-5396
          </Text>
        </Box>
      )}

      {showDonate && (
        <MotionBox
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="rgba(0,0,0,0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="2000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <MotionBox
            bg="white"
            p={8}
            borderRadius="lg"
            position="relative"
            minW="350px"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              textAlign="center"
            >
              Apoie o SignSync ❤️
            </Text>

            <Image
              src={qrCode}
              alt="QR Code Pix"
              maxW="250px"
              mx="auto"
            />

            <Text mt={4} textAlign="center">
              Escaneie o QR Code ou copie a chave Pix.
            </Text>

            <Box
              mt={4}
              p={3}
              bg="gray.100"
              borderRadius="md"
            >
              <Text
                fontSize="sm"
                wordBreak="break-all"
                mb={3}
              >

              </Text>

              <Button
                colorScheme={copied ? "teal" : "green"}
                w="100%"
                onClick={copyPix}
              >
                {copied ? "✓ Chave Pix copiada!" : "Copiar chave Pix"}
              </Button>
            </Box>

            <Link
              position="absolute"
              top={3}
              right={4}
              onClick={() => setShowDonate(false)}
              cursor="pointer"
              fontWeight="bold"
              fontSize="2xl"
              color="gray.500"
              _hover={{
                color: "red.500",
                textDecoration: "none",
              }}
            >
              ✕
            </Link>
          </MotionBox>
        </MotionBox>
      )}
    </Box>
  );
}

export default Nav;
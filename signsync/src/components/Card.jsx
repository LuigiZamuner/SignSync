import { Box, Heading, Text } from "@chakra-ui/react";

function Card({ h2, h3 }) {
  return (
    <Box

      borderWidth="1px"
      borderRadius="lg"
      p={6}
      boxShadow="md"
    >
      <div className="card">
        <Heading size={"lg"} mb={4}>
          {h2}
        </Heading>
        <Text fontSize={"xl"}>
          {h3}
        </Text>
 
      </div>
    </Box>
  );
}

export default Card;
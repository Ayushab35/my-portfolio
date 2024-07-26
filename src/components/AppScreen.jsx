import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Divider,
  Badge,
} from "@chakra-ui/react";

function AppScreen() {
  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <VStack spacing={4} align="stretch">
        <Text color="orange.300" fontSize="lg" fontWeight="bold" mb={2}>
          Choose an offering you want to learn?
        </Text>

        {/* Repeat this Box for each card */}
        <Box bg="gray.700" p={4} rounded="md" shadow="base">
          <HStack spacing={4} mb={4}>
            <Image src="path/to/astronaut-placeholder.png" boxSize="50px" />
            <Text fontWeight="bold" color="white" flex="1">
              CBSC board crash offerings
            </Text>
          </HStack>
          <Divider mb={4} />
          <HStack justifyContent="space-between">
            <Box>
              <Badge colorScheme="blue" mb={1}>
                Target exam
              </Badge>
              <Text color="gray.300">CBSE Board</Text>
            </Box>
            <Box>
              <Badge colorScheme="blue" mb={1}>
                Learn in
              </Badge>
              <Text color="gray.300">English, Hindi</Text>
            </Box>
            <Box>
              <Badge colorScheme="blue" mb={1}>
                Courses
              </Badge>
              <Text color="gray.300">07</Text>
            </Box>
          </HStack>
          <Button colorScheme="orange" mt={4} isFullWidth>
            VIEW DETAILS
          </Button>
        </Box>
        {/* End of card Box */}

        {/* ... another card ... */}
      </VStack>

      <Button colorScheme="orange" mt={8} isFullWidth>
        Continue
      </Button>
    </Box>
  );
}

export default AppScreen;

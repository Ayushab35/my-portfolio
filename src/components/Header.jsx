import React from "react";
import { Box, Text, Flex, Image, VStack } from "@chakra-ui/react";
import Banner from "../assets/bannerImage.svg";

function Header() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      p={{ base: "0.3rem", md: "3rem" }}
      //   bg={useColorModeValue(colors.light.background, colors.dark.background)}
    >
      <VStack
        spacing={4}
        align="flex-start"
        flex={{ base: "none", md: 1 }}
        p="2rem"
      >
        <Text
          fontSize="45px"
          fontWeight="700"
          lineHeight={"57px"}
          fontFamily={"Sora"}
          className="border-font"
        >
          Full-stack web and mobile app developer, and amateur Guitarist.
        </Text>
        <Text fontFamily={"Sora"}>
          I'm Ayush Bhandarkar Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </Text>
      </VStack>
      <Box
        flex={{ base: "none", md: 1 }}
        overflow={"hidden"}
        borderRadius="1rem"
        p="2rem"
      >
        <Image
          objectFit={{ base: "contain", md: "cover" }} // "contain" for mobile, "cover" for larger screens
          h={{ base: "200px", md: "430px" }}
          w={"100%"}
          src={Banner}
          alt="My photo"
        />
      </Box>
    </Flex>
  );
}

export default Header;

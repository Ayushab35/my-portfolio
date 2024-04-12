import React from "react";
import {
  Box,
  Text,
  Flex,
//   Grid,
  useColorModeValue,
//   Button,
  Image,
  VStack,
//   HStack,
} from "@chakra-ui/react";
import Ayush from "../assets/ayush.jpeg";
import Banner from "../assets/bannerImage.svg"
import { useTheme } from "@chakra-ui/react";

function Header() {
    const theme = useTheme();
    const { colors } = theme;
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
          fontFamily={"sans-serif"}
        //   border={"3px solid green"}
        >
          Full-stack web and mobile app developer, and amateur Guitarist.
        </Text>
        <Text>
          I am Ayush Bhandarkar, a frontend developer with expertise in ReactJs
          and NextJs. I have experience in building scalable, secure and
          reliable web applications using various frameworks and technologies. I
          enjoy solving complex problems and learning new skills. I am
          passionate about creating high-quality code that follows best
          practices and industry standards. I am always looking for new
          challenges and opportunities to grow as a developer.
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
import React from 'react'
import { Box, Text, Flex, Image, VStack , useColorModeValue, HStack} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import projectImage from "../assets/projectImage.svg"

function Project() {
  const theme = useTheme();
  const { colors } = theme;
  console.log(colors);
  return (
    <>
      <Box
        bg={useColorModeValue(colors.dark.background, colors.light.background)}
        p={"2rem"}
        w={"100%"}
        pb={"5rem"}
      >
        <HStack justifyContent={"center"} mb={"2rem"}>
          <Text
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            fontFamily={"Sora"}
            color={useColorModeValue(colors.dark.text, colors.light.text)}
          >
            My
          </Text>
          <Text
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            fontWeight={"bold"}
            fontFamily={"Sora"}
            color={useColorModeValue(colors.dark.text, colors.light.text)}
          >
            Projects
          </Text>
        </HStack>
        <Flex direction={{ base: "column", md: "row" }}>
          <Image src={projectImage} alt="Project 1" w={"50%"} />
          <VStack w={"50%"}>
            <Text
              color={useColorModeValue(colors.dark.text, colors.light.text)}
            >
              01
            </Text>
            <Text
              color={useColorModeValue(colors.dark.text, colors.light.text)}
            >
              Guitara
            </Text>
            <Text></Text>
            <ExternalLinkIcon />
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default Project
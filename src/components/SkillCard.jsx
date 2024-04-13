import { Box, Image, Text, VStack } from "@chakra-ui/react";

export const SkillCard = (props) => {
  return (
    <>
      <Box
        bg={"white"}
        borderRadius={"7px"}
        border={"2px black solid"}
        p={"2rem"}
        m={{ base: "0.5rem" }}
      >
        <VStack textAlign={"center"}>
          <Box>
            <Image
              src={props.image}
              alt={props.skill}
              h={"45px"}
              w={"45px"}
              objectFit={"contain"}
            />
          </Box>
          <Box>
            <Text
              color={"black"}
              mt={"2rem"}
              fontFamily={"Sora"}
              fontWeight={"500"}
            >
              {props.skill}
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

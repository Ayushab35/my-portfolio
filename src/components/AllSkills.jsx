import React, { useState, useEffect } from "react";
import { Grid, HStack, Text, ScaleFade } from "@chakra-ui/react";
import skills from "../data/Skill";
import { SkillCard } from "./SkillCard";

export const AllSkills = () => {
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const threshold = innerHeight * 0.2; // Adjust as needed

      if (scrollY > threshold) {
        setShowFade(true);
      } else {
        setShowFade(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HStack justifyContent={"center"} m={"2rem"}>
        <Text
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontFamily={"Sora"}
        >
          My
        </Text>
        <Text
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight={"bold"}
          fontFamily={"Sora"}
        >
          Skills
        </Text>
      </HStack>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={{ base: "0rem", md: "2rem" }}
        px={{ base: "0", md: "5rem" }}
        mb={"3rem"}
      >
        {skills.map((data, i) => (
          <ScaleFade key={i} in={showFade}>
            <SkillCard image={data.image} skill={data.skill} />
          </ScaleFade>
        ))}
      </Grid>
    </>
  );
};

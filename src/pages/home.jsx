import React from "react";
import Header from "../components/Header";

// import { useTheme } from "@chakra-ui/react";
import { Experience } from "../components/Experience";
import { AllSkills } from "../components/AllSkills";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";

function Home() {
  // const theme = useTheme();
  // const { colors } = theme;
  return (
    <>
      <Header />
      <AllSkills />
      <Experience />
      <AboutMe />
      <Project />
    </>
  );
}

export default Home;

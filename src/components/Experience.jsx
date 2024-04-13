// import React from 'react'
// import { useTheme } from "@chakra-ui/react";
// import {
//   Box,
//   //   Grid,
//   HStack,
//   Text,
//   useColorModeValue,
//   Image,
//   Flex,
//   ScaleFade,
// } from "@chakra-ui/react";

// export const Experience = () => {
//   const theme = useTheme();
//   const { colors } = theme;
//   return (
//     <>
//       <ScaleFade >
//         <Box
//           bg={useColorModeValue(
//             colors.dark.background,
//             colors.light.background
//           )}
//           p={"2rem"}
//           w={"100%"}
//           pb={"5rem"}
//         >
//           <HStack justifyContent={"center"} mb={"2rem"}>
//             <Text
//               fontSize={{ base: "24px", md: "36px", lg: "48px" }}
//               fontFamily={"Sora"}
//               color={useColorModeValue(colors.dark.text, colors.light.text)}
//             >
//               My
//             </Text>
//             <Text
//               fontSize={{ base: "24px", md: "36px", lg: "48px" }}
//               fontWeight={"bold"}
//               fontFamily={"Sora"}
//               color={useColorModeValue(colors.dark.text, colors.light.text)}
//             >
//               Experience
//             </Text>
//           </HStack>
//           <Box px={{ base: "5px", md: "100px", lg: "136px" }}>
//             <Box
//               border={"1px solid #71717A"}
//               width={"100%"}
//               borderRadius={"7px"}
//             >
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 // align="center"
//                 justify="space-between"
//                 p={{ base: "24px", md: "24px", lg: "24px" }}
//                 alignItems={{ base: "left", md: "left", lg: "center" }}
//               >
//                 <HStack>
//                   <Image
//                     //   src="https://media.licdn.com/dms/image/C4D0BAQEAhzR6Ks2cuQ/company-logo_200_200/0/1662467192996/emertech_innovations_pvt_ltd_logo?e=2147483647&v=beta&t=s4r24ePoEKYhLsVOo91SD2l8FOtTV2hUIIM_GRz6gkI"
//                     src="https://cdnv2.cutshort.io/company-static/5fcfa88e73308055eadfcb07/user_uploaded_data/logos/Emertech_Logo_icon_1RmqlFyA.png"
//                     alt="Emertech Logo"
//                     borderRadius={"7px"}
//                     h={{ base: "24px", md: "26px", lg: "32px" }}
//                     w={{ base: "24px", md: "26px", lg: "32px" }}
//                   />
//                   <Text
//                     color={useColorModeValue(
//                       colors.dark.text,
//                       colors.light.text
//                     )}
//                     fontSize={{ base: "17px", md: "26px", lg: "24px" }}
//                     w={{ base: "100%", md: "100%", lg: "100%" }}
//                     fontFamily={"Sora"}
//                     fontWeight={"500"}
//                     pl={{ base: "0px", md: "20px", lg: "20px" }}
//                   >
//                     Emertech Innovations
//                   </Text>
//                 </HStack>
//                 <Text
//                   color={useColorModeValue(colors.dark.text, colors.light.text)}
//                   fontFamily={"Sora"}
//                   fontSize={{ base: "14px", md: "15px", lg: "16px" }}
//                   mt={{ base: "10px", md: "0", lg: "0" }}
//                 >
//                   Jan 2024 - present
//                 </Text>
//               </Flex>
//               <Text
//                 color={useColorModeValue("#D4D4D8", colors.light.text)}
//                 px={{ base: "24px", md: "24px", lg: "24px" }}
//                 fontSize={{ base: "14px", md: "15px", lg: "16px" }}
//                 pb={"25px"}
//               >
//                 As a Senior Software Engineer at Google, I played a pivotal role
//                 in developing innovative solutions for Google's core search
//                 algorithms. Collaborating with a dynamic team of engineers, I
//                 contributed to the enhancement of search accuracy and
//                 efficiency, optimizing user experiences for millions of users
//                 worldwide.
//               </Text>
//             </Box>
//           </Box>
//         </Box>
//       </ScaleFade>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import {
  Box,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Flex,
  ScaleFade,
} from "@chakra-ui/react";

export const Experience = () => {
  const theme = useTheme();
  const { colors } = theme;

  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const componentTop = document
        .getElementById("experience-section")
        .getBoundingClientRect().top;
      const threshold = innerHeight * 0.9; // 50% of viewport height

      if (componentTop < threshold) {
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
            Experience
          </Text>
        </HStack>
        <ScaleFade in={showFade} transition={{ duration: 0.5 }}>
          <Box
            px={{ base: "5px", md: "100px", lg: "136px" }}
            id="experience-section"
          >
            <Box
              border={"1px solid #71717A"}
              width={"100%"}
              borderRadius={"7px"}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                // align="center"
                justify="space-between"
                p={{ base: "24px", md: "24px", lg: "24px" }}
                alignItems={{ base: "left", md: "left", lg: "center" }}
              >
                <HStack>
                  <Image
                    //   src="https://media.licdn.com/dms/image/C4D0BAQEAhzR6Ks2cuQ/company-logo_200_200/0/1662467192996/emertech_innovations_pvt_ltd_logo?e=2147483647&v=beta&t=s4r24ePoEKYhLsVOo91SD2l8FOtTV2hUIIM_GRz6gkI"
                    src="https://cdnv2.cutshort.io/company-static/5fcfa88e73308055eadfcb07/user_uploaded_data/logos/Emertech_Logo_icon_1RmqlFyA.png"
                    alt="Emertech Logo"
                    borderRadius={"7px"}
                    h={{ base: "24px", md: "26px", lg: "32px" }}
                    w={{ base: "24px", md: "26px", lg: "32px" }}
                  />
                  <Text
                    color={useColorModeValue(
                      colors.dark.text,
                      colors.light.text
                    )}
                    fontSize={{ base: "17px", md: "26px", lg: "24px" }}
                    w={{ base: "100%", md: "100%", lg: "100%" }}
                    fontFamily={"Sora"}
                    fontWeight={"500"}
                    pl={{ base: "0px", md: "20px", lg: "20px" }}
                  >
                    Emertech Innovations
                  </Text>
                </HStack>
                <Text
                  color={useColorModeValue(colors.dark.text, colors.light.text)}
                  fontFamily={"Sora"}
                  fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                  mt={{ base: "10px", md: "0", lg: "0" }}
                >
                  Jan 2024 - present
                </Text>
              </Flex>
              <Text
                color={useColorModeValue("#D4D4D8", colors.light.text)}
                px={{ base: "24px", md: "24px", lg: "24px" }}
                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                pb={"25px"}
              >
                As a Senior Software Engineer at Google, I played a pivotal role
                in developing innovative solutions for Google's core search
                algorithms. Collaborating with a dynamic team of engineers, I
                contributed to the enhancement of search accuracy and
                efficiency, optimizing user experiences for millions of users
                worldwide.
              </Text>
            </Box>
          </Box>
        </ScaleFade>
      </Box>
    </>
  );
};

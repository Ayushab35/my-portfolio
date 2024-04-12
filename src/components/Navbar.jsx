"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon , DownloadIcon } from "@chakra-ui/icons";
import ToggleColorMode from "./ToggleColorMode";
import { useTheme } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const LinkHeaders = [
    {
        linkheader: "Home",
        linkto: "/"
    }, 
    {
        linkheader: "About Me",
        linkto: "/about"
    }, 
    {
        linkheader: "Projects",
        linkto: "projects"
    },{
        linkheader: "Contact",
        linkto: "/contact"
    } ];


const NavLink = ({ linkto, linkheader }) => {
    const theme = useTheme();
    const { colors } = theme;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={linkto}
      color={useColorModeValue(colors.light.text, colors.dark.text)}
      fontWeight={"500"}
    >
      {linkheader}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("red.500", "red.200");
//   const color = useColorModeValue("white", "gray.800");
  const theme = useTheme();
  console.log(theme);
  const {colors} = theme;
  return (
    <>
      <Box pos={"absolute"} top={"10px"} right={"20px"}>
        <ToggleColorMode />
      </Box>
      <Box
        bg={useColorModeValue(colors.light.background, colors.dark.background)}
        px={4}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          margin={"auto"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={"center"} m={"auto"}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={"nav"}
              spacing={12}
              display={{ base: "none", md: "flex" }}
            >
              {LinkHeaders.map((link) => (
                <NavLink
                  key={link.linkto}
                  linkto={link.linkto}
                  linkheader={link.linkheader}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={16}
              rightIcon={<DownloadIcon />}
              bg={useColorModeValue(
                colors.dark.background,
                colors.light.background
              )}
              _hover={{
                
              }}
            >
              Resume
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinkHeaders.map((link) => (
                <NavLink
                  key={link.linkto}
                  linkto={link.linkto}
                  linkheader={link.linkheader}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

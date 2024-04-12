import React from 'react'
import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    );
}

export default ToggleColorMode
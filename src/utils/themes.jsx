// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    light: {
      primary: "#2C3E50", // Dark blue
      secondary: "#3498db", // Blue
      accent: "#27ae60", // Green
      background: "#f9f9f9", // Light grey
      text: "#333333", // Dark grey
    },
    dark: {
      primary: "#2C3E50", // Dark blue
      secondary: "#3498db", // Blue
      accent: "#27ae60", // Green
      background: '#1e272e', // Dark blue-grey
      text: "#f9f9f9", // Light grey
    },
  },
});

export default theme;

// import { mode } from '@chakra-ui/theme-tools';
// import { extendTheme } from '@chakra-ui/react';

// const styles = {
//   global: props => ({
//     body: {
//         // gray.800
//       color: mode('white.100', 'whiteAlpha.900')(props),
//       bg: mode('gray.100', '#141214')(props),
//     },
//   }),
// };

// const components = {
// //   Drawer: {
// //     // setup light/dark mode component defaults
// //     baseStyle: props => ({
// //       dialog: {
// //         bg: mode('white', '#141214')(props),
// //       },
// //     }),
// //   },
// };

// const theme = extendTheme({
//   components,
//   styles,
// });

// export default theme;
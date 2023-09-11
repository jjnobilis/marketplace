import {  extendTheme } from "@chakra-ui/react";
import { theme } from '@chakra-ui/pro-theme';
import {  } from '@chakra-ui/react';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/spline-sans';

// const config: ThemeConfig = {
//     initialColorMode: 'dark'
// };

const proTheme = extendTheme(theme)
const extendedConfig = {
  initialColorMode: 'dark',
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
}
const myTheme = extendTheme(extendedConfig, proTheme)

export default myTheme;
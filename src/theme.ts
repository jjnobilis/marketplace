import {  ThemeConfig, extendTheme } from "@chakra-ui/react";
import { theme } from '@chakra-ui/pro-theme';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/spline-sans';

const config: ThemeConfig = {
  initialColorMode: 'light', // 'dark' | 'light'
  useSystemColorMode: true,
}

const proTheme = extendTheme(theme)
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.cyan },
}
const myTheme = extendTheme(extenstion, proTheme, config)


export default myTheme;
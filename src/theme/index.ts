import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Rubik, ${base.fonts.heading}`,
    body: `Nunito, ${base.fonts.body}`,
  },
  components: {},
});

export default theme;

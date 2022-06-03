import {
  createTheme as createMaterialTheme,
  Theme,
} from '@material-ui/core/styles';
import { ThemeConfigs } from 'data/data.json';

export const createTheme = ({
  primary,
  secondary,
  background,
  textPrimary,
  textSecondary,
} : ThemeConfigs) : Theme => {
  let theme = createMaterialTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: background,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      allVariants: {
        lineHeight: 1.5,
        fontFamily: '"Montserrat", sans-serif',
        color: textPrimary,
        fontSize: 16,
      },
      h1: {
        fontSize: 48,
        fontWeight: 600,
        color: textPrimary,
      },
      h2: {
        fontWeight: 600,
        fontSize: 32,
        color: textPrimary,
      },
      h3: {
        fontWeight: 600,
        color: textPrimary,
        fontSize: 24,
        lineHeight: '32px',
      },
      h4: {
        fontWeight: 600,
        color: textPrimary,
      },
      button: {
        textTransform: 'none',
      },
    },
  });
  theme = {
    ...theme,
    overrides: {
      MuiTypography: {
        body1: {
          [theme.breakpoints.down('sm')]: {
            lineHeight: 1.33,
          },
        },
        h1: {
          [theme.breakpoints.down('sm')]: {
            fontSize: 32,
            lineHeight: 1.2,
          },
        },
        h3: {
          [theme.breakpoints.down('sm')]: {
            lineHeight: 1.2,
          },
        },
      },
    },
  };
  return theme;
};

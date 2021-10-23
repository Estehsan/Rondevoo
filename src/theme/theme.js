import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: '#8200E2',
    secondary: '#6A5AE0',
    main: '#34a5dd',
    accent: '#9087E5',
    bg: '#EFEEFC',
    silver: '#797979',
    black: '#020618',
    tred: '#f84563',
    twhite: '#f9f9fb',
    tgrey: '#C4C4C4',
    tbtn: '#f85c60',
    combination: '#f6f6f9',

    customShad2: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    customShad: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
  },
};

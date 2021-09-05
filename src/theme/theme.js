import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#578ddd',
    accent: '#d2eeff',
    bg: '#f7f7fa',
    combination: '#f6f6f9',
    silver: '#797979',
    black: '#020618',
    tred: '#f84563',
    twhite: '#f9f9fb',
    tgrey: '#C4C4C4',
    tbtn: '#f85c60',
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

import { breakpoints, mediaQueries } from './mediaQueries';

const themeStyles = {
  colors: {
    light: {
      background: '#FFF'
    },
    dark: {
      background: '#F2F8FB'
    },
    brandBlue: '#006AC3',
    brandNavy: '#172F6E',
    callToActionRed: '#CC3333',
    darkBlueGray: '#696C78',
    blueGray: '#9FA9B4'
  },
  text: {
    headline: {
      color: '#112353',
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 'normal',
      marginTop: 0,
      [mediaQueries(breakpoints.tablet)]: {
        fontSize: 36,
      },
      [mediaQueries(breakpoints.mobile)]: {
        fontSize: 32,
      }
    }
  },
};

export default themeStyles;

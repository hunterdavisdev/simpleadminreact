/** colors */
export const colors = {
  black: '#16171b',
  gray: '#202125',
  bg: '#f6f5fb',
  nav: '#ffffff',
  iconInactive: 'rgb(100, 100, 100)',
  iconActive: '#ffffff',
  primary: 'rgb(25, 236, 119)',
};

/** magic numbers */
export const constants = {
  leftColCount: 2,
  rightColCount: 14,
  topRowHeight: '15%',
  botRowHeight: '85%',
  contentBuffer: '1.5em',
  logoSize: '1.4em',
  logoSpacing: '0.3em',
};

/** styles */

export const styles = {
  logoStyle: {
    width: constants.logoSize,
    height: constants.logoSize,
    marginRight: constants.logoSpacing,
  },
  columnHeaderStyle: {
    display: 'flex',
    alignItems: 'center',
  },
  gridStyle: {
    margin: 0,
    height: '100vh',
  },
  rowStyle: {
    padding: 0,
    background: colors.bg,
  },
  colStyle: {},
};

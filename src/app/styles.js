/** colors */
export const colors = {
  dashboardBgColor: '#16171b',
  // navBgColor: '#4d20ff',
  navBgColor: '#202125',
  logoColor: '#6772e5',
};

/** magic numbers */
export const constants = {
  leftColCount: 4,
  rightColCount: 12,
  topRowHeight: '10%',
  botRowHeight: '90%',
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
    background: colors.dashboardBgColor,
  },
  colStyle: {},
};

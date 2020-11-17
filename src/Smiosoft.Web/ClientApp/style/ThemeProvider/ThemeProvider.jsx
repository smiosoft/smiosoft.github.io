import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { getThemeName } from '~redux/theme/theme-selectors';
import themes from './themes';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ThemeProvider = ({ children }) => {
  const name = useSelector(getThemeName);

  return (
    <StyledProvider theme={themes[name]}>
      {children}
    </StyledProvider>
  );
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;

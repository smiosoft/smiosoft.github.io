import { css } from 'styled-components';

export const breakpoints = {
  huge: 1440,
  large: 1170,
  medium: 768,
  small: 450,
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;

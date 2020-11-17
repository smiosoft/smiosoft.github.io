import { THEME_SET_DARK, THEME_SET_LIGHT } from './theme-types';

export const setDarkTheme = () => ({
  type: THEME_SET_DARK,
});

export const setLightTheme = () => ({
  type: THEME_SET_LIGHT,
});

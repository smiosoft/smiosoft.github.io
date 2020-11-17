import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Styles from './Page.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

const Page = ({ children, title }) => (
  <Styles.Wrapper>
    <Helmet title={title} />
    {children}
  </Styles.Wrapper>
);

Page.propTypes = propTypes;

export default Page;

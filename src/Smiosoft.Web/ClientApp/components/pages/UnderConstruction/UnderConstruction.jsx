import React from 'react';

import SmiosoftLogo from '~assets/svgs/smiosoft-logo.svg';
import Page from '~components/layout/Page';
import Styles from './UnderConstruction.styles';

const UnderConstruction = () => (
  <Page title="Under Construction">
    <Styles.Wrapper>
      <Styles.Logo>
        <img alt="smiosoft" src={SmiosoftLogo} width="80px" height="80px" draggable="false" />
      </Styles.Logo>
      <Styles.Status>UNDER CONSTRUCTION</Styles.Status>
    </Styles.Wrapper>
  </Page>
);

export default UnderConstruction;

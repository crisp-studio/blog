import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import signet from '../../../static/assets/better-in-between-signet.svg';

import config from '../../website-config';

const SubscribeOverlayLogo = styled.img`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

const SubscribeLogo = () => (
  <SubscribeOverlayLogo src={signet} alt={config.title} />
);

export default SubscribeLogo;

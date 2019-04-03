import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import config from '../../website-config';
import signet from '../../../static/assets/better-in-between-signet.svg';

const SiteNavLogoStyles = css`
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;

  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  // <StaticQuery
  //   query={graphql`
  //     query HeadingQuery {
  //       logo: file(relativePath: { eq: "better-in-between-logo.svg" }) {
  //         childImageSharp {
  //           fixed {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `}
  // tslint:disable-next-line:react-this-binding-issue
  <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
    <img src={signet} alt={config.title} />
  </Link>
  // />
);

export default SiteNavLogo;

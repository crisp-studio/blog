import { Link } from 'gatsby';
import { setLightness } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: #3b3b3b;
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}
        </section>
        <SiteFooterNav>
          <Link to="/">Latest Posts</Link>
          {/* {config.twitter && (
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )} */}
          <a
            href="https://crisp.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crisp Studio
          </a>
          <a
            href="https://crisp.studio/pdf/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://crisp.studio/pdf/disclaimer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>
          <a href="/rss.xml">RSS</a>
        </SiteFooterNav>
      </div>
    </footer>
  );
};

export default Footer;

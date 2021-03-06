import { string } from 'prop-types';

export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  instagram?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Better In Between',
  description:
    'Accelerating product teams at the intersection of design & code',
  coverImage: 'assets/blog-cover.jpg',
  logo: 'assets/bib-logo.svg',
  lang: 'en',
  siteUrl: 'https://blog.crisp.studio',
  instagram: 'https://www.instagram.com/crispstudio',
  showSubscribe: true,
  mailchimpAction:
    'https://studio.us7.list-manage.com/subscribe/post?u=af08cec2ad86461d791bcde65&amp;id=25c576fa1f',
  mailchimpName: 'EMAIL',
};

export default config;

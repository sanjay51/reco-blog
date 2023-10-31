// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RecoCards.com Blog',
  tagline: 'Create Group Greeting Cards, Free!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://recocards.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RecoCards.com', // Usually your GitHub org/user name.
  projectName: 'recocards-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sanjay51/reco-blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'RecoCards Logo',
          src: 'https://d3rs2nclqxzidb.cloudfront.net/other-images/logo3.png',
        },
        items: [
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://recocards.com',
            label: 'Back to RecoCards',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'RecoCards Home',
                to: 'https://recocards.com',
              },
              {
                label: 'Help',
                to: 'https://help.recocards.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/recocards/'
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/recocards/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/recocards/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sanjay51/recocards-help',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RecoCards.com. Contact: help@recocards.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

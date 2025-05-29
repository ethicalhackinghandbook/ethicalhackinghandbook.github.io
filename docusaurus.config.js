import {themes as prismThemes} from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = { 
  title: 'Ethical Hacking Handbook',
  tagline: 'Master the Art of Ethical Hacking - Learn | Hack | Secure',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: "/",
  organizationName: 'ethicalhackinghandbook', 
  projectName: 'ethical-hacking-handbook',
  deploymentBranch:"gh-pages",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn', 
  // change to throw to enable error on broken links
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Ethical Hacking Handbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Get Started',
          },  
             {to: '/blog', label: 'TryHackMe', position: 'left'},
          // { to: '#', label: 'HackTheBox', position: 'left' },
          //      {to: '#', label: 'Security Tools', position: 'left'},  
          //               { to: '#', label: 'Data Protection', position: 'left' },
        // { to: '#', label: 'Hacking News', position: 'left' },   
        //         {to: '#', label: 'Job Board', position: 'right'},
        // {to: '#', label: 'Digital Legal', position: 'right'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/01-introduction-to-ethical-hacking/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '#',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'X',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'TryHackMe',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cyberlabsghana.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

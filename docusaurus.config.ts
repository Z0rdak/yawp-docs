import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Yet Another World Protector (YAWP)',
  tagline: 'Mod Documentation / Wiki',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://z0rdak.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/yawp-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'z0rdak', // Usually your GitHub org/user name.
  projectName: 'yawp-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n'
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'C5A53EE783F88445',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Z0rdak/yawp-docs',
        },
        blog: {
          blogTitle: 'Changelog',
          blogDescription: 'YAWP version blog',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Changelog',
          routeBasePath: '/changelog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/Z0rdak/yawp-docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-text.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '0606CN2KHQ',
      // Public API key: it is safe to commit it
      apiKey: 'b160c84a72549ec89a61f6e2de231fc9',
      indexName: 'yawp-wiki-index',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: true
    },
    navbar: {
      title: 'YAWP Wiki',
      hideOnScroll: false,
      logo: {
        alt: 'YAWP Logo',
        src: 'img/logo-shield.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
        },
        {
          type: 'doc',
          docId: 'commands/overview',
          position: 'left',
          label: 'Commands',
        },
        {
          type: 'doc',
          docId: 'getting-started/faq',
          label: 'FAQs',
          position: 'left'
        },
        {
          to: '/changelog',
          label: 'Changelog',
          position: 'left'
        },
        {
          href: 'https://github.com/Z0rdak/Yet-Another-World-Protector',
          label: 'GitHub',
          position: 'right',
        },
        {
          href:  'https://discord.gg/d7hArKCUtm',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'FAQs',
              to: 'docs/getting-started/faq',
            },
          ],
        },
        {
          title: 'Get involved!',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/d7hArKCUtm',
            },
            {
              label: 'Issues',
              href: 'https://github.com/Z0rdak/Yet-Another-World-Protector/issues',
            },
          ],
        },
        {
          title: 'Get the mod!',
          items: [
            {
              label: 'Curseforge',
              href: 'https://www.curseforge.com/minecraft/mc-mods/yawp',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/mod/yawp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YAWP contributors`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

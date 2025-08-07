/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eShop',
  tagline: 'Your one-stop Flutter solution',
  url: 'https://your-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Options for the local search plugin
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'eShop Multi Vendor',
      items: [
        { to: '/docs/backend/installation', label: 'Documentation', position: 'left' },
        // { to: '/docs/flutter', label: 'Flutter App', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
  }),
};

export default config;

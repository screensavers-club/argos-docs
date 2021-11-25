/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "XIMI",
  tagline: "Realtime distributed performance gear",
  url: "https://argos.studio",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "screensavers-club", // Usually your GitHub org/user name.
  projectName: "argos-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "XIMI",
      items: [
        {
          type: "doc",
          docId: "user-manual/artists/switching-on",
          position: "left",
          label: "For Performers",
        },
        {
          type: "doc",
          docId: "user-manual/stage-managers/ximi-stage",
          position: "left",
          label: "For Stage Managers",
        },

        {
          href: "https://github.com/screensavers-club/argos-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Getting Started",
    //           to: "/docs/getting-started",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Github Repo",
    //           href: "https://github.com/screensavers-club/argos-docs",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Dev Log",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Argos`,
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/devlog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "Argos",
	tagline: "Realtime distributed performance gear",
	url: "https://argos.studio",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "screensavers-club", // Usually your GitHub org/user name.
	projectName: "argos", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Argos",
			// logo: {
			// 	alt: "My Site Logo",
			// 	src: "img/logo.svg",
			// },
			items: [
				{
					type: "doc",
					docId: "getting-started",
					position: "left",
					label: "Getting Started",
				},
				{ to: "/blog", label: "Dev Log", position: "left" },
				{
					href: "https://github.com/screensavers-club/argos-docs",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Getting Started",
							to: "/docs/getting-started",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Github Repo",
							href: "https://github.com/screensavers-club/argos-docs",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Dev Log",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/facebook/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Argos`,
		},
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

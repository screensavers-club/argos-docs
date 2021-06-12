import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "All Open Source",
		Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>Built on open source technologies, Argos itself is 100% open source.</>
		),
	},
	{
		title: "Integrated Software & Hardware",
		Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
		description: <>Full integrated approach allows a smoother experience.</>,
	},
	{
		title: "Powered by React",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "For Performers",
    Svg: require("../../static/img/docusaurus/undraw_docusaurus_mountain.svg")
      .default,
    description: (
      <>
        Learn how to use XIMI to see and hear your fellow performers in close to
        realtime.
      </>
    ),
    link: "/docs/user-manual/performers/overview",
    linkTitle: "Explore",
  },
  {
    title: "For Stage Managers",
    Svg: require("../../static/img/docusaurus/undraw_docusaurus_tree.svg")
      .default,
    description: (
      <>
        Effortlessly control who performers can see and hear at any point in the
        show.
      </>
    ),
    link: "/docs/user-manual/stage-managers/overview",
    linkTitle: "Explore",
  },
  {
    title: "Support Hotline",
    Svg: require("../../static/img/docusaurus/undraw_docusaurus_react.svg")
      .default,
    description: (
      <>
        Reach out to us over email at <a href="mailto:productions@practice.org.sg">productions@practice.org.sg</a>
      </>
    ),
  },
];

function Feature({ Svg, title, description, link, linkTitle }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>{linkTitle}</a>
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

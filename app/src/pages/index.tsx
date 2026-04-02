import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/pro-profile">
            View Professional Profile
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProfessionalPillars() {
  const pillars = [
    {
      title: 'Cloud Architecture',
      description: (
        <>
          Expertise in designing scalable and resilient systems on GCP, 
          leveraging GCE, GKE, and VPC networking for enterprise workloads.
        </<>
      ),
    },
    {
      title: 'Strategic TAM',
      description: (
        <>
          Providing executive advisory, driving root-cause analysis (RCA), 
          and managing complex cloud migrations for global organizations.
        </<>
      ),
    },
    {
      title: 'DevOps & Security',
      description: (
        <>
          Implementing robust CI/CD pipelines with Terraform and GitHub Actions, 
          and securing environments with Cloud Armor and IAM best practices.
        </<>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {pillars.map((props, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">{props.title}</Heading>
                <p>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="GCP Technical Portfolio - Strategic Technical Account Manager & Solutions Architect">
      <HomepageHeader />
      <main>
        <ProfessionalPillars />
      </main>
    </Layout>
  );
}

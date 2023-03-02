import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import MinecraftServerStatus from '@site/src/components/MinecraftServerStatus';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="help">
            和 <MinecraftServerStatus /> 名玩家一起游戏！
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`为了更美好的世界`}
      description="厕所总部是一个创立于2019年8月15日的 Minecraft 服务器，紧跟最新的 Minecraft 版本同时提供粘液科技和魔法的全新玩法。有许多来玩过的玩家最后选择留在厕所总部，组成一个和谐友爱的游戏社区。">
      <HomepageHeader />
      <main>
      {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

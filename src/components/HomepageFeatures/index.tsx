import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Region Visualization',
      img: require('@site/static/img/featured/visualization-small.png').default,
    description: (
      <>
          Visualize your region boundaries using server-side entities. Just be careful not to visualize too large regions for now.
      </>
    ),
  },
/*
    {
        title: 'Enter & Leave messages',
        img: require('@site/static/img/featured/cli-region-info-flags.png').default,
        description: (
            <>
                Now with region enter and leave messages! <br/> Soon customizable and extendable with actions!
            </>
        ),
    },
    */

  {
    title: 'Server side mod',
      img: require('@site/static/img/featured/logo-shield.png').default,
    description: (
      <>
        You only need to install YAWP on your server (or single player open to LAN). <br/> Players can connect with a modded or vanilla client!
      </>
    ),
  },

  {
    title: 'Interactive CLI',
    img: require('@site/static/img/featured/cli-impression.png').default,
    description: (
      <>
        Use the interactive CLI with links to execute or copy commands to make your life as region manager even easier.
      </>
    ),
  }
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="text--center">
            <img src={img} className={styles.featureImg} alt="" />
        </div>
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

import Creator from '@/components/creator/creator';
import homeStyles from '@/styles/module/home.module.scss';
import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './content.module.scss';

type BaseProps = {
  children?: ReactNode;
  className?: string;
};

type ItemProps = {
  featured?: boolean;
} & BaseProps;

const Root = ({ children, className }: BaseProps) => (
  <div className={`${styles.content} ${className ?? ''}`}>
    <div className={styles.innerContent}>
      {children}
    </div>
  </div>
);

const Header = ({ children, className }: BaseProps) => (
  <div className={`${styles.header} ${className ?? ''}`}>
    {children}
  </div>
);

const Items = ({ children, className }: BaseProps) => (
  <div className={`${styles.posts} ${className ?? ''}`}>
    {children}
  </div>
);

const Item = ({ children, className, featured }: ItemProps) => (
  <div className={`${styles.post} ${featured && styles.featured} ${className ?? ''}`}>
    <div className={styles.image} data-featured={featured}>
      <Image src={'/images/blog.png'} alt='' fill />
    </div>

    <span className={homeStyles.gradient}>Development</span>
    <h3 className={styles.title}>Build Subgraph with The Graph</h3>
    <Creator label='Yves Boutellier' />
  </div>
);

export { Root, Header, Items, Item };

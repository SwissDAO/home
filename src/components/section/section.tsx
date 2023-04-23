import { ReactNode } from 'react';
import styles from './section.module.scss';

type Props = {
  children: ReactNode;
  noPadding?: boolean;
};

const Section = ({ children, noPadding }: Props) => {
  return (
    <section className={styles.section} data-noPadding={noPadding}>
      {children}
    </section>
  );
}

export default Section;

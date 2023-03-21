import { ReactNode } from 'react';
import styles from './section.module.scss';

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return <section className={styles.section}>{children}</section>;
}

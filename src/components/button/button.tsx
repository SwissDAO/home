import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  href?: string;
  target?: string;
  onSubmit?: () => void;
};

export default function Button({ children, href, target, onSubmit }: Props) {
  return href ? (
    <Link href={href} target={target} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onSubmit={onSubmit}>
      {children}
    </button>
  );
}

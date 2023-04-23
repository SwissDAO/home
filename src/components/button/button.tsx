import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
};

const Button = ({ children, href, target, onClick }: Props) => {
  return href ? (
    <Link href={href} target={target} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

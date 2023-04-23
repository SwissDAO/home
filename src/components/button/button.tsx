import { ReactNode } from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  href?: string;
  target?: string;
  border?: boolean;
  onClick?: () => void;
};

const Button = ({ children, href, target, border, onClick }: Props) => {
  return href ? (
    <Link href={href} target={target} className={styles.button} data-border={border}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick} data-border={border}>
      {children}
    </button>
  );
}

export default Button;

import { ReactNode } from "react";
import styles from "./button.module.scss";
import Link from "next/link";

type Props = {
  children: ReactNode;
  href?: string;
  onSubmit?: () => void;
};

export default function Button({ children, href, onSubmit }: Props) {
  return href ? (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onSubmit={onSubmit}>
      {children}
    </button >
  );
};

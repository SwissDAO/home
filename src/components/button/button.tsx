import { ReactNode } from "react";
import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {

  return (
    <button className={styles.button}>
      {children}
    </button>
  )
};

import styles from './gradient-line.module.scss';

type Props = {
  horizontal?: boolean;
};

export default function GradientLine({ horizontal }: Props) {
  return (
    <div
      className={`${styles.container} ${horizontal ? styles.horizontal : ''}`}
    >
      <div className={styles.gradient} />
      <div className={styles.gradient} />
    </div>
  );
}

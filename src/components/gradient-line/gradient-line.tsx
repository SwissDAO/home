import styles from './gradient-line.module.scss';

type Props = {
  horizontal?: boolean;
};

const GradientLine = ({ horizontal }: Props) => {
  return (
    <div className={styles.container} data-horizontal={horizontal}>
      <div className={styles.gradient} data-horizontal={horizontal} />
      <div className={styles.gradient} data-horizontal={horizontal} />
    </div>
  );
}

export default GradientLine;

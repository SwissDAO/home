import Avatar from '../avatar/avatar';
import styles from './creator.module.scss';

type Props = {
  image?: any;
  label: string;
};

const Creator = ({ image, label }: Props) => {
  return (
    <div className={styles.creator}>
      <Avatar />
      <span>{label}</span>
      <span>✦</span>
      <span>February 04, 2023</span>
    </div>
  );
}

export default Creator;

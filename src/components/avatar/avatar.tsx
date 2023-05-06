import Image from 'next/image';
import styles from './avatar.module.scss';

type Props = {
  image?: any;
};

const Avatar = ({ image }: Props) => {
  return (
    <Image src={"/images/profile.jpg"} alt={""} height={30} width={30} className={styles.image} />
  );
}

export default Avatar;

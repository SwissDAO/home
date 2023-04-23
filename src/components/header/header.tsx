import Link from 'next/link';
import Logo from '../logo/logo';
import styles from './header.module.scss';
import Navbar from '../navbar/navbar';
import GradientLine from '../gradient-line/gradient-line';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo width={128} height={128} />
        </Link>

        <Navbar />
      </header>
      <GradientLine horizontal />
    </>
  );
};

export default Header;

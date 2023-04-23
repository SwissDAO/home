import Link from 'next/link';
import GradientLine from '../gradient-line/gradient-line';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import styles from './header.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo className={styles.logo} width={128} height={128} />
        </Link>

        <Navbar />
      </header>
      <GradientLine horizontal />
    </>
  );
};

export default Header;

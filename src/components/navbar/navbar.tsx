import Link from 'next/link';
import Logo from '../logo/logo';
import styles from './navbar.module.scss';
import GradientLine from '../gradient-line/gradient-line';

const Navbar = () => {
  const navItems = [
    {
      // label: isConnected ? 'Your Membership' : 'Membership',
      label: 'Membership',
      link: '/membership',
    },
    // {
    //   label: 'Events',
    //   link: '/events'
    // },
    // {
    //   label: 'Blog',
    //   link: '/blog',
    // },
    // {
    //   label: 'Podcast',
    //   link: '/podcast',
    // },
  ];

  const renderNavItem = (item: { label: string; link: string }, i: number) => (
    <Link key={i} href={item.link}>
      {item.label}
    </Link>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Logo width={128} height={128} />
        </Link>

        <div className={styles.items}>
          {navItems.map((item, i) => renderNavItem(item, i))}
        </div>

      </nav>
      <GradientLine horizontal />
    </>
  );
};

export default Navbar;

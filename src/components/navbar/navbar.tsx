import Link from 'next/link';
import styles from './navbar.module.scss';

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
    <nav className={styles.navbar}>
      {navItems.map((item, i) => renderNavItem(item, i))}
    </nav>
  );
};

export default Navbar;

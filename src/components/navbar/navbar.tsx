import ActiveLink from '../active-link/active-link';
import WalletButton from '../wallet-button/wallet-button';
import styles from './navbar.module.scss';

const Navbar = () => {
  const navItems = [
    {
      label: 'Membership',
      link: '/membership',
    },
    {
      label: 'Events',
      link: '/events'
    },
    {
      label: 'Blog',
      link: '/blog',
    },
    {
      label: 'Podcast',
      link: '/podcast',
    },
  ];

  const renderNavItem = (item: { label: string; link: string }, i: number) => (
    <ActiveLink key={i} href={item.link} className={styles.item}>
      {item.label}
    </ActiveLink>
  );

  return (
    <nav className={styles.navbar}>
      {navItems.map((item, i) => renderNavItem(item, i))}
      <WalletButton />
    </nav>
  );
};

export default Navbar;
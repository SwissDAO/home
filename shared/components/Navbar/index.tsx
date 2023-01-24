import { Navbar as NextUiNavbar } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from 'next/link';
import { useAccount } from 'wagmi';
import Logo from "../Logo";

const Navbar = () => {
  const { isConnected } = useAccount();

  const navItems = [
    // {
    //   label: 'About',
    //   link: '/about'
    // },
    {
      label: 'Blog',
      link: '/blog'
    },
    // {
    //   label: 'Events',
    //   link: '/events'
    // },
    {
      label: isConnected ? 'Your Membership' : 'Membership',
      link: '/membership'
    },
  ];

  const renderNavItem = (item: { label: string, link: string }, i: number) => (
    <Link key={i} href={item.link}>{item.label}</Link>
  )

  return (
    <NextUiNavbar isBordered variant={'static'}>
      <NextUiNavbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link href="/">
          <Logo width={128} height={128} />
        </Link>
      </NextUiNavbar.Brand>
      <NextUiNavbar.Content hideIn="xs">
        {navItems.map((item, i) => (
          renderNavItem(item, i)
        ))}

        {process.env.NODE_ENV === 'development' && (
          <NextUiNavbar.Item>
            <ConnectButton />
          </NextUiNavbar.Item>
        )}
      </NextUiNavbar.Content>
      <NextUiNavbar.Toggle aria-label="toggle navigation" showIn="xs" />
      <NextUiNavbar.Collapse>
        {navItems.map((item, i) => (
          <NextUiNavbar.CollapseItem key={i}>
            {renderNavItem(item, i)}
          </NextUiNavbar.CollapseItem>
        ))}

        {process.env.NODE_ENV === 'development' && (
          <NextUiNavbar.CollapseItem>
            <ConnectButton />
          </NextUiNavbar.CollapseItem>
        )}
      </NextUiNavbar.Collapse>
    </NextUiNavbar>
  );
};

export default Navbar;

import Header from '@/components/header/header';
import Seo from '@/components/seo/seo';
import { ReactNode } from 'react';
import Footer from '../components/footer/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

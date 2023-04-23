import Header from '@/components/header/header';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/footer/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  const title = 'swissDAO - The Swiss Web3 Builder Community.³';
  const description =
    'Our goal is to connect builders with projects and join forces to build the new internet.';
  const keywords =
    'swissDAO, swissdao, daosuisse, suissedao, web3, switzerland, builder, community, decentralized finance, blockchain,';
  const ogImage = 'https://swissdao.space/favicon.ico';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="twitter:title" content={title} />

        <meta name="robots" content="all" />

        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        {keywords && <meta name="keywords" content={keywords} />}

        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="copyright" content="swissDAO" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

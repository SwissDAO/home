import { Container } from '@nextui-org/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>swissDAO - The First DAO for Switzerland.³</title>
        <meta property="og:title" content="swissDAO" key="title" />
      </Head>
      <Navbar />
      <main>
        <Container css={{ height: '100vh' }} fluid >
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}

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

      <Container fluid >
        {children}
      </Container>
      <Footer />
    </>
  );
}

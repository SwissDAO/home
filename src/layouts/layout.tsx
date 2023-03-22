import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>swissDAO - The First DAO for Switzerland.³</title>
        <meta property="og:title" content="swissDAO" key="title" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

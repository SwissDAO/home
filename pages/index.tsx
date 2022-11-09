import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>🇨🇭swissDAO🏔️ - Membership Card</title>
        <meta name="description" content="swissDAO Membership Card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        🇨🇭swissDAO🏔️ Membership Card:
      </h1>
    </Container>
  )
}

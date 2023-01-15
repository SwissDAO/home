import { useAccount } from 'wagmi';
import Content from './components/Content';
import Main from './components/Main';

export default function Home() {
  const { isConnected } = useAccount();

  return isConnected ? <Content /> : <Main />;
}

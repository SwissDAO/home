import { ReactNode } from 'react';

const PreviewLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main style={{ position: 'relative', height: '100vh', width: '100vw' }}>{children}</main>
    </>
  );
}

export default PreviewLayout;
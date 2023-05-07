import * as Content from '@/components/content/content';
import Creator from '@/components/creator/creator';
import homeStyles from '@/styles/module/home.module.scss';

export default function Post() {

  return (
    <Content.Root>
      <Content.Header>
        <span className={homeStyles.gradient}>Development</span>
        <h1 className={homeStyles.gradient}>Build Subgraph with The Graph.</h1>
        <Creator label="Yves Boutellier" />
      </Content.Header>
    </Content.Root>
  );
};

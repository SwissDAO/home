import * as Content from '@/components/content/content';
import homeStyles from '@/styles/module/home.module.scss';

export default function Events() {

  return (
    <Content.Root>
      <Content.Header>
        <h1 className={homeStyles.gradient}>Events.³ &zwnj;</h1>
        <p>
          <span className={homeStyles.gradient}>³</span> Find Peers,
          network with people and learn stuff
        </p>
      </Content.Header>

      <Content.Item featured />

      <Content.Items>
        <Content.Item />
        <Content.Item />
        <Content.Item />
        <Content.Item />
      </Content.Items>
    </Content.Root>
  );
}

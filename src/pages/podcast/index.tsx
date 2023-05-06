import * as Content from '@/components/content/content';
import homeStyles from '@/styles/module/home.module.scss';

export default function Podcast() {

  return (
    <Content.Root>
      <Content.Header>
        <h1 className={homeStyles.gradient}>Podcast.³ &zwnj;</h1>
        <p>
          <span className={homeStyles.gradient}>³</span> Explore how
          to do stuff and glimpse behind the scenes
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

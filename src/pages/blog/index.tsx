import Creator from '@/components/creator/creator';
import styles from '@/styles/module/blog.module.scss';
import homeStyles from '@/styles/module/home.module.scss';
import Image from 'next/image';

export default function Blog() {

  const renderBlogItem = (featured?: boolean) => (
    <div className={styles.post}>
      <div className={styles.image} data-featured={featured}>
        <Image src={'/images/blog.png'} alt='' fill />
      </div>

      <span className={homeStyles.gradient}>Development</span>
      <h3 className={styles.title}>Build Subgraph with The Graph</h3>
      <Creator label='Yves Boutellier' />
    </div>
  );

  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <div className={styles.header}>
          <h1 className={homeStyles.gradient}>Blog.³ &zwnj;</h1>

          <p>
            <span className={homeStyles.gradient}>³</span> Explore how
            to do stuff and glimpse behind the scenes
          </p>
        </div>

        <div className={styles.featured}>
          {renderBlogItem(true)}
        </div>

        <div className={styles.posts}>
          {renderBlogItem()}
          {renderBlogItem()}
          {renderBlogItem()}
          {renderBlogItem()}
        </div>
      </div>
    </div>
  );
}

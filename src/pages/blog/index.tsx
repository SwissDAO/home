import Section from '@/components/section/section';
import homeStyles from '@/styles/module/home.module.scss';
import styles from '@/styles/module/blog.module.scss';

export default function Blog() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={homeStyles.gradient}>Blog.³ &zwnj;</h1>

        <p>
          <span className={homeStyles.gradient}>³</span> Explore how
          to do stuff and glimpse behind the scenes
        </p>
      </div>

      <div className={styles.featured}>

      </div>

      <div className={styles.posts}>

      </div>
    </div>
  );
}

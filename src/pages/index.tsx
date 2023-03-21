import GradientLine from '../components/gradient-line/gradient-line';
import Section from '../components/section/section';
import styles from '../styles/module/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Section>
        <h1>
          The Swiss Web3 Builder
        </h1>
        <h1 className={styles.gradient}>
          Community.³
        </h1>

        <p className="lead">
          <span className={styles.gradient}>³</span> Our goal is to connect builders with projects and join forces to build the new internet.
        </p>
      </Section>

      <Section>
        <GradientLine />
      </Section>
    </div>
  );
}

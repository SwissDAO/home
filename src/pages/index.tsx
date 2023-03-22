import GradientLine from '../components/gradient-line/gradient-line';
import Section from '../components/section/section';
import styles from '../styles/module/home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Section>
        <h1>The Swiss Web3 Builder</h1>
        <h1 className={styles.gradient}>Community.³</h1>

        <p className="lead">
          <span className={styles.gradient}>³</span> Our goal is to connect
          builders with projects and join forces to build the new internet.
        </p>
      </Section>

      <Section>
        <div className={styles.grid}>
          <div className={styles.gradientLine}>
            <GradientLine />
          </div>

          <Image
            className={styles.item}
            src="/images/illustration_find.svg"
            alt="Illustration Build"
            width={400}
            height={300}
          />
          <h2 className={styles.item}>
            <span className={styles.accent}>³ Find</span> peers to share your
            learning and building experience.
          </h2>

          <h2 className={styles.item}>
            <span className={styles.accent}>³ Learn</span> with our workshops to
            accelerate your web3 journey.
          </h2>
          <Image
            className={styles.item}
            src="/images/illustration_learn.svg"
            alt="Illustration Build"
            width={300}
            height={300}
          />

          <Image
            className={styles.item}
            src="/images/illustration_build.svg"
            alt="Illustration Build"
            width={300}
            height={300}
          />
          <h2 className={styles.item}>
            <span className={styles.accent}>³ Build</span> with us a DAO that is
            going to be the home of web3 builders.
          </h2>
        </div>
      </Section>

      <Section>
        <h2>
          <span className={styles.accent}>DAOtize</span> the world with us!
        </h2>

        <div className={styles.image}>
          <Image
            // className={styles.image}
            src="/images/mountain.svg"
            alt="Illustration Build"
            fill
          />
        </div>
      </Section>
    </>
  );
}

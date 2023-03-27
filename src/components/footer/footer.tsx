import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import GradientLine from '../gradient-line/gradient-line';
import Section from '../section/section';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <Section>
      <GradientLine horizontal />

      <div className={styles.grid}>
        <div className={styles.cta}>

        </div>

        <div className={styles.column}></div>
        <div className={styles.column}></div>
        <div className={styles.column}></div>
      </div>

      <GradientLine horizontal />

      <div>
        &copy; {new Date().getFullYear()} swissDAO. All rights reserved.

        <Link
          href="https://www.linkedin.com/company/swissdaospace/"
          target="_blank"
        >
          <FaLinkedin fontSize="1.25rem" />
        </Link>

        <Link href="https://github.com/SwissDAO" target="_blank">
          <FaGithub fontSize="1.25rem" />
        </Link>

        <Link href="https://twitter.com/swissDAOspace" target="_blank">
          <FaTwitter fontSize="1.25rem" />
        </Link>

        <Link
          href="https://discord.com/invite/5kvQ3Q6G4x"
          target="_blank"
        >
          <FaDiscord fontSize="1.25rem" />
        </Link>
      </div>
    </Section>
  );
};

export default Footer;

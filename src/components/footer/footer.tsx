import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import GradientLine from '../gradient-line/gradient-line';
import Logo from '../logo/logo';
import Section from '../section/section';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.gradientLine}>
          <GradientLine horizontal />
        </div>

        <div className={styles.cta}>
          <Logo width={100} height={50} />

          <p><span className={styles.accent}>Experience</span> the next generation of the internet.</p>
        </div>

        <div className={styles.column}>
          <h4>Community</h4>
          <p>Blog</p>
          <p>Membership</p>
          <p>Meetups</p>
          <p>Contact</p>
        </div>

        <div className={styles.column}>
          <h4>Labs</h4>
          <p>About us</p>
          <p>Projects</p>
          <p>Vision</p>
        </div>

        <div className={styles.column}>
          <h4>Resources</h4>
          <p>Docs</p>
          <p>Changelog</p>
          <p>Brand</p>
          <p>Terms of Service</p>
        </div>

        <div className={styles.gradientLine}>
          <GradientLine horizontal />
        </div>
      </div>

      <div className={styles.subfooter}>
        &copy; {new Date().getFullYear()} swissDAO. All rights reserved.

        <div className={styles.socials}>
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
      </div>
    </>
  );
};

export default Footer;

import styles from '../styles/module/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        The First DAO <br />
        for
      </h1>
      <h1 className={styles.gradient}>
        Switzerland.³
      </h1>

      <h3>
        ³ web3 spaces w/ Meetups, Workshops and Hackerhouses in real life
      </h3>
      <h3>³ Community spirit: Connect, Learn and Build</h3>
      <h3>³ Just do Web3: Take Ownership. LFG 🚀</h3>

      <h5>
        Grab a ☕️ and read our{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/100hBiuGn7VzweSgTpl_SsJA6UjHcsh81tqXx0b2DyBk/edit#heading=h.aasa0wyt1wn"
        >
          📖
        </a>
        .
      </h5>
    </div>
  );
}

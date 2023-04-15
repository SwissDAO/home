import Link from 'next/link';
import Section from '../components/section/section';
import styles from '../styles/module/about.module.scss';
import Image from 'next/image';

type MemberType = {
  name: string;
  link: string;
  image: string;
};

export async function getStaticProps() {
  return {
    props: {
      staticContent: {
        members: [
          {
            name: 'Amin',
            link: 'https://yololab.ai/profile-card-Amin-Bundhoo/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Christoph',
            link: 'https://yololab.ai/profile-card-Christoph-Ricklin/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Colin',
            link: 'https://yololab.ai/profile-card-Colin-Rix/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Federico',
            link: 'https://yololab.ai/profile-card-Federico-Scarionati/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Jan',
            link: 'https://yololab.ai/profile-card-Jan-Zeman/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Lukas',
            link: 'https://yololab.ai/profile-card-Lukas-Meyer/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Olivier',
            link: 'https://yololab.ai/profile-card-Olivier-Winkler/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Tom',
            link: 'https://yololab.ai/profile-card-Tom-Libert/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Yves',
            link: 'https://yololab.ai/profile-card-Yves-Boutellier/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
          {
            name: 'Zaniyar',
            link: 'https://yololab.ai/profile-card-Zaniyar-Jahany/',
            image: 'https://yololab.ai/profile-card-Amin-Bundhoo/Amin.jfif',
          },
        ] as MemberType[],
      },
    },
  };
}

export default function About({
  staticContent,
}: {
  staticContent: { members: MemberType[] };
}) {
  return (
    <>
      <Section>
        <h1 className={styles.title}>About us</h1>

        <div className={styles.container}>
          {staticContent.members.map((member, i) => (
            <div className={styles.card} key={i}>
              <p>{member.name}</p>

              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
              />

              <Link href={member.link} className={styles.link} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

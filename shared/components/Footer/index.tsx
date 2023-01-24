import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { Container, Grid, Link, Text } from "@nextui-org/react";
import LogoMinimal from "../LogoMinimal";

const Footer = () => {
  return (
    <footer>
      <hr />
      <Container css={{ p: '$lg' }}>
        <Grid.Container
          gap={2}
          justify="center"
          direction='column'
          css={{
            '@xs': {
              flexDirection: 'row',
            },
          }}
        >
          <Grid xs={3}>
            <ul style={{ margin: 0 }}>
              <li>
                <LogoMinimal height={32} width={32} />
              </li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <ul style={{ margin: 0 }}>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Membership</li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <ul style={{ margin: 0 }}>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Grid>
          <Grid xs={3} />
          <Grid xs={12} justify="space-between">
            <Text size="$lg">
              &copy; {new Date().getFullYear()} swiss DAO. All rights reserved.
            </Text>

            <div style={{ display: 'flex', gap: '1em' }}>
              <Link href="https://www.linkedin.com/company/swissdaospace/" target="_blank">
                <FaLinkedin fontSize="1.25rem" />
              </Link>

              <Link href="https://github.com/SwissDAO" target="_blank">
                <FaGithub fontSize="1.25rem" />
              </Link>

              <Link href="https://twitter.com/swissDAOspace" target="_blank">
                <FaTwitter fontSize="1.25rem" />
              </Link>

              <Link href="https://discord.com/invite/5kvQ3Q6G4x" target="_blank">
                <FaDiscord fontSize="1.25rem" />
              </Link>
            </div>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  )
}

export default Footer;

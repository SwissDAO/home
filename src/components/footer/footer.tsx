import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { Container, Grid, Link, Text } from '@nextui-org/react';
import LogoMinimal from '../logo-minimal/logo-minimal';

const Footer = () => {
  return (
    <footer>
      <hr />
      <Container
        css={{
          '@md': {
            padding: '$lg $4xl',
          },
        }}
      >
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            justify="space-between"
            css={{
              flexDirection: 'column',

              '@xs': {
                flexDirection: 'row',
              },
            }}
          >
            <div>
              <LogoMinimal height={32} width={32} />
              <Text css={{ paddingTop: '$5' }}>
                The First DAO for Switzerland
              </Text>
            </div>

            <Grid
              xs={3}
              css={{
                '@xs': {
                  justifyContent: 'flex-end',
                },
              }}
            >
              <ul style={{ margin: 0 }}>
                <li>
                  <Text color="secondary">DAO</Text>
                </li>
                <li>
                  <Link href="" underline>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" underline>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/membership" underline>
                    Membership
                  </Link>
                </li>
              </ul>
            </Grid>

            <Grid
              xs={3}
              css={{
                '@xs': {
                  justifyContent: 'flex-end',
                },
              }}
            >
              <ul style={{ margin: 0 }}>
                <li>
                  <Text color="secondary">Resources</Text>
                </li>
                <li>
                  <Link
                    href="https://www.notion.so/swissdao"
                    isExternal
                    underline
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link underline>Support</Link>
                </li>
              </ul>
            </Grid>

            <Grid
              xs={3}
              css={{
                '@xs': {
                  justifyContent: 'flex-end',
                },
              }}
            >
              <ul style={{ margin: 0 }}>
                <li>
                  <Text color="secondary">Legal</Text>
                </li>
                <li>
                  <Link href="" underline>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link underline>Terms of Use</Link>
                </li>
              </ul>
            </Grid>
          </Grid>

          <Grid xs={12} justify="space-between">
            <Text size="$lg">
              &copy; {new Date().getFullYear()} swiss DAO. All rights reserved.
            </Text>

            <div style={{ display: 'flex', gap: '1em' }}>
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
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  );
};

export default Footer;

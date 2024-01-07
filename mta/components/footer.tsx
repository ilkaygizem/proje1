import React from "react";
import {
  createStyles,
  Container,
  Grid,
  Text,
  Divider,
  Group,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import SocialMediaLogos from "../components/socialMediaLogos";

export default function Footer() {
  const { classes } = useStyles();
  return (
    <Container size="xl" my={80}>
      <Grid>
        <Grid.Col md={6} lg={3}>
          <Link href="/" passHref>
            <a className={classes.logo}>
              <Image
                alt="Logo"
                src="/assets/mta-logo.svg"
                width="238px"
                height="62px"
              />
            </a>
          </Link>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Text color="#485B76" size="sm">
            Sosyal Medya Adreslerimiz
          </Text>
          <SocialMediaLogos />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Text color="#485B76" size="sm">
            iletisim@milliteknolojiakademisi.gov.tr
          </Text>
          <Text color="#485B76" size="sm" mt="md">
            444 6 100
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Text color="#485B76" size="sm">
            Mustafa Kemal Mahallesi
            <br />
            Dumlupınar Bulvarı 2151. Cadde No:154/A <br /> 06530 Çankaya/ANKARA
          </Text>
        </Grid.Col>
      </Grid>

      <Divider my={50} />

      <Grid align="center">
        <Grid.Col md={6} lg={6}>
          <Text color="#95A1B1" size="sm">
            Tüm hakları saklıdır. © 2023 Sanayi ve Teknoloji Bakanlığı - Milli
            Teknoloji Akademisi®
          </Text>
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Group align="center" position="right">
            <Link href="/" passHref>
              <a className={classes.logo}>
                <Image
                  alt="Logo"
                  src="/assets/mth-logo.png"
                  width="76px"
                  height="53px"
                />
              </a>
            </Link>

            <Link href="https://sanayi.gov.tr" passHref target="_blank" rel="noreferrer">
            <a className={classes.logo} href="https://sanayi.gov.tr" target="_blank" rel="noreferrer">
                <Image
                  alt="Logo"
                  src="/assets/stb-logo.svg"
                  width="62px"
                  height="62px"
                />
              </a>
            </Link>
            <Text color="#95A1B1" size="sm">
              Sanayi ve Teknoloji Bakanlığı
              <br /> Milli Teknoloji Akademisi
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  logo: {
    textDecoration: "none",
    lineHeight: 0,
  },
}));

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Box,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = 150;
const Links = [
  {
    link: "/sektor-kampuste-programi",
    label: "SEKTÖR KAMPÜSTE PROGRAMI",
  },
  {
    link: "/nasil-paydas-olunur",
    label: "NASIL PAYDAŞ OLUNUR?",
  },
];

export default function HeaderResponsive() {
  const [opened, toggleOpened] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = Links.map((link) => (
    <Link href={link.link} passHref key={link.label}>
      <a
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: router.asPath === link.link,
        })}
        onClick={() => {
          toggleOpened.close();
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} id="top">
      <Container size="xl" className={classes.container}>
        <Group spacing={33}>
          <Link href="/" passHref>
            <a
              className={classes.logo}
              onClick={() => {
                toggleOpened.close();
              }}
            >
              <Image
                alt="Logo"
                src="/assets/mta-logo.svg"
                width="238px"
                height="62px"
              />
            </a>
          </Link>
          <Box className={classes.vLine} />
          <Group spacing={35} className={classes.links}>
            {items}
          </Group>
        </Group>

        <Group align="center">
          <Button component="a" href="https://uep.milliteknolojiakademisi.gov.tr/giris" target="_blank" rel="noreferrer" className={classes.login}>GİRİŞ YAPIN</Button>
          <a className={classes.stbLogo} href="https://sanayi.gov.tr" target="_blank" rel="noreferrer">
            <Image
              alt="Logo"
              src="/assets/stb-logo.svg"
              width="62px"
              height="62px"
            />
          </a>

          <Burger
            opened={opened}
            onClick={() => toggleOpened.toggle()}
            className={classes.burger}
            size="md"
          />
        </Group>

        <Transition transition="scale-y" duration={350} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    border: 0,
    backgroundColor: "transparent",
    [theme.fn.smallerThan("sm")]: {
      height: 90,
    },
  },

  vLine: {
    width: 1,
    height: 40,
    backgroundColor: "#d6d6d6",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  login: {
    fontSize: 14,
    letterSpacing: "0.1em",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  dropdown: {
    position: "absolute",
    top: 90,
    left: 0,
    right: 0,
    zIndex: 1,
    height: "90vh",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.white,
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      paddingBottom: 90,
    },
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  logo: {
    textDecoration: "none",
    lineHeight: 0,
  },

  stbLogo: {
    textDecoration: "none",
    lineHeight: 0,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    fontSize: theme.fontSizes.xs,
    position: "relative",
    lineHeight: 1,
    textDecoration: "none",
    fontWeight: 500,
    letterSpacing: "0.1em",
    color: "black",
    "&::after": {
      display: "block",
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "-0.1em",
      margin: "0 auto -2px",
      height: 1,
      width: "0%",
      background: "black",
      transition: "all 0.5s",
    },
    "&:hover::after": {
      width: "100%",
    },

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.md,
      marginBottom: 25,
      textAlign: "center",
      fontSize: theme.fontSizes.xl,
      "&::after": {
        display: "none",
      },
    },
  },

  linkActive: {
    "&::after": {
      color: "black",
      width: "100%",
    },
  },
}));

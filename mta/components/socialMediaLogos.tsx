import React from "react";
import { createStyles } from "@mantine/core";

import {
  Twitter,
  Instagram,
  Youtube,
  Facebook,

} from "../public/assets/icons/socialMedia";

export default function SocialMediaLogos() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
       <a
        href="https://twitter.com/TCSanayi"
        target="_blank"
        rel="noreferrer"
        className={classes.iconBox}
      >
        <Twitter />
      </a>
      <a
        href="https://www.instagram.com/tcsanayi/"
        target="_blank"
        rel="noreferrer"
        className={classes.iconBox}
      >
        <Instagram />
      </a>
      <a
        href="https://www.youtube.com/channel/UChI_JJN9aD-YKegn4q7EHHQ"
        target="_blank"
        rel="noreferrer"
        className={classes.iconBox}
      >
        <Youtube />
      </a>
      <a
        href="https://www.facebook.com/TCSanayi/"
        target="_blank"
        rel="noreferrer"
        className={classes.iconBox}
      >
        <Facebook />
      </a>
     
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
    color: theme.colors.gray[8],
  },

  iconBox: {
    transition: "0.3s ease",
    "& svg": {
      width: 22,
      color: theme.colors.gray[7],
      transition: "0.3s ease",
    },
    "&:hover svg": {
      color: theme.colors.gray[7],
    },
  },
}));

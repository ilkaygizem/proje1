import React from "react";
import { Title, createStyles } from "@mantine/core";

export default function PageTitle(props: {
  children: any;
  left?: boolean;
  light?: boolean;
  className?: any;
}) {
  const { classes } = useStyles();

  return (
    <div className={classes.div}>
      <Title
        align={props.left ? "left" : "center"}
        sx={{ fontWeight: props.light ? 400 : 600 }}
        className={props.className? props.className : classes.title}
      >
        {props.children}
      </Title>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  div: {
    overflow: "hidden",
    marginBottom: 40,
    marginTop: 40,
    [theme.fn.smallerThan("sm")]: {
      marginBottom: 10,
      marginTop: 10,
    },
  },
  title:{
    color: theme.black,
  }
}));

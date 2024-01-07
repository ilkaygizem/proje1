import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import Link from "next/link";

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.heroClass}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        radius={30}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Geleceğe Hazırlan!</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Bugünün ve geleceğin becerilerini kazandıran yeni nesil dijital okul.
          Sektörlerin tecrübesi ışığında tasarlanan programlar ile geleceğe
          hazırlan!
        </Text>
        <Link passHref href="/sektor-kampuste-programi">
          <Button
            size="xl"
            className={classes.control}
            component="a"
            href="/sektor-kampuste-programi"
          >
            PROGRAMI İNCELE
          </Button>
        </Link>
      </Container>
    </div>
  );
}
const useStyles = createStyles((theme) => ({
  heroClass: {
    position: "relative",
    backgroundImage: "url(/assets/main.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 30,
    overflow: "hidden",
    transition: "transform 250ms ease, box-shadow 200ms ease",
    "&:hover": {
      boxShadow: theme.shadows.xl,
      transform: "scale(1.02)",
    },
    [theme.fn.smallerThan("sm")]: {
      marginTop: 20,
    },
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      alignItems: "center",
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
      textAlign: "center",
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 500,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,
    fontSize: 14,
    letterSpacing: "0.1em",
  },
}));

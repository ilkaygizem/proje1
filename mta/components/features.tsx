import {
  createStyles,
  Title,
  Text,
  Container,
  Card,
  Grid,
} from "@mantine/core";
import Image from "next/image";

import { Dots } from "../public/assets/icons/dots";

export function Features() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Akademinin Sunduğu{" "}
          <Text component="span" className={classes.highlight} inherit>
            Fırsatlar
          </Text>
        </Title>

        <Grid mt={50}>
          <Grid.Col md={6} lg={3}>
            <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Image
                alt="Paydaşlar"
                src="/assets/icons/circle-dot.svg"
                width="62px"
                height="62px"
              />
              <Text
                size="lg"
                weight={500}
                className={classes.cardTitle}
                mt="md"
              >
                Büyüyen<br/> Paydaş Ağı
              </Text>
              <Text size="sm" color="dimmed" mt="sm">
              Ülkemizin önde gelen kurumlarının paydaşlığıyla yürütülen programlar ve imkanlar.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Image
                alt="Gelişim"
                src="/assets/icons/like-shapes.svg"
                width="62px"
                height="62px"
              />
              <Text
                size="lg"
                weight={500}
                className={classes.cardTitle}
                mt="md"
              >
                Öğrenme ve Gelişim Programları
              </Text>
              <Text size="sm" color="dimmed" mt="sm">
              Değerli teknolojileri üretecek gençlerin yetkinlik gereksinimlerini dikkate alan yenilikçi bir anlayış.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Image
                alt="Deney"
                src="/assets/icons/glass.svg"
                width="62px"
                height="62px"
              />
              <Text
                size="lg"
                weight={500}
                className={classes.cardTitle}
                mt="md"
              >
                Deneyimsel Öğrenme Olanakları
              </Text>
              <Text size="sm" color="dimmed" mt="sm">
              Türkiye’nin önde gelen kurumlarında staj ve mentorlük gibi deneyimsel öğrenme fırsatları.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <Card shadow="md" radius="md" className={classes.card} p="xl">
            <Image
                alt="Kariyer"
                src="/assets/icons/people.svg"
                width="62px"
                height="62px"
              />
              <Text
                size="lg"
                weight={500}
                className={classes.cardTitle}
                mt="md"
              >
                Kariyer<br/> Fırsatları
              </Text>
              <Text size="sm" color="dimmed" mt="sm">
              Program paydaşı kurumların sunduğu kariyer olanaklarına ulaşma fırsatı.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color: theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.black,
    marginBottom: theme.spacing.xs,
    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  card: {
    border: `1px solid ${theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

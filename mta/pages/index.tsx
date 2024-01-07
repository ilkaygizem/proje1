import { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  createStyles,
  Container,
  SimpleGrid,
  Title,
  Text,
  Button,
  Center,
  Divider,
  LoadingOverlay,
} from "@mantine/core";
import Link from "next/link";

import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { LessonGrid } from "../components/lessonGrid";
import { LogoGrid } from "../components/logoGrid";
import { ContentArea } from "../components/contentArea";
import { customLoader } from "../public/assets/icons/customLoader";

import { Lessons } from "../data/lesson";
import { Logos, UniLogos } from "../data/logo";

const Home: NextPage = () => {
  const { classes } = useStyles();
  
  // ön yükleyici logo
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 500);
  });

  const orderedLessons = [...Lessons];
  const orderedLogos = [...Logos];
  const orderedUniLogos = [...UniLogos];
  orderedLogos.sort((a, b) => (a.brandTitle.localeCompare(b.brandTitle, 'tr', { sensitivity: 'base' })))
  orderedUniLogos.sort((a, b) => (a.brandTitle.localeCompare(b.brandTitle, 'tr', { sensitivity: 'base' })))
  orderedLessons.sort((a, b) => (a.brandTitle.localeCompare(b.brandTitle, 'tr', { sensitivity: 'base' })))

  return (
    <>
      <LoadingOverlay
        loader={customLoader}
        visible={!loading}
        transitionDuration={500}
        overlayColor="#000"
        overlayBlur={4}
      />
      <Container size="xl">
        <Hero />
        <Title mt={80} className={classes.title}>
          Sektör Kampüste Programı
        </Title>
        <Container p={0} size={600}>
          <Text size="lg" mb={50} color="dimmed" className={classes.desc}>
            Nitelikli iş gücünün yetişmesi ve dönüşmesi için ihtiyaç duyulan
            program, eğitim ve araçlar Ülkemizin güçlü firmalarının tecrübesini
            merkeze alan bir yaklaşımla tasarlanıyor.
          </Text>
        </Container>
        <SimpleGrid
          my="xl"
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {orderedLessons.filter(
            (el, i) =>
              el.id === 13 ||
              el.id === 14 ||
              el.id === 5 ||
              el.id === 2 ||
              el.id === 19 ||
              el.id === 28
          ).map((item, index) => (
              <LessonGrid
                key={index}
                title={item.lessonTitle}
                brand={item.brandTitle}
                description={item.desc}
                image={item.image}
                height={item.height}
                width={item.width}
              />
            ))}
        </SimpleGrid>

        <Center>
          <Link passHref href="/sektor-kampuste-programi">
            <Button
              size="xl"
              className={classes.control}
              component="a"
              href="/sektor-kampuste-programi"
            >
              TÜMÜNÜ GÖRÜNTÜLE
            </Button>
          </Link>
        </Center>
        <Features />
      </Container>
      <ContentArea />
      <Container size="xl">
        <Title className={classes.title} mt={80}>
          Milli Teknoloji Hamlesinin güçlü <br />
          yarınları için bir araya gelen paydaşlarımız
        </Title>
        <Container p={0} size={800}>
          <Text size="lg" mb={50} color="dimmed" className={classes.desc}>
            Milli Teknoloji Hamlesi Hedeflerine Yön Veren Ülkemizin En Prestijli
            Kurumları, Milli Teknoloji Hamlesine yön verecek gençler için güç
            birliği yaptı
          </Text>
        </Container>

        <Divider
          mt={80}
          variant="dashed"
          label="Firma Paydaşlarımız (A-Z)"
          labelPosition="center"
        />

        <SimpleGrid
          my="xl"
          cols={6}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 4, spacing: "md" },
            { maxWidth: 755, cols: 3, spacing: "sm" },
            { maxWidth: 600, cols: 2, spacing: "sm" },
          ]}
        >
          {orderedLogos.map(
            (item, index) => (
              <LogoGrid
                key={index}
                image={item.image}
                brand={item.brandTitle}
                height={item.height}
                width={item.width}
              />
            )
          )}
        </SimpleGrid>
        <Divider
          mt={80}
          variant="dashed"
          label="Üniversite Paydaşlarımız  (A-Z)"
          labelPosition="center"
        />
        <SimpleGrid
          my="xl"
          cols={6}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 4, spacing: "md" },
            { maxWidth: 755, cols: 3, spacing: "sm" },
            { maxWidth: 600, cols: 2, spacing: "sm" },
          ]}
        >
          {orderedUniLogos.map(
            (item, index) => (
              <LogoGrid
                key={index}
                brand={item.brandTitle}
                image={item.image}
                height={item.height}
                width={item.width}
              />
            )
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.black,
    marginTop: 50,
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },
  desc: {
    textAlign: "center",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
    },
  },
  control: {
    marginTop: theme.spacing.xl * 1.5,
    fontSize: 14,
    letterSpacing: "0.1em",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

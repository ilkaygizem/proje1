import React from "react";
import type { NextPage } from "next";
import {
  createStyles,
  Title,
  Text,
  Container,
  SimpleGrid,
  Grid,
  Image,
} from "@mantine/core";
import Head from "next/head";
// import ReactPlayer from "react-player";

import { Dots } from "../public/assets/icons/dots";
import { Lessons } from "../data/lesson";
import { LessonGrid } from "../components/lessonGrid";

const orderedLessons = [...Lessons];
orderedLessons.sort((a, b) =>
  a.brandTitle.localeCompare(b.brandTitle, "tr", { sensitivity: "base" })
);

const SektorKampuste: NextPage = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Head>
        <title>
          Sektör Kampüste Programı - Milli Teknoloji Akademisi - MTA
        </title>
      </Head>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Sektör Kampüste{" "}
            <Text component="span" className={classes.highlight} inherit>
              Programı
            </Text>
          </Title>

          <Container p={0} size={800}>
            <Text
              size="lg"
              color="dimmed"
              mb={50}
              className={classes.description}
            >
              Sektör çalışanları ile üniversite öğrencilerini bir araya
              getirerek, öğrencilerin en güncel bilgileri sektör
              profesyonellerinden öğrendiği, üniversite-sanayi işbirliğini
              verimli ve etkili bir noktaya taşımayı hedefleyen programdır.
            </Text>
          </Container>

          <Grid align="center" justify="space-between" my={40}>
            <Grid.Col sm={12} md={6} lg={6} orderSm={3} order={3} orderLg={1}>
              <Text my={35} className={classes.text}>
                Sektör Kampüste Programı, çalışma alanları doğrultusunda güncel
                bilgilerle donatılmış insan kaynağı yetiştirmek için firmalar
                tarafından üniversitelerde MTH koduyla kredili olarak açılan
                uzaktan senkron dersleri kapsamaktadır. Gelişen teknolojilere
                yönelik ihtiyaç duyulan yetkinlikleri uygulamalı çalışmalarla
                geliştirmek için iş dünyası ile iç içe bir eğitim modeli
                geliştirilmesi ve iş dünyasının üniversite içine dahil
                edilmesiyle firma ve üniversitelerin karşılıklı olarak
                gelişimlerine katkıda bulunulması hedeflenmektedir.
                <br />
                <br />
                Milli Teknoloji Akademisi çatısı altında yürütülecek,
                erişilebilirliği ve fırsat eşitliğini temel alan program ile tüm
                üniversite öğrencilerine Ülkemizin öncü firmalarına ulaşabilme
                ve firma profesyonellerinden ders alabilme imkanı sunulmaktadır.
              </Text>
            </Grid.Col>
            <Grid.Col
              sm={12}
              md={1}
              lg={1}
              orderSm={2}
              order={1}
              orderLg={2}
            ></Grid.Col>

            <Grid.Col sm={12} md={5} lg={5} orderSm={1} order={1} orderLg={3}>

              {/* <div className={classes.video}>
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  light="/assets/video.jpg"
                  playsInline
                  url="https://vpmedya.milliteknolojiakademisi.gov.tr/egitimvime/_definist_/mp4:199/orj_p1gto3og7a16ia1hblang1ivr16s34.mp4/playlist.m3u8">
                </ReactPlayer>
              </div> */}

               <div className={classes.image}>
                <Image alt="photo-1" src="/assets/mta-02.jpg" />
              </div>
            </Grid.Col>
          </Grid>

          <Grid align="center" justify="space-between" my={40}>
            <Grid.Col sm={12} md={5} lg={5}>
              <div className={classes.image}>
                <Image alt="photo-2" src="/assets/mta-03.jpg" />
              </div>
            </Grid.Col>
            <Grid.Col sm={12} md={1} lg={1}></Grid.Col>
            <Grid.Col sm={12} md={6} lg={6}>
              <Text my={35} className={classes.text}>
                Katma değeri yüksek, sürdürülebilir ve tüm paydaşlar için
                kazan-kazan felsefesine dayanan Sektör Kampüste Programı ile
                öğrenciler henüz üniversitedeyken, sektörden yetkin kişilerle
                bir araya gelerek iş dünyasında hızla gelişen, değişen bilgilere
                vaktinde uyum sağlayarak ulaşabilmekte ve aldıkları dersler ile
                iş hayatına hazırlanabilmektedirler.
                <br />
                <br />
                Program sayesinde öncü firmalarla birebir iletişimde olan
                öğrenciler için staj ve kariyer olanaklarına ulaşım kolaylığı
                sağlanarak istihdam için önemli bir fırsat oluşturulurken,
                firmalar için de ihtiyaç duyduğu nitelikli insan kaynağını
                doğrudan yetiştirebilmesi ve istihdam edebilmesi için bir yol
                sunulmaktadır.
              </Text>
            </Grid.Col>
          </Grid>

          <Container p={0} size={800} my={80}>
            <Title className={classes.title}>Ders İçerikleri</Title>
            <Text
              size="lg"
              color="dimmed"
              mb={50}
              className={classes.description}
            >
              Ders içeriklerine tıklayarak ders hakkında detaylı bilgi
              edinebilirsiniz.
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
            {orderedLessons.map((item, index) => (
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
        </div>
      </Container>
    </>
  );
};

export default SektorKampuste;

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 80,
    paddingBottom: 80,
    zIndex: 0,
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
    marginBottom: theme.spacing.xl,
    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][6],
  },

  description: {
    textAlign: "center",
    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.sm,
    },
  },

  text: {
    fontSize: 17,
    lineHeight: 1.8,
    color: theme.colors.gray,
  },

  image: {
    maxWidth: "100%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "80%",
      margin: "auto",
    },
  },
  video: {
    position: "relative",
    paddingTop: "66.25%",
    [`.react-player`]: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
}));

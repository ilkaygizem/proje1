import React from "react";
import type { NextPage } from "next";
import {
  createStyles,
  Title,
  Text,
  Container,
  Accordion,
  List,
} from "@mantine/core";
import Head from "next/head";

import { Dots } from "../public/assets/icons/dots";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

const NasılPaydasOlunur: NextPage = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Head>
        <title>Nasıl Paydaş Olunur? - Milli Teknoloji Akademisi - MTA</title>
      </Head>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Nasıl Paydaş{" "}
            <Text component="span" className={classes.highlight} inherit>
              Olunur?
            </Text>
          </Title>

          <Container pt={30}>
            <Accordion variant="separated" defaultValue="1">
              <Accordion.Item className={classes.item} value="1">
                <Accordion.Control>
                  Paydaş Olmak İçin Nasıl Bir Yol İzlenmelidir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Sektör Kampüste Programı üniversite-sektör iş birliğini
                    merkeze alarak paydaş firma ve üniversitelerin
                    eşleştirilmesiyle oluşturulan bir eğitim modelidir. Sektör
                    Kampüste Programı firma ve üniversite paydaşlığı süreci
                    doğrudan Sanayi ve Teknoloji Bakanlığı koordinasyonunda
                    firma ve üniversitelerle birebir iletişimde yürütülmekte ve
                    hizmet verilmektedir. 
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="2">
                <Accordion.Control>
                  Üniversite paydaşlığı durumunda sorumluluklarımız neler?
                </Accordion.Control>
                <Accordion.Panel>
                  <List icon="-">
                    <List.Item>
                      <Text size="sm">
                        Dersin tüm akademik yükümlülüklerinin üstlenilmesi
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="sm">
                        Ders için en az bir asistan/gözlemci görevlendirilmesi
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="sm">
                        Sınavların yüz yüze yapılması ve değerlendirilmesi
                      </Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="3">
                <Accordion.Control>
                  Firma paydaşlığı durumunda sorumluluklarımız neler?
                </Accordion.Control>
                <Accordion.Panel>
                  <List icon="-">
                    <List.Item>
                      <Text size="sm">
                        Her bir ders için haftada toplam 4 saat olmak üzere 14
                        hafta boyunca çevrimiçi eğitimlerin verilmesi,{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="sm">
                        Proje, ara ve final sınav içeriklerine katkı sağlanması
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="sm">
                        Ders materyallerinin (sunum, video, makale) uzaktan
                        eğitim portalına yüklenmesi
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="sm">
                        Dönem sonunda dersi alan öğrencilerin %5’i kadar
                        öğrenciyi staj değerlendirmesine almak için azami
                        gayreti gösterilmesi
                      </Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="4">
                <Accordion.Control>
                  Süreç kimler aracılığıyla yürütülecektir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Firmaların ve üniversitelerin belirlediği kurumsal
                    temsilciler ile birlikte ana koordinasyon Sanayi ve
                    Teknoloji Bakanlığı tarafından yürütülecektir.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="5">
                <Accordion.Control>
                  Kurumsal Temsilci kimdir, süreçte görevleri nelerdir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Kurumsal temsilci Paydaş firma ve üniversiteler tarafından
                    Sektör Kampüste Programının eksiksiz uygulanması için
                    Protokol kapsamında yer alan görev ve sorumlulukları takip
                    edecek, paydaş firma/üniversite adına programda görev alan
                    tüm şahıs ve/veya kuruluşları bilgilendirerek gerekli
                    koordinasyonu sağlayacak kişidir.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="6">
                <Accordion.Control>
                  Protokol imzalandıktan sonraki süreç nasıl ilerleyecektir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Protokol imzalanmasına müteakip paydaş firmalarımızdan ders
                    açma formlarına uygun olarak dersleri oluşturmaları; paydaş
                    üniversitelerimizden bu derslerin hangi bölümlerde
                    açılabileceği konusunda geri dönüş gerçekleştirmesi
                    beklenmektedir.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="7">
                <Accordion.Control>
                Paydaş kurumlarımız hangi dersleri açabilecektir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                  Paydaş kurumlarımız güçlü olduğu ve çalışmalar yürüttüğü alan(lar)da kendi ürün, hizmet ve uygulamaları konusunda içerikler oluşturarak ders açabileceklerdir. 
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="8">
                <Accordion.Control>
                Üniversite- firma eşleştirmesi neye göre yapılıyor?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                  Üniversitelerden gelen talepler doğrultusunda bölüm- ders uygunluğuna göre eşleştirme yapılmaktadır. 
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="9">
                <Accordion.Control>
                Dersler nerede işlenir?
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                  milliteknolojiakademisi.gov.tr portali üzerinden çevrim içi şekilde gerçekleşmektedir. 
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Text fw={500} mt="xl">
            Sektör Kampüste Programı hakkında daha detaylı bilgi almak ve paydaş olmak için;</Text>
            <Text size="sm"><br/>E-posta: milliteknolojiakademisi@sanayi.gov.tr<br/>Telefon: 444 61 00/ 19966 
            <br/>Adres: Mustafa Kemal Mahallesi Dumlupınar Bulvarı (Eskişehir Yolu 7.km) 2151. Cadde No:154/A 06530 Çankaya/ANKARA</Text>

                  
          </Container>
        </div>
      </Container>
    </>
  );
};

export default NasılPaydasOlunur;

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
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][6],
  },

  description: {
    textAlign: "center",
    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },
  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    transition: "transform 150ms ease, box-shadow 100ms ease",
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 4,
      backgroundColor: theme.white,
    },
    "&:hover::before": {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  },
}));

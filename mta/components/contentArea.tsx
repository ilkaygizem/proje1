import { createStyles, Text, Image, Container, List } from "@mantine/core";

export function ContentArea() {
  const { classes } = useStyles();
  return (
    <div className={classes.bodyBG}>
      <Container size="xl" className={classes.wrapper}>
        <div className={classes.body}>
          <Text weight={500} size="xl" mb={25}>
            Milli Teknoloji Akademisi ile
          </Text>
          <Text >
          Milli Teknoloji Hamlesi’nin gerçekleşmesi yolunda ülkemizin teknolojik yetkinliğini geliştirmek amacıyla paydaşlarımız arasında işbirliği tesis ederek etki gücü yüksek öğrenme ve gelişim programları hayata geçiriyor ve bu konuda değer üretilmesine öncülük ediyoruz.
          </Text>
        </div>
        <div className={classes.image}>
          <Image alt="Paydaşlar" src="/assets/yildiz-resim.png" />
        </div>
      </Container>

      <Container size="xl" className={classes.wrapperReverse}>
        <div className={classes.image}>
          <Image alt="Paydaşlar" src="/assets/integrations.png" />
        </div>
        <div className={classes.bodyReverse}>
          <Text weight={500} size="xl" mb={25}>
            Akademinin Hedefledikleri
          </Text>

          <List spacing="xs"  icon="&#10022;">
            <List.Item>Eğitimi herkes için her yerde erişilebilir kılmak.</List.Item>
            <List.Item>Milli ve özgün ileri teknoloji, ürün ve sistemlerin üretimini
              artıracak insan kapasitesini güçlendirmek.</List.Item>
            <List.Item>İş dünyası ile etkileşimli bir yapı kurarak uygulamalara ve iş
              yapma kültürüne dair deneyim imkanı sunmak.</List.Item>
            <List.Item>Sektörel tecrübenin başrolde olduğu bir kurgu ile eğitimden
              istihdama bir yol oluşturmak.</List.Item>
          </List>

        </div>
      </Container>
    </div>
  );
}
const useStyles = createStyles((theme) => ({
  bodyBG: {
    paddingTop: 90,
    paddingBottom: 90,

    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0.28) 0%, rgba(217, 217, 217, 0) 100%)",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  wrapperReverse: {
    display: "flex",
    alignItems: "center",
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "60%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 2,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  bodyReverse: {
    paddingLeft: theme.spacing.xl * 4,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },
}));

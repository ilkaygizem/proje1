import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, ButtonStylesParams } from "@mantine/core";
import Layout from "../components/layout";
import GlobalStyles from "../styles/globalStyles";
import { RouterTransition } from "../components/routerTransition";
//import Script from "next/script";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          Milli Teknoloji Akademisi - Sanayi ve Teknoloji Bakanlığı
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Bugünün ve geleceğin becerilerini kazandıran yeni nesil dijital okul. Sektörlerin tecrübesi ışığında tasarlanan programlar geleceğe hazırlan!"
        />
      </Head>

      {/*       <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id="
      />

      <Script id="google-ga4" strategy="lazyOnload">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-', {
         page_path: window.location.pathname,
         });
        `}
      </Script> */}

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {
            Button: {
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  height: 40,
                  borderRadius: 15,
                  fontWeight: 500,
                },
              }),
            },
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1366,
                },
              },
            },
          },
          colors: {
            mtaColors: ['#f39aa8', '#f18193', '#ee687d', '#eb4f67', '#e83652', '#e51d3c', '#e30427', '#cc0323', '#b5031f','#9e021b' ],
          },
          primaryColor: 'mtaColors',
          fontFamily: "DM Sans, sans-serif",
          fontSizes: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 22,
          },
          headings: {
            fontFamily: "DM Sans, sans-serif",
            fontWeight: "500",
          },
        }}
      >
        <GlobalStyles />
        <RouterTransition />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

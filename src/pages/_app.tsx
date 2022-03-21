import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import "../styles/globals.css";
import { theme } from "../modules/theme/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
      <link rel="icon" type="image/png" href="/droppy.png" />
      </Head>
      <DefaultSeo
        description="droppy is a self-hosted file storage server with a web interface and capabilities to edit files and view media directly in the browser. It is particularly well-suited to be run on low-end hardware like the Raspberry Pi."
        openGraph={{
          type: "website",
          site_name: "droppy",
        }}
        twitter={{
          handle: "@droppyjs",
          site: "@droppyjs",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

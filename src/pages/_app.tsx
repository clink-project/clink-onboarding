import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Clink</title>
        {/* <meta name="description" content="블록코딩으로 배포하기" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`font-sans ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);

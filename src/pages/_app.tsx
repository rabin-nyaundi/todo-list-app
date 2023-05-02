import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={` overflow-x-hidden overflow-y-auto ${roboto.className}`}>
      <Component {...pageProps} />;
    </main>
  );
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AccessibilityProvider } from "@/contex/AccessibilityContext";
import ScreenMaskContext from "@/contex/ScreenMaskContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccessibilityProvider>
      <Header />
      <ScreenMaskContext>
        <Component {...pageProps} />
      </ScreenMaskContext>
      <Footer />
    </AccessibilityProvider>
  );
}

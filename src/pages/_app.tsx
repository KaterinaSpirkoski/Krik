import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScreenMask from "@/components/ScreenMask";
import { AccessibilityProvider } from "@/contex/AccessibilityContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccessibilityProvider>
      <ScreenMask>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ScreenMask>
    </AccessibilityProvider>
  );
}

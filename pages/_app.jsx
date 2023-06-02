import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode, useEffectOnce } from "usehooks-ts";

// Initialize Vivid (https://vivid.lol)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

const siteTitle = "Cute puppies - Click a button, see a puppy";
const siteDescription = "My girlfriend really likes puppies. You will too. ";

const App = ({ Component, pageProps }) => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  // Initialize animations
  useEffectOnce(() => {
    AOS.init({
      once: true,
      // Animations always disabled in dev mode; disabled on phones in prod
      disable: process.env.NODE_ENV === "development" ? true : "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta
          property="og:image"
          content="https://www.greencrossvets.com.au/wp-content/uploads/2022/01/Dachshund-Dog-Breed-1-683x1024.jpg"
        />
      </Head>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        themeColor={isDarkMode ? "#18181b" : "#fafafa"}
        openGraph={{
          title: siteTitle,
          description: siteDescription,
        }}
      />
      <Component
        {...pageProps}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
};

export default App;

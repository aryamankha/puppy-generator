import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { Theme } from '@radix-ui/themes';


const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Theme>
          <Script strategy="beforeInteractive" src="/scripts/darkModeScript.js" />
          <Main />
          <NextScript />
        </Theme>
      </body>
    </Html>
  );
};

export default Document;

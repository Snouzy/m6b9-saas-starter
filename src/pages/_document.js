import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Méta-balises pour améliorer le comportement des liens externes */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="always" />

        {/* Pour indiquer aux navigateurs que cette page peut ouvrir des applications externes */}
        <meta property="al:web:should_fallback" content="false" />
        <meta property="al:android:url" content="android-app://com.android.chrome/https/example.com" />
        <meta property="al:ios:url" content="https://example.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

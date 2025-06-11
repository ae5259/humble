import { Helmet } from "react-helmet";

function SEO() {
  return (
    <Helmet>
      <meta
        name="description"
        content="Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here."
      />
      <meta
        property="og:description"
        content="Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here."
      />
      <meta property="og:site_name" content="akumarujon UwU" />
      <meta property="og:url" content="https://akumaru.ninja" />
      <meta property="og:image" content="https://akumaru.ninja/og.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:image" content="https://akumaru.ninja/og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>akumarujon UwU</title>
    </Helmet>
  );
}

export default SEO;

import { Helmet } from "react-helmet-async";

function SEO({
  title = "akumarujon UwU",
  description =
    "Konichiwa, I'm akumarujon, self-taught Developer from Uzbekistan. This is my personal website. You can find more information about me here.",
  url = "https://akumaru.ninja",
  image = "https://akumaru.ninja/og.png",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="akumarujon UwU" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default SEO;

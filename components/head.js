import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Ella";
  const description =
    "Hey, I'm Ella, and this is my corner of the internet. I'm a curious student interested in web development and design.";
  const keywords = "portfolio, react, website, freelance";
  const author = "Ella";
  const twitter = "@ella";
  //const image = "/ogimage.png"; // This is your OpenGraph image
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="ella.cx" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <script src='https://analytics.stacc.cc/api/script/eLOZALYw5rVL'></script>
      {children}
    </Head>
  );
}

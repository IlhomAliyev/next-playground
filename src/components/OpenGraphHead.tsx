import Head from "next/head";

export const OpenGraphHead = ({ imageURL }: { imageURL: string }) => {
  return (
    <Head>
      <title>TEST</title>
      {/* OpenGraph */}
      <meta name="title" content="Test Title" />
      <meta name="description" content="Test Description" />
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://google.com/" />
      <meta property="og:title" content="Test Title" />
      <meta property="og:description" content="Test Description" />
      <meta property="og:image" content={imageURL} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://google.com/" />
      <meta property="twitter:title" content="Test Title" />
      <meta property="twitter:description" content="Test Description" />
      <meta property="twitter:image" content={imageURL} />
    </Head>
  );
};

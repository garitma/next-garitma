import Head from "next/head";
import Script from "next/script";


const Schema = ({ title, image }) => {
  return (
    <Head>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "author": "Garitma",
            "image": "${image}",
            "name": "${title}"
          }
          `,
        }}
      />
    </Head>
  );
};

export default Schema;

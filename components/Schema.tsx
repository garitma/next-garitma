import Head from "next/head";

type Props = {
    title: string
    image: string
}

const Schema = ({title, image}: Props) => {
  return (
    <Head>
      <script
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

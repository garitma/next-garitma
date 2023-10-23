import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices/index";
import Layout from "@/components/Layout";

type HomeProps = {
  doc: prismic.Content.HomeDocument;
};

const Home = ({ doc }) => {
  return (
    <Layout>
      <SliceZone slices={doc.data.slices} components={components} />
    </Layout>
  );
};

export async function getServerSideProps({
  previewData,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<HomeProps>> {
  const client = createClient({ previewData });

  try {
    //Querying all data
    const [homepage] = await Promise.all([client.getSingle("home")]);

    return {
      props: {
        doc: homepage,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default Home;

import { Section } from "aura-design-system";
import { getLayout } from "@services/prismic-graphql";
import Head from "next/head";

import GLOBAL from "garitmic.config.json";
import PageSeo from "@seo/PageSeo";
import Layout from "@components/Layout";
import ContactForm from "@components/ContactForm";

const Contact = ({ preview, layout }) => (
  <Layout data={layout} preview={preview} text="Información de contacto">
    <Head>
      <title>Información de contacto | {GLOBAL.siteName}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta
        name="description"
        content="Las soluciones personalizadas de Garitma son creadas con el fin de apoyar a las marcas y empresas a generar contenido y productos de valor para su audiencia."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${GLOBAL.social.twitter}`} />
      <meta name="twitter:creator" content={`@${GLOBAL.social.twitter}`} />
      <meta property="og:url" content={`${GLOBAL.siteURL}/contacto`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`Información de contacto | ${GLOBAL.siteName}`}
      />
      <meta
        property="og:description"
        content="Las soluciones personalizadas de Garitma son creadas con el fin de apoyar a las marcas y empresas a generar contenido y productos de valor para su audiencia."
      />
      <meta property="og:image" content={GLOBAL.social.openGrap} />
      <meta
        property="og:image:alt"
        content="Open Graph logo Aura Design System"
      />
      <meta property="og:image:width" content="1140" />
      <meta property="og:image:height" content="570" />
      <link rel="canonical" href={`${GLOBAL.siteURL}/contacto`} />
    </Head>
    <Section container="smash" color="purple">
      <p>
        Las soluciones personalizadas de Garitma son creadas con el fin de
        apoyar a las marcas y empresas a generar contenido y productos de valor
        para su audiencia. Con un portafolio de más de 500 poemas, personajes,
        diseños, cómics, frases y videos; se conforma un ecosistema artístico
        Gartmático que puede ser de provecho para ti. Garitma tiene las
        herramientas, el personal creativo y la experiencia para crear programas
        originales que transmita la esencia del mensaje de tu marca y llevan a
        tus clientes a un mundo Garitmático.
      </p>
      <ContactForm />
    </Section>
  </Layout>
);

export const getStaticProps = async ({ preview = false, previewData }) => {
  const layout = await getLayout(previewData);
  return {
    props: { preview, layout },
  };
};

export default Contact;

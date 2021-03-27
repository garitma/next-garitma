import Section from "aura-design-system/core/section";
import { getPage } from "@utils/prismic-graphql";
import Layout from "@components/Layout";
import ContactForm from "@components/ContactForm";

const Contact = ({ page, preview, layout }) => {
  console.log(page);
  return (
    <Layout preview={preview} text="Información de contacto" meta={page}>
      <Section container="smash" color="teal-green">
        <p>
          Las soluciones personalizadas de Garitma son creadas con el fin de
          apoyar a las marcas y empresas a generar contenido y productos de
          valor para su audiencia. Con un portafolio de más de 500 poemas,
          personajes, diseños, cómics, frases y videos; se conforma un
          ecosistema artístico Gartmático que puede ser de provecho para ti.
          Garitma tiene las herramientas, el personal creativo y la experiencia
          para crear programas originales que transmita la esencia del mensaje
          de tu marca y llevan a tus clientes a un mundo Garitmático.
        </p>
        <ContactForm />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, previewData }) => {
  const page = await getPage("contacto", previewData);

  return {
    props: { page, preview },
  };
};

export default Contact;

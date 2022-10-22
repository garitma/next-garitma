import { GetStaticProps } from "next";
import Grid from "aura-design/grid";
import Section from "aura-design/section";
import Button from "aura-design/button";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

import { getHome } from "@utils/prismic-graphql";
import Image from "@components/Image";
import Layout from "@components/Layout";
import HeroBanner from "@components/HeroBanner";

const Home = ({ allPoemas, allComics, allFrases, allDescargas }) => (
  <Layout text="Garitma">
    <HeroBanner />
    <Section color="purple" container="smash" className="h6 centertxt motion-fadeUp">
      <p className=" mounted">
        Esta es mi imaginación, un espacio personal cargado de arte. Todo
        comenzó como un espacio para subir mis poemas y dibujos sin miedo a las
        críticas, no soy el mejor en lo que hago, pero lo hago. Porque éste es
        un espacio donde las cosas están mejor hechas que perfectas.
      </p>
    </Section>
    <section className="motion-fadeUp">
      <Section color="teal-green" className="h6" passDiv>
        <h3 className="">Poemas</h3>
        <p className="">
          Poemas cortos de amor, desamor y de la vida cotidiana. Mensajes
          bonitos que te servirán de inspiración para decirle a alguien.
        </p>
        <div className="">
          <Button href="/poemas">Leer poemas</Button>
        </div>
      </Section>
      <Section color="teal-green" className="h6" passDiv>
        <Grid col="three" className="">
          {allPoemas.map(({ node }) => (
            <div className="mod zoom" key={node._meta.id}>
              <Link href={`/poemas/${node._meta.uid}`}>
                <a>
                  <Image
                    aspectRatio="1:2"
                    width="1140"
                    src={node.featured_img.url}
                  />
                </a>
              </Link>
              <div className="aura">
                <Link href={`/poemas/${node._meta.uid}`}>
                  <a>
                    <h4 className="mt0 h6">{RichText.asText(node.title)}</h4>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
    </section>
    <section className="motion-fadeUp">
      <Section color="pink" className="h6" passDiv>
        <h3 className="">Cómics</h3>
        <p className="">
          Las increibles aventuras de Chan, Coco, Garritas y Puntitas. Historias
          que te harán sonreír, empatizar y llorar.
        </p>
        <div className="">
          <Link href="/comics" passHref>
            <Button>Leer cómics</Button>
          </Link>
        </div>
      </Section>
      <Section className="h6" color="pink" passDiv>
        <Grid col="three" className="">
          {allComics.map(({ node }) => (
            <div className="mod zoom" key={node._meta.id}>
              <Link href={`/comics/${node._meta.uid}`}>
                <a>
                  <Image
                    aspectRatio="1:2"
                    width="1140"
                    src={node.featured_img.url}
                    alt={node.featured_img.alt}
                  />
                </a>
              </Link>
              <div className="aura">
                <Link href={`/comics/${node._meta.uid}`}>
                  <a>
                    <h4 className="mt0 h6">{RichText.asText(node.title)}</h4>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
    </section>
    <section className="motion-fadeUp">
      <Section color="blue" className="h6" passDiv>
        <h3 className="">Frases</h3>
        <p className="">
          Frases para decirle a alguien. Son frases comunes un tanto no tan
          comunes que han sido mis mensajes, pensamientos y reflexiones.
        </p>
        <Link href="/frases" passHref>
          <Button>Leer frases</Button>
        </Link>
      </Section>
      <Section color="blue" className="h6" passDiv>
        <Grid col="three">
          {allFrases.map(({ node }) => (
            <div className="mod zoom" key={node._meta.id}>
              <div className="aura valign vfluid">
                <blockquote className="mt0 h3 centertxt">
                  {RichText.asText(node.title)}
                </blockquote>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
    </section>
    <Section color="orange" className="h6 centertxt motion-fadeUp">
      <h3 className="">Fondos de pantalla</h3>
      <p className="">
        Fondos de pantalla para tu celular hechos con arte y amor. Cada fondo de
        pantalla es único y puedes usarlo en tu móvil o tablet totalente gratis.
      </p>
      <Grid col="fourd" className="">
        {allDescargas.map(({ node }) => (
          <div className="zoom" key={node._meta.id}>
            <Link href={`/descargas/${node._meta.uid}`}>
              <a>
                <Image
                  aspectRatio="9:16"
                  src={node.featured_img.url}
                  alt={node.featured_img.alt}
                  width="400"
                />
              </a>
            </Link>
          </div>
        ))}
      </Grid>
      <div className="pad ">
        <Link href="/descargas" passHref>
          <Button>Ver fondos de pantalla</Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  try {
    const doc = await getHome(previewData);

    return {
      props: {
        allPoemas: doc?.allPoemass?.edges ?? null,
        allComics: doc?.allComicss?.edges ?? null,
        allFrases: doc?.allFrasess?.edges ?? null,
        allDescargas: doc?.allDescargass?.edges ?? null,
        preview,
      },
    };
  } catch (e) {
    console.log(e);
    return { notFound: true };
  }
};

export default Home;

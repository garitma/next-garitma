import Button from "aura-design-system/core/button";
import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";

import Image from "next/image";
import Link from "next/link";
import Layout from "@components/Layout";
import GeneralSeo from "@seo/GeneralSeo";

const Home = ({ preview, layout }) => (
  <Layout preview={preview} text="Garitma">
    <GeneralSeo />
    <Section
      style={{
        backgroundImage:
          "url(https://images.prismic.io/garitma/e0fbb4a9-7395-4818-a79f-8642abe6b173_Patron-aura-design.png?auto=compress,format)",
        backgroundSize: "contain",
      }}
      color="purple"
      className="centertxt"
    >
      <h2 className="mb0">Ven conmigo a mi imaginación</h2>
      <p className="smash">
        Te doy la bienvenida a mi blog de arte donde cuento y dibujo historias.
      </p>
      <div className="aura" />
      <div className="halo halign">
        <Image
          src="https://images.prismic.io/garitma/5cb162e5-78fd-42ca-a221-dec5bd36900f_serie-lealtad.jpg?auto=compress,format"
          width={1920 / 2}
          height={800 / 2}
          alt="Historias de Garitma"
        />
      </div>
    </Section>

    <Grid col="two" className="gap0">
      <Link href="/poemas">
        <a className="blue">
          <Section passDiv>
            <div className="halo halign smosh zoom">
              <Image
                src="https://images.prismic.io/garitma/f5924bfe-a81d-4070-a24d-0a9dc0d2a2ee_poemas+garitma.png?auto=compress,format"
                height={300}
                width={300}
                alt="Poemas cortos de amor, desamor e historias cotidianas"
              />
            </div>
            <div className="centertxt">
              <h3 className="h1 mb0">Poemas</h3>
              <p>Poemas cortos de amor, desamor e historias cotidianas.</p>
            </div>
          </Section>
        </a>
      </Link>
      <Link href="/comics">
        <a className="orange">
          <Section passDiv>
            <div className="halo halign smosh zoom">
              <Image
                src="https://images.prismic.io/garitma/e8dad3ca-4445-49b2-ba85-fc8792c7c1d4_comics+garitma.png?auto=compress,format"
                width={292}
                height={224}
                alt="Las increibles aventuras de Chan, Coco, Garritas y Puntitas"
              />
            </div>
            <div className="centertxt">
              <h3 className="h1 mb0">Cómics</h3>
              <p>
                Las increibles aventuras de Chan, Coco, Garritas y Puntitas.
              </p>
            </div>
          </Section>
        </a>
      </Link>
      <Link href="/frases">
        <a>
          <Section passDiv>
            <div className="halo halign smosh zoom">
              <Image
                src="https://images.prismic.io/garitma/6198f5a0-b2ed-45c0-9069-2e05b95a4dec_frases+garitma.png?auto=compress,format"
                width={461}
                height={263}
                alt="Frases para decirle a alguien"
              />
            </div>
            <div className="centertxt">
              <h3 className="h1 mb0">Frases</h3>
              <p>Frases para decirle a alguien.</p>
            </div>
          </Section>
        </a>
      </Link>
      <Link href="descargas">
        <a className="yellow">
          <Section passDiv>
            <div className="halo halign smosh zoom">
              <Image
                src="https://images.prismic.io/garitma/b7472665-8b42-45c4-b2ec-9beaafef2585_fondos+de+pantalla+garitma.png?auto=compress,format"
                width={692}
                height={320}
                alt="Fondos de pantalla originales artísticos para tu celular"
              />
            </div>
            <div className="centertxt">
              <h3 className="h1 mb0">Descargas</h3>
              <p>Fondos de pantalla originales artísticos para tu celular.</p>
            </div>
          </Section>
        </a>
      </Link>
    </Grid>
    <Section
      style={{
        backgroundImage:
          "url(https://images.prismic.io/garitma/02ccef1c-0d07-4c98-9796-5f86994c61b4_rio-background.jpg?auto=compress,format)",
        backgroundSize: "cover",
      }}
      className="centertxt"
    >
      <div className="pad" />
      <div className="pad" />
      <h3 className="h1">Hagamos algo interesante posible</h3>
      <p>
        Si necesitas una solución personalizada, una asesoría o simplemente
        quieres decir: Hola 👋 .
      </p>
      <Link href="/contacto">
        <Button label="Contactar" link />
      </Link>
      <div className="pad" />
      <div className="pad" />
    </Section>
  </Layout>
);

export default Home;

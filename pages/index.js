import Grid from "aura-design/grid";

import Layout from "@components/Layout";
import HeroBanner from "@components/HeroBanner";
import CollectionModule from "@components/CollectionModule";

const Home = ({ preview }) => (
  <Layout preview={preview} text="Garitma">
    <HeroBanner />
    <Grid col="two" className="gap0">
      <CollectionModule
        href="/poemas"
        color="blue"
        src="https://images.prismic.io/garitma/f5924bfe-a81d-4070-a24d-0a9dc0d2a2ee_poemas+garitma.png?auto=compress,format"
        width={402}
        height={381}
        alt="Poemas cortos de amor, desamor e historias cotidianas"
        title="Poemas"
        description="Poemas cortos de amor, desamor e historias cotidianas"
      />
      <CollectionModule
        href="/comics"
        color="orange"
        src="https://images.prismic.io/garitma/e8dad3ca-4445-49b2-ba85-fc8792c7c1d4_comics+garitma.png?auto=compress,format"
        width={292}
        height={224}
        alt="Las increibles aventuras de Chan, Coco, Garritas y Puntitas"
        title="Cómics"
        description="Las increibles aventuras de Chan, Coco, Garritas y Puntitas"
      />
      <CollectionModule
        href="/frases"
        src="https://images.prismic.io/garitma/6198f5a0-b2ed-45c0-9069-2e05b95a4dec_frases+garitma.png?auto=compress,format"
        width={461}
        height={263}
        alt="Frases para decirle a alguien"
        title="Frases"
        description="Frases para decirle a alguien"
      />

      <CollectionModule
        href="/descargas"
        color="yellow"
        src="https://images.prismic.io/garitma/b7472665-8b42-45c4-b2ec-9beaafef2585_fondos+de+pantalla+garitma.png?auto=compress,format"
        width={692}
        height={320}
        alt="Fondos de pantalla originales artísticos para tu celular"
        title="Descargas"
        description="Fondos de pantalla originales artísticos para tu celular."
      />
    </Grid>
  </Layout>
);

export default Home;

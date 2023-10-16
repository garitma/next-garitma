import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";
import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
const Flight = dynamic(() => import("@/components/Flight"), { ssr: false });
const FlightSecond = dynamic(() => import("@/components/FlightSecond"), {
  ssr: false,
});
const Grass = dynamic(() => import("@/components/Grass"), { ssr: false });

const Home = ({ doc, menu }) => {
  return (
    <Layout>
      <Section
        color="pink"
        className="h-[100svh] relative"
        subClassName="vfluid"
        style={{
          backgroundImage: "url('./mountain.jpg')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-0 right-0">
          <Flight />
          <FlightSecond />
        </div>
        <Grid col="two" className="vfluid">
          <div className="valign">
            <Grid col="one" className="z-10">
              <h1>Te doy la bienvenida a mi imaginación</h1>
              <p className="h6">
                Garitma nace de golpe. Un golpe al teclado con el fin de buscar
                un nombre sin sentido que fue corregido hasta tener sentido.
                Hoy, Garitma significa, "No te preocupes".
              </p>
            </Grid>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};

export default Home;

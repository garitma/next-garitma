import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import dynamic from "next/dynamic";

const Flight = dynamic(() => import("@/components/Flight"), { ssr: false });
const Grass = dynamic(() => import("@/components/Grass"), { ssr: false });

const Home = ({ doc, menu }) => {
  return (
    <>
      <Section
        color="pink"
        className="h-[100vh]"
        subClassName="vfluid"
        style={{
          backgroundImage: "url('./mountain.jpg')",
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-0 right-0">
          <Flight />
        </div>
        <div className="absolute bottom-0 right-0">
        <Grass />
        </div>
        <Grid col="two" className="vfluid">
          <div className="valign">
            <h1>Te doy la bienvenida a mi imaginación</h1>
          </div>
        </Grid>
      </Section>
      <Section color="pink" className="h-[100vh]"></Section>
    </>
  );
};

export default Home;

import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import dynamic from "next/dynamic";

const Flight = dynamic(
  () => import("@/components/Flight"),
  { ssr: false }
);

const Home = ({ doc, menu }) => {
  

  return (
    <Section>
      <Grid col="two">
        <div>
          <h1>VISITE</h1>
        </div>
      </Grid>
      <div className="absolute left-0 right-0 ">
      <Flight />
      </div>
    </Section>
  );
};

export default Home;

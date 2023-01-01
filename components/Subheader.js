import Section from "aura-design/section";
import Grid from "aura-design/grid";

import Image from "@components/Image"

const Subheader = ({ title, excerpt, image }) => {
  return (
    <Section className="center-text" color="pink">
      <Grid col="two">
        <div className="valign">
          <div>
            <h1>{title}</h1>
            <p>{excerpt}</p>
          </div>
        </div>
        <div>
          <Image {...image} />
        </div>
      </Grid>
    </Section>
  );
};

export default Subheader;

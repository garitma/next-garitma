import Button from "aura-design/button";
import Section from "aura-design/section";
import Image from "@components/Image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <Section
      style={{
        background:
          "url(https://images.prismic.io/garitma/e0fbb4a9-7395-4818-a79f-8642abe6b173_Patron-aura-design.png)",
        backgroundSize: "contain",
      }}
      color="purple"
      className="centertxt motion-fadeUp mounted"
      container="smash"
    >
      <h2 className="mb0 mt0  mounted">Te doy la bienvenida a mi imaginación</h2>
      <div className="aura" />
      <div className=" mounted">

      <Image 
        src="https://images.prismic.io/garitma/5cb162e5-78fd-42ca-a221-dec5bd36900f_serie-lealtad.jpg?auto=compress,format" 
        aspectRatio="1:2"
        width="715"
      />
      </div>
    </Section>
  );
};

export default HeroBanner;

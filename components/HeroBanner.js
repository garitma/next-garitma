import Button from "aura-design/button";
import Section from "aura-design/section";
import Image from "next/image";
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
  );
};

export default HeroBanner;

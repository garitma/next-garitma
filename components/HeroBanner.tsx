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
      container="smash"
    >
      <h2 className="mb0 mt0">Te doy la bienvenida a mi imaginación</h2>
      <div className="aura" />
      <div dangerouslySetInnerHTML={{__html:`<div style="padding:54.58% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/633782179?h=344e202200&color=cd9ffb&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`}} />
    </Section>
  );
};

export default HeroBanner;

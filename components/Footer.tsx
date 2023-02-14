import Link from "next/link";
import Icon from "@aura-design/system/icon";
import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";

import Image from "@/components/Image";

const Footer = ({ isSuscribePage }) => {
  return (
    <footer>
      <Section>
        <Grid col="six">
          <div className="one">
            <div className="centertxt-small">
              <Image
                src="https://images.prismic.io/garitma/281392c3-2020-4925-b71e-1d28db63a5bf_garitma-logo.png?auto=compress,format"
                width={48}
                height={48}
                alt="Logo Garitma"
              />
            </div>
          </div>
          <div />
          <div />
          <div />
          <div />
          <div className="two smosh">
            
          </div>
        </Grid>
        <div className="aura" />
        <ul className="aureole six centertxt-small">
          <li className="item">
            <a href="https://privacy.garitma.com" target="_blank">
              Terminos de uso
            </a>
          </li>
          <li className="item">
            <a href="https://privacy.garitma.com" target="_blank">
              Políticas de privacidad
            </a>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li className="centertxt-small righttxt">© 2023 Garitma.</li>
        </ul>
        <div className="aura" />
      </Section>
    </footer>
  );
};

export default Footer;

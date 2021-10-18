import Link from "next/link";
import Icon from "aura-design/icon";
import Section from "aura-design/section";
import Grid from "aura-design/grid";
import Button from "aura-design/button";

import Image from "@components/Image";

type Props = {
  isSuscribePage?: boolean;
};

const MyFooter = ({ isSuscribePage }: Props) => {
  return (
    <footer>
      {!isSuscribePage && (
        <Section color="orange-rose">
          <Grid col="two">
            <div>
              <h3>
                Mantente al día conmigo, te enviaré algo al correo de vez en
                cuando.
              </h3>
              <Link href="/suscribirse" passHref>
                <Button>Suscribirse</Button>
              </Link>
            </div>
            <div className="mod-media">
              <img src="https://media.giphy.com/media/edYNMFY1Fm8JP8eXVs/giphy.gif" />
            </div>
          </Grid>
        </Section>
      )}
      <Section>
        <Grid col="six">
          <div className="one">
            <div className="centertxt-small">
              <Image
                src="https://images.prismic.io/garitma/281392c3-2020-4925-b71e-1d28db63a5bf_garitma-logo.png?auto=compress,format&w=96"
                width={48}
                aspectRatio="1:1"
                alt="Logo Garitma"
              />
            </div>
          </div>
          <div/>
          <div/>
          <div/>
          <div/>
          <div className="two smosh">
            <ul className="nav-list">
              <li className="item">
                <a
                  href="https://instagram.com/garitma"
                  target="_blank"
                  rel="noopener"
                  aria-label="Abrir instagram"
                >
                  <Icon sprite="instagram" />
                </a>
              </li>
              <li className="item">
                <a
                  href="https://twitter.com/garitma"
                  target="_blank"
                  rel="noopener"
                  aria-label="Abrir Twitter"
                >
                  <Icon sprite="twitter" />
                </a>
              </li>
              <li className="item">
                <a
                  href="https://giphy.com/garitma"
                  target="_blank"
                  rel="noopener"
                  aria-label="Abrir giphy"
                >
                  <Icon sprite="giphy" />
                </a>
              </li>
            </ul>
          </div>
        </Grid>
        <div className="aura" />
        <ul className="aureole six centertxt-small">
          <li className="item">
            <Link href="/informacion-legal">
              <a> Terminos de uso</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/informacion-legal">
              <a>Políticas de privacidad</a>
            </Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li className="centertxt-small righttxt">© 2021 Garitma.</li>
        </ul>
        <div className="aura" />
      </Section>
    </footer>
  );
};

export default MyFooter;

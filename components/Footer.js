import Link from "next/link";
import Icon from "aura-design/icon";
import Section from "aura-design/section";
import Grid from "aura-design/grid";
import Image from "next/image";

const MyFooter = () => {
  return (
    <footer>
      <Section>
        <Grid col="two">
          <div className="one smosh">
            <div className="centertxt-small">
              <Image
                src="https://images.prismic.io/garitma/281392c3-2020-4925-b71e-1d28db63a5bf_garitma-logo.png?auto=compress,format&w=96"
                width={48}
                height={48}
                alt="Logo Garitma"
              />
            </div>
            <p className="centertxt-small">
              © 2021 Garitma. Todos los derechos reservados
            </p>
            <ul className="nav-list">
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
            </ul>
          </div>
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
      </Section>
    </footer>
  );
};

export default MyFooter;

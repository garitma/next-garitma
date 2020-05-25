import Link from "next/link";

import Error from "./_error";
import GeneralSeo from "../components/seo/GeneralSeo";
import Layout from "../components/organism/Layout";
import SmartModule from "../components/organism/SmartModule";
import SubHeader from "../components/molecules/SubHeader";
import { Client, Prismic } from "../api/prismic";
import Wrap from "../components/atoms/Wrap";
import GalleryCarousel from "../components/molecules/GalleryCarousel";

export default class Home extends React.Component {
  static async getInitialProps({ req, res }) {
    try {
      let [poems, quotes, comics, downloads, home] = await Promise.all([
        Client(req).query(Prismic.Predicates.at("document.type", "poemas"), {
          orderings: "[my.poemas.date desc]",
          pageSize: 1,
        }),
        Client(req).query(Prismic.Predicates.at("document.type", "frases"), {
          orderings: "[my.frases.date desc]",
          pageSize: 1,
        }),
        Client(req).query(Prismic.Predicates.at("document.type", "comics"), {
          orderings: "[my.comics.date desc]",
          pageSize: 1,
        }),
        Client(req).query(Prismic.Predicates.at("document.type", "descargas"), {
          orderings: "[my.descargas.date desc]",
          pageSize: 1,
        }),
        Client(req).getSingle("homepage"),
      ]);

      return {
        poems,
        quotes,
        comics,
        downloads,
        home,
        statusCode: 200,
      };
    } catch (e) {
      res.statusCode = 503;
      return {
        poems: null,
        quotes: null,
        comics: null,
        downloads: null,
        home: null,
        statusCode: 503,
      };
    }
  }

  renderModule(document) {
    return document.results.map((document, index) => (
      <SmartModule
        document={document}
        key={index}
        onClickPost={this.openPost}
      />
    ));
  }

  renderCarouselSlice(slice) {
    return slice.data.carousel.map((slice, index) => (
      <div key={index} className={`valign pad ${slice.color_class}`}>
        {this.renderModule(this.props[slice.post_type])}
      </div>
    ));
  }

  renderBody() {
    const { home } = this.props;

    return (
      <Layout seo={<GeneralSeo />}>
        <SubHeader text="Garitma" />

        <Wrap classSection="teal-green" classDiv="smash centertxt">
          <strong>Ven conmigo a mi imaginación</strong>
          <p>
            Este es un blog de arte y entretenimiento donde las cosas están
            mejor hechas que perfectas. Lo haces, te equivocas, mejoras y te
            perfeccionas.
          </p>
        </Wrap>
        <Wrap classSection="pink-purple" classDiv="smesh">
          <h2>Publicaciones más reciente</h2>
          <GalleryCarousel>{this.renderCarouselSlice(home)}</GalleryCarousel>
        </Wrap>
        <Wrap classSection="blue" classDiv="smush">
          <div className="aureole two">
            <div className="one">
              <div className="wall-pad centertxt vfluid valign">
                <h3 className="mb0 ban-title light h1">¿De dónde vengo?</h3>
                <p className="h6 light">
                  Garitma nace de golpe. Un golpe al teclado con el fin de
                  buscar un nombre sin sentido que fue corregido hasta tener
                  sentido. Vengo de un mundo que no es tan teso, de entender que
                  las cosas se pueden hacer por ti mismo.
                </p>
              </div>
            </div>
            <div className="two">
              <div className="block-img">
                <img src="https://media.giphy.com/media/nbFu0f51DMsdshaF4U/source.gif" />
              </div>
            </div>
          </div>
        </Wrap>
        <Wrap classSection="orange" classDiv="smush">
          <div className="aureole two">
            <div className="one">
              <div className="wall-pad centertxt vfluid valign">
                <p className="mb0 ban-title light h1">
                  De perder el miedo a mostrar lo se hace
                </p>
                <p className="h6 light">
                  Siendo consiente que existen un chibión de personas que lo
                  pueden hacer mejor que yo. Del error que hace parte de
                  nosotros como hu- manos. Vengo de las piedras que hacen parte
                  del camino que te enseñan a levantarte y continuar el camino.
                </p>
              </div>
            </div>
            <div className="two">
              <div className="block-img">
                <img src="https://media.giphy.com/media/dmYHDHn4gxNvPTviTu/source.gif" />
              </div>
            </div>
          </div>
        </Wrap>
        <Wrap classSection="purple" classDiv="smush">
          <div className="aureole two">
            <div className="one">
              <div className="wall-pad centertxt vfluid valign">
                <p className="mb0 ban-title light h1">
                  Del detenerme a observar
                </p>
                <p className="h6 light">
                  Todos los errores que he tenido. De todas las caídas y heridas
                  que me ha de- jado el camino y el aprendizaje que me han
                  dejado.
                </p>
              </div>
            </div>
            <div className="two">
              <div className="block-img">
                <img src="https://media.giphy.com/media/ypopa4DrhSPKcZWDm4/source.gif" />
              </div>
            </div>
          </div>
        </Wrap>
        <Wrap classSection="yellow" classDiv="smush">
          <div className="aureole two">
            <div className="one">
              <div className="wall-pad centertxt vfluid valign">
                <h2 className="mb0 ban-title light h1">
                  ¿Puedo ayudarte en algo?
                </h2>
                <p className="h6 light">Es un gusto para mí apoyarte.</p>
                <div className="centertxt">
                  <Link href="/informacion-de-contacto">
                    <a className="button-fill">Contáctame</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="two">
              <div className="block-img">
                <img src="https://media.giphy.com/media/67uBG7ANa1k6ettgvE/source.gif" />
              </div>
            </div>
          </div>
        </Wrap>
      </Layout>
    );
  }

  render() {
    const { statusCode } = this.props;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return this.renderBody();
  }
}

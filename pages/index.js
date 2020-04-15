import Error from "./_error";
import GeneralSeo from "../components/seo/GeneralSeo";
import Layout from "../components/organism/Layout";
import SmartModule from "../components/organism/SmartModule";
import SubHeader from "../components/molecules/SubHeader";
import { Client, Prismic } from "../api/prismic";
import Wrap from "../components/atoms/Wrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openPost: null };
  }

  static async getInitialProps({ req, res }) {
    try {
      let [
        poems,
        quotes,
        comics,
        videos,
        downloads,
        podcasts,
        home,
      ] = await Promise.all([
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
        Client(req).query(Prismic.Predicates.at("document.type", "videos"), {
          orderings: "[my.videos.date desc]",
          pageSize: 1,
        }),
        Client(req).query(Prismic.Predicates.at("document.type", "descargas"), {
          orderings: "[my.descargas.date desc]",
          pageSize: 1,
        }),
        Client(req).query(Prismic.Predicates.at("document.type", "podcasts"), {
          orderings: "[my.descargas.date desc]",
          pageSize: 1,
        }),
        Client(req).getSingle("homepage"),
      ]);

      return {
        poems,
        quotes,
        comics,
        videos,
        downloads,
        podcasts,
        home,
        statusCode: 200,
      };
    } catch (e) {
      res.statusCode = 503;
      return {
        poems: null,
        quotes: null,
        comics: null,
        videos: null,
        downloads: null,
        podcasts: null,
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
      <Wrap classSection={slice.color_class} classDiv="smash" key={index}>
        {this.renderModule(this.props[slice.post_type])}
      </Wrap>
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

        {this.renderCarouselSlice(home)}
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

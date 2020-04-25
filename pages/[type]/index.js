import { RichText } from "prismic-reactjs";
import { Client, Prismic } from "../../api/prismic";
import GaritmicConfig from "../../garitmic.config.json";
import Layout from "../../components/organism/Layout";
import SubHeader from "../../components/molecules/SubHeader";
import ArchiveSeo from "../../components/seo/ArchiveSeo";
import Error from "../_error";
import SmartModule from "../../components/organism/SmartModule";
import Pagination from "../../components/molecules/Pagination";
import Wrap from "../../components/atoms/Wrap";

export default class extends React.Component {
  static async getInitialProps({ query, req, res }) {
    const { page } = query;
    const { type } = query;

    try {
      const request = req && req.headers ? req : null;
      let [archive, category] = await Promise.all([
        Client(request).query(
          Prismic.Predicates.at("document.type", `${type}`),
          {
            orderings: `[my.${type}.date desc]`,
            pageSize: `${GaritmicConfig.ArchivePageSize}`,
            page: `${page ? page : [1]}`,
          }
        ),
        Client(req).getByUID("category", `${type}`),
      ]);

      if (archive.results.length === 0) {
        res.statusCode = 404;
        return { archive: null, category: null, statusCode: 404 };
      }

      return { archive, category, type, statusCode: 200 };
    } catch (e) {
      return { archive: null, category: null, type: null, statusCode: 503 };
    }
  }

  renderArchives() {
    const { archive } = this.props;

    return archive.results.map((document, index) => (
      <SmartModule document={document} key={index} />
    ));
  }

  renderPagination() {
    const { archive, type } = this.props;

    return <Pagination document={archive} root={`/${type}/`} string="?" />;
  }

  renderBody() {
    const { archive, type, category } = this.props;
    return (
      <Layout seo={<ArchiveSeo document={archive} />}>
        <SubHeader text={GaritmicConfig.types[type].name} />
        <Wrap classSection="teal-green" classDiv="smash centertxt">
          <p>{RichText.asText(category.data.excerpt)}</p>
        </Wrap>

        <section
          className="archives pad"
          style={{ backgroundColor: category.data.color || "" }}
        >
          <div className="smash">
            <div className="aureole one">{this.renderArchives()}</div>
          </div>
        </section>

        <section className="pagination pad">
          {archive.total_results_size > GaritmicConfig.ArchivePageSize &&
            this.renderPagination()}
        </section>
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

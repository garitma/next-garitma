import Link from "next/link";
import { Client } from "../api/prismic";

export default class navigation extends React.Component {
  static async getInitialProps({ req, res }) {
    try {
      let slug = "garitma-navigation";

      const nav = await Client(req).query(
        Prismic.Predicates.at("my.navigation.uid", `${slug}`)
      );

      return { nav, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { nav: null, statusCode: 503 };
    }
  }

  renderModule() {
    const { nav } = this.props;

    return nav.results.data.menu.map((nav, index) => (
      <li key={index}>
        <Link href="/categorias/[type]" as="/categorias/poemas">
          <a className="menu-item">Poemas</a>
        </Link>
      </li>
    ));
  }

  render() {
    return <ul className="nav-list flowx wall-pad">{this.renderModule()}</ul>;
  }
}

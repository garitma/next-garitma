import { Client, Prismic, linkResolver } from "../api/prismic";
import Layout from "../components/organism/Layout";
import { RichText } from "prismic-reactjs";
import SingleRead from "../components/templates/SingleRead";

export default class Preview extends React.Component {
  static async getInitialProps(context) {
    const token = context.query.token;
    const { req, res } = context;

    const url = await Client(req).previewSession(token, linkResolver, "/");
    res.writeHead(302, { Location: url });
    res.end();
    return {};
  }

  render() {
    return <Layout>Preview</Layout>;
  }
}

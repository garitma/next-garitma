import { Client, Prismic } from "../../api/prismic";
import Layout from "../../components/organism/Layout";
import SingleRead from "../../components/templates/SingleRead";
import Error from "../_error";

const Post = (props) => {
  if (props.statusCode !== 200) {
    return <Error statusCode={props.statusCode} />;
  }
  return (
    <Layout>
      <SingleRead document={props.post} />
    </Layout>
  );
};

Post.getInitialProps = async ({ query, res, req }) => {
  try {
    let uid = [query.uid];
    let type = [query.type];

    const post = await Client(req).getByUID(`${type}`, `${uid}`);

    if (post === undefined) {
      return { post: null, statusCode: 404 };
    }

    return { post, statusCode: 200 };
  } catch (e) {
    res.statusCode = 503;
    return { post: null, statusCode: 503 };
  }
};

export default Post;

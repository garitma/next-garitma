import Collection from "@components/Collection";

const ArticleRelatedPost = ({ news }) => (
  <section className="pad">
    <div className="smash">
      <div className="aureole one">
        {news.map(({ node }) => (
          <Collection
            key={node._meta.uid}
            tags={node._meta.tags}
            title={node.title}
            featured_img={node.featured_img}
            date={node.date}
            slug={node._meta.uid}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ArticleRelatedPost;

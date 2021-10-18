import ArticlePoems from "@components/ArticlePoems"
import ArticleComic from "@components/ArticleComic"
import ArticleWallPaper from "@components/ArticleWallPaper"

type Props = {
    type: any,
    doc: any
};

const ArticleContent = ({type, doc}) => {
  switch (type) {
    case "poemas":
      return <ArticlePoems doc={doc}/>;
    case "comics":
      return <ArticleComic doc={doc} />;
    case "descargas":
      return <ArticleWallPaper  doc={doc} />;
  }
};

export default ArticleContent